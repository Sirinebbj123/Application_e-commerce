import React, { useRef, useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import UseAuth from "../../Custom-hooks/useAuth";
import iconIMG from "../../assets/images/téléchargement-removebg-preview.png";
import "./header.css";
import { signOut } from "firebase/auth";
import { Auth } from "../../firebase.config";
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';


const nav__links=[
  { path:"Home",
    display:"Accueil"

  },
  { path:"Shop",
    display:"Magasin"

  },
  { path:"Blog",
    display:"Blog"

  },
  { path:"Cart",
    display:"Panier"

  },
  { path:"/Contact",
  display:"Contact"

},
]

const Header = () => {
  const { t, i18n } = useTranslation();

  const onChangeLanguage = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage)
      .then(() => console.log('Language changed successfully'))
      .catch((err) => console.error('Error in changing language:', err));
  };


  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileActionRef = useRef(null);

  const navigate = useNavigate();
  const { currentuser } = UseAuth(); 
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const stickyHeaderFunc = () => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  };

  const logout=()=>{
    signOut(Auth).then(()=>{

    toast.success("Logged out")
    navigate('/home');
    }).catch(err=>{
      toast.error(err.message)
    })
  }

  useEffect(() => {
    const cleanup = stickyHeaderFunc();
    return cleanup;
  }, []);

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  const navigateToCart = () => {
    navigate("/Cart");
  };

  const toggleProfileActions = () => profileActionRef.current.classList.toggle("show__profileActions");

  useEffect(()=>{
    for (let index = 0; index< document.getElementsByClassName('lang').length; index++){
      const element = document.getElementsByClassName('lang')[index];
      
    }
    },[])
  

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="Logo">
              <img src="src\assets\images\logo1.png" alt="logo" style ={{ width: '400px', height: 'auto', maxWidth: '60px', maxHeight: '90px',position:'relative', top:'-10px' }}/>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__links.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink to={item.path} className="nav__active">
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>

              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentuser ? currentuser.photoURL : iconIMG}
                  alt="User"
                  onClick={toggleProfileActions}
                />
                <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions} style={{width:"200px"}} >
                  { currentuser ? (
                    <span onClick={logout}>Se déconnecter</span>
                  ) : (
                    <div className="d-flex align-items-center justify-content-center flex-column"  >
                      <Link to="/Signup" style={{textDecoration:"none",color:"#4e3105",fontWeight:"bold"}}>S'inscrire</Link>
                      <Link to="/Login" style={{textDecoration:"none",color:"#4e3105",fontWeight:"bold"}}>Se Connecter</Link>
                      <Link to="/dashboard" style={{textDecoration:"none",color:"#4e3105",fontWeight:"bold"}}>Tableau de bord</Link>
              
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex">
              <select className="form-select" aria-label="Default select" onChange={(e) => onChangeLanguage(e.target.value)}>                         
                   <option value="fr"className="lang">FR</option>
                              <option value="en" className="lang">EN</option>
                            </select>
                          </div>
              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
