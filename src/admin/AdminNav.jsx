import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap'; // Import Container and Row from reactstrap
import "../Styles/admin-nav.css";
import UseAuth from '../Custom-hooks/useAuth';

const AdminNav = () => {
  const { currentuser } = UseAuth();

  const admin__nav = [
    {
      display: 'Dashboard',
      path: '/dashboard'
    },
    {
      display: 'All-Products',
      path: '/dashboard/all-products'
    },
    {
      display: 'Orders',
      path: '/dashboard/orders'
    },
    {
      display: 'Users',
      path: '/dashboard/users'
    }
  ];

  return (
    <>
      <header className='admin__header'>
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2>Artisanat</h2>
              </div>
              <div className="search__box">
                <input type="text" placeholder="search....." />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
              <div className="admin__nav-top-right">
                <span>
                  <i className="ri-notification-2-line"></i>
                </span>
                <span>
                  <i className="ri-settings-5-line"></i>
                </span>
                <img src={currentuser && currentuser.photoURL} alt="" />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <section className="admin__menu p-0 ">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass=>navClass.isActive ? "active__admin-menu":""}
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AdminNav;
