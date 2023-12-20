import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { motion } from "framer-motion";
import "../Styles/home.css"; 
import Service from "../services/Service";
import Productslist from "../components/Uinterface/Poductslist";
import Products from "../assets/Data/Products";
import Clock from "../components/Uinterface/clock";
import Footer from "../components/Footer/Footer";
import { useTranslation , Trans} from 'react-i18next';


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [MobileProducts, setMobileProducts] = useState([]);
  const [WirelessProducts, setWirelessProducts] = useState([]);
  const [WatchesProducts, setWatchesProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
        
        const filteredTrendingProducts = Products.filter(item => item.category === "cuisine");
        const filteredBestSalesProducts = Products.filter(item => item.category === "decor");
        const filteredMobileProducts = Products.filter(item => item.category === "jeux");
        const filteredWirelessProducts = Products.filter(item => item.category === "jeux");
        const filteredWatchesProducts = Products.filter(item => item.category === "");



        
  
        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setMobileProducts(filteredMobileProducts );
        setWirelessProducts(filteredWirelessProducts);
        setWatchesProducts(filteredWatchesProducts);


      };
    
  
    fetchData();
  }, []); 

  const{t } = useTranslation()

  return (
    <Helmet title={"Home"}>
       <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg='6' md='6'>
                            <div className="hero__content">
                            <p className="hero__subtitle">{t("produit tendance de 2023")}</p>
                            <h2>{t("L'artisanat du bois, pour des moments durables.")}</h2>
                            <p>{t("Rendez votre intérieur plus minimaliste et moderne")}</p>
                                <button className="by__btn" >
                                <Link to="/shop">{t("Visiter le magasin")}</Link>
                                </button>

                            </div>
                        </Col>
                        <Col lg='6' md='6'>
                            <div className="hero__img">
                                <img src="src\assets\images\375769121_1066151031054048_8779351080767842843_n-removebg-preview.png" alt="hero" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Service />
            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                        <h2 className="section__title" >{t("Produits tendance")}</h2>
                        </Col>
                        <Productslist data={trendingProducts} />
                    </Row>
                </Container>
            </section>

            <section className="best__sales">
                <Container>
                    <Row>
                        <Col lg='12' className="text-center">
                        <h2 className="section__title">{t("Les meilleures ventes")}</h2>
                        </Col>
                        <Productslist data={bestSalesProducts} />
                    </Row>
                </Container>
            </section>

            <section className="timer__count">
            <Container>
             <Row>
             <Col lg='6' md='6'>
             <div className="clock__top-content">
             <h4 className="text-white fs-6 mb-2">{t("Offres limitées")}</h4>
              <h3 className="text-white fs-5 mb-3">{t("Quality Armchair")}</h3>
            </div>
            <Clock />
            <motion.button whileTap={{ scale: 1.2 }} className="store__btn">
            <Link to="/shop">Visit Store</Link>
            </motion.button>
            </Col>

            <Col lg='6' md='6' className="text-center"  style={{ overflow: 'hidden', width: '240px', height: '240px', maxWidth: '300px', margin: 'auto' }}>
            <img src="src\assets\images\artiim.jpg" alt="counter" />
           </Col>
           </Row>
          </Container>
          </section>

            <section className="new__arrivals">
                <Container>
                    <Row>
                    <Col lg='12' className="text-center">
                            <h2 className="section__title">Nouvelles Arrivées</h2>
                        </Col>
                        <Productslist data={MobileProducts}/>
                        <Productslist data={WirelessProducts}/>

                        
                    </Row>
                </Container>
            </section>

            <section className="popular__category">
       
            </section>

    </Helmet>
  )
};

export default Home;
