import React from "react";
import { Container, Row, Col } from "reactstrap";
import Products from "../assets/Data/Products";
import { useParams } from "react-router-dom";
import CommonSection from "../components/Uinterface/commonSection";
import Helmet from "../components/Helmet/Helmet.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  console.log("ID:", id);

  const product = Products.find(item => item.id === id);
  console.log("Product:", product);

  const { imgUrl, productName, price, avgRating,reviews, description, shortDesc } = product;

  return (
    <Helmet title={productName}>
      <CommonSection />
      <section>
        <Container className="pt-0">
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt="Product" />
            </Col>
            <Col lg='6'>
              <div className="productdetails">
                <h2>{productName}</h2>
                <div className="product__rating">
                  <div>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-fill"></i></span>
                    <span><i className="ri-star-half-line"></i></span>
                  </div>
                  <p>({avgRating}) ratings</p>
                </div>
                <span>{price}</span>
                <p>{shortDesc}</p>
                <button className="by__btn">Add to the cart</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
