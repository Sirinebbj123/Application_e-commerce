import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import '../services/service.css';
import ServiceData from "../assets/Data/serviceData";
class Service extends React.Component {
    render() {
        return (
            <>
                <section className="services">
                    <Container>
                        <Row>
                            {ServiceData.map((item, index) => (
                                <Col lg="3" md="4" key={index}>
                                    {/* Use 'key' instead of 'keys' */}
                                    <motion.div whileHover={{scale:1.1}} className="service__item" style={{background: `${item.bg}` }}>
                                        <span><i className={item.icon}></i></span>
                                        {/* Use 'className' instead of 'class' */}
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.subtitle}</p>
                                        </div>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </Container>
                </section>
            </>
        );
    }
}

export default Service;
