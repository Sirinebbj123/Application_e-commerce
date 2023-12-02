import React, { useState } from "react";
import CommonSection from "../components/Uinterface/commonSection";
import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import '../Styles/checkout.css';
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import emailjs from '@emailjs/browser';

const Checkout = () => {
    const totalQty = useSelector(state => state.cart.totalQuantity);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [codePostal, setCodePostal] = useState('');
    const [country, setCountry] = useState('');
    const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
    const [confirmed, setConfirmed] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const serviceId = 'service_xtg7syr';
        const templateId = 'template_ssg38ja';
        const publicKey = '_ZNU6HjlovV-cdHGD';

         const emailStyle = `
        font-family: Arial, sans-serif;
        color: #333;
        background-color: #f4f4f4;
        padding: 20px;
        border-radius: 8px;
    `;
    const confirmationLink = 'http://localhost:5177/'; // Remplacez ceci par votre propre lien de confirmation


        const templateParams = {
            from_name: "SJBO_BOIS_ARTISANAT",
            from_email: email,
            to_name: name,
            message:`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n\Address: ${address}\nCity: ${city}\nPostal Code: ${codePostal}\nCountry: ${country}\nTotal Quantity: ${totalQty} items\nTotal Amount: ${totalAmount} DNT\nPour Confirmer l'achat, veuillez cliquer <a href="${confirmationLink}">ici</a>.`,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setPhoneNumber('');
                setAddress('');
                setCity('');
                setCodePostal('');
                setCountry('');
                setShowOrderConfirmation(true);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    }

    const handleConfirmation = async () => {
        setConfirmed(true);
        
        // Lien de confirmation d'achat
        const confirmationLink = 'https://votre-site.com/confirmation';
    
        // Message de confirmation avec le lien
        const confirmationMessage = `
            Merci pour votre commande! Votre commande a été confirmée.
            Veuillez cliquer sur <a href="${confirmationLink}">ce lien</a> pour confirmer votre achat.
        `;
    
        try {
            const response = await axios.post('http://localhost:3001/send-confirmation-email', {
                userEmail: email,
                confirmationMessage
            });
    
            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail de confirmation :', error);
        }
    }
    

    return (
        <Helmet title='Checkout'>
            <CommonSection title='Checkout' />
            <section>
                <Container>
                    <Row>
                        <Col lg='8'>
                            <div className="mb-4 fw-bold">Billing Information</div>
                            <Form className="Billing__info" onSubmit={handleSubmit}>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="email" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="number" placeholder="enter your phone-Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="enter your street adress" value={address} onChange={(e) => setAddress(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="Code Postal" value={codePostal} onChange={(e) => setCodePostal(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="enter your Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                                </FormGroup>
                                <motion.button type="submit" whileTap={{ scale: 1.2 }} className="check__btn auth__btn w-100">Place an Order</motion.button>
                            </Form>
                            {showOrderConfirmation && (
                                <div className="order-confirmation">
                                    <p>Thank you for your order! Confirmation email has been sent.</p>
                                    {!confirmed && <button onClick={handleConfirmation}>Confirm</button>}
                                </div>
                            )}
                        </Col>
                        <Col lg='4'>
                            <div className="checkout__cart">
                                <h6>Total Qty: <span>{totalQty} items</span></h6>
                                <h6>SubTotal: <span>{totalAmount} DNT</span></h6>
                                <h6>
                                    <span>Shipping: <br />Free shipping</span>
                                    <span>0DNT</span>
                                </h6>
                                <h4 > Total Cost :<span>{totalAmount}</span></h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
}

export default Checkout;