import React, { useState } from "react";
import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import '../Styles/login.css';
import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { Auth } from "../firebase.config.jsx";
import { storage } from "../firebase.config.jsx";
import { setDoc } from "firebase/firestore";
import { ref , uploadBytesResumable ,getDownloadURL } from "firebase/storage"; 
import {toast} from 'react-toastify' ;
import { Db } from "../firebase.config.jsx";
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate=useNavigate()

    const signup = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(Auth,
                 email,
                 password);
            const user = userCredential.user;
            console.log(user);

           const storageRef=ref(storage,`images/${Date.now()+username}`)
           const uploadTask=uploadBytesResumable(storageRef,file)
           uploadTask.on((error)=>{
            toast.error(error.message)
           },()=>{
            getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
                await updateProfile(user,{
                    displayName:username,
                    photoURL:downloadURL
                });


                // data in firebase
                await setDoc(doc(Db,'users',user.uid),{
                    uid:user.uid,
                    displayName:username,
                    email,
                    photoURL:downloadURL,
                });
            });
           })

           setLoading(false)
           toast.success('Accound created')
           navigate('/Home')

        } catch (error) {
           setLoading(false)
            toast.error('something went wrong')
        }
          
       
    };

    return (
            <Helmet title='Signup'>
                <Container>
                    <Row>
                        {
                            loading ? <Col lg='12' className="text-center"> <h6 className="fw-bold">loading ....</h6> </Col>:(<Col lg='6' className="m-auto text-center">
                            <h3 className="fw-bold mb-4">Signup</h3>

                            <Form className="auth__form" onSubmit={signup}>
                                <FormGroup className="form__group">
                                    <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="email" placeholder="enter your email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="password" placeholder="enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </FormGroup>
                                <FormGroup className="form__group">
                                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                                </FormGroup>

                                <button type="submit" className="check__btn auth__btn" disabled={loading}>Create an account</button>
                                <p>Already have an account? {" "}
                                    <Link to='/Login'>Login</Link>
                                </p>
                            </Form>
                        </Col>)
                        }
                    </Row>
                </Container>
            </Helmet>
        
    );
    
}

export default Signup;
