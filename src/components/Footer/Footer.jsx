import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';



class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Container>
                    <Row>
                        <Col lg='4'>
                        <div className="Logo">
                            <img src='src/assets/images/logo1.png' alt="logo" 
                            style ={{ width: '200px', height: 'auto', maxWidth: '170px', maxHeight: '170px' }}/>
                           
                            </div>
                            <p className="footer__text">
                           <h6>Entrepôt à bois</h6>
                          L'artisanat du bois fusionne talent artistique et savoir-faire technique pour façonner des pièces uniques, célébrant la richesse et la diversité de ce matériau naturel."
                            </p>
                        </Col>
                        <Col lg='3'>
                            <div className="footer__quick-links">
                                <h4 className="footer__quick-title">
                                    Top Categories
                                </h4>
                                <ListGroup className="mb-3">
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <Link to='#'>catalogue</Link>
                                    </ListGroupItem>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <Link to='#'>cuisine</Link>
                                    </ListGroupItem>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <Link to='#'>décoration</Link>
                                    </ListGroupItem>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <Link to='#'>jeux</Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                        
                        <Col lg='2'>
                            <div className="footer__quick-links">
                                <h4 className="footer__quick-title">
                                    Usefull links
                                </h4>
                                <ListGroup className="mb-3">
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <Link to='/shop'>Shop</Link>
                                    </ListGroupItem>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <Link to='/cart'>Cart</Link>
                                    </ListGroupItem>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <Link to='/login'>Login</Link>
                                    </ListGroupItem>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                        <Link to='#'>Privacy Policy</Link>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                        <Col lg='3'>
  <div className="footer__quick-links">
    <h4 className="footer__quick-title">Contacts</h4>
    <ListGroup className="mb-3">
    
      <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
        <span><i className="ri-map-pin-line" style={{ color: "#fff" }}></i></span>
        <p>Route Sidi Mansour Km 08, Sfax, Tunisia, 3061</p>
      </ListGroupItem>
    </ListGroup>
    <ListGroup>
     
      <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
        <span><i className="ri-phone-line" style={{ color: "#fff" }}></i></span>
        <p>+216 93 606 137</p>
      </ListGroupItem>
    </ListGroup>
    <ListGroup>
   
      <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
        <span><i className="ri-mail-line" style={{ color: "#fff" }}></i></span>
        <p>SJBD@gmai.col</p>
      </ListGroupItem>
    </ListGroup>

  
    <div className="social-media-links">
      <a href="https://www.facebook.com/thekingolivewood" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} style={{ color: "#fff", fontSize: "24px", marginRight: "10px" }} />
      </a>
      <a href="https://www.instagram.com/sjbo.tn/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} style={{ color: "#fff", fontSize: "24px" }} />
      </a>
    </div>
  </div>
</Col>
                       
                        <Col lg='12'>
                            <p className="footer__copyright">copyright 2023</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;
