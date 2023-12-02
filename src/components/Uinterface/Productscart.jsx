import React from "react";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./prodcart.css";
import { useDispatch } from "react-redux/es/exports";
import { cartActions } from "../../redux/slices/cartSlice";
import {toast} from 'react-toastify';

const Productscart = ({ item }) => {

 const dispatch=useDispatch()

 const addToCart=()=>{
  dispatch(cartActions.addItem({
    id:item.id,
    productName:item.productName,
    price:item.price,
    imgUrl:item.imgUrl,
  })
  );
  toast.success("product added successfully");

 };

  return (
    <Col lg="3" md="4">
      <div className="product__item mb-2">
        <motion.div whileHover={{ scale: 0.9 }} className="product__img d-flex">
          <img src={item.imgUrl} alt="imgprod" />
        </motion.div>
        <div className="p-2 product__info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div className="product__card-bottom d-flex align-items-center justify-content-between">
          <span className="price">{item.price}DNT</span>
          <motion.span whileHover={{ scale: 0.9 }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default Productscart;
