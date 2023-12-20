import React from "react";
import "../Styles/cart.css";
import CommonSection from "../components/Uinterface/commonSection";
import Helmet from "../components/Helmet/Helmet.jsx";
import { Container, Row, Col } from "reactstrap";
import { useSelector ,useDispatch } from "react-redux";
import {cartActions} from "../redux/slices/cartSlice" ;
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount=useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <CommonSection title="Panier" />

      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fs-4 text-center">Aucun article ajouté au panier</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Titre</th>
                      <th>Prix</th>
                      <th>Qte</th>
                      <th >DSupprimer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item,index) => (
                      <Tr item={item} key={index}/>
                    ))}
                  </tbody>
                </table>
              )}
            </Col>


            <Col lg="3">
              <div>
                <h6 className="d-flex align-items-center justify-content-between">
                total
                  <span className="fs-4 fw-bold">{totalAmount}DNT</span>
                </h6>
                
              </div>
              <p className="fs-6 mt-2"> 
              Les taxes et les frais d'expédition seront calculés lors du paiement</p>
              <div>
                <button className="by__btn w-70"><Link to='/Shop'>Continuer vos achats</Link></button>
                <button className="by__btn w-70 mt-3"><Link to='/Checkout'>Vérifier</Link></button>
              </div>
            </Col>



          </Row>

        </Container>
      </section>
    </Helmet>
  );
};

const Tr=({item})=>{

  const dispatch=useDispatch()
  const deleteProduct=()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr >
                        <td>
                        <img src={item.imgUrl} alt="prod" style={{ width: '50px', height: 'auto' }} />
                        </td>
                        <td>{item.productName}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>
                          <span>
                          <motion.i whileTap={{scale:1.2}} className="ri-delete-bin-line" onClick={deleteProduct}></motion.i>
                          </span>
                        </td>
                      </tr>
  )
}

export default Cart;
