import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import '../Styles/login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { Auth } from "../firebase.config.jsx";
import {toast} from 'react-toastify' ;
import {useNavigate} from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate=useNavigate()

    const SignIn = async (e) => {

        e.preventDefault()
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(Auth, email, password);
            const user = userCredential.user;
            console.log(user);
            setLoading(false);
            toast.success("Successfully logged in");
            navigate('/Checkout');
        } catch (error) {
            setLoading(false);
            toast.error(error.message);
        }
    }


    return (
        
            <Helmet title='Login'>
                <section>
                    
                <Container>
                    <Row>
                      {
                         loading ? (<Col lg='12' className="text-center"><h5 className="fw-bold">Loading.....</h5></Col>):
                       (<Col lg='6' className="m-auto text-center">
                       <h3 className="fw-bold mb-4">Login</h3>

                       <Form className="auth__form" onSubmit={SignIn}>
                           <FormGroup className="form__group">
                               <input type="email" placeholder="enter your email" value={email} onChange={e => setEmail(e.target.value)} />
                           </FormGroup>
                           <FormGroup className="form__group">
                               <input type="password" placeholder="enter your password" value={password} onChange={e => setPassword(e.target.value)} />
                           </FormGroup>
                           <button type="submit" className="check__btn auth__btn">Login</button>
                           <p>Don't have an account? <Link to='/Signup'>Create an account</Link> </p>
                       </Form>
                   </Col>)
                      }
                    </Row>
                </Container>
                </section>
            </Helmet>
        
    );
    
}

export default Login;
