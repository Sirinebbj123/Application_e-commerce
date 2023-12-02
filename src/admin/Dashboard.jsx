import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import useGetData from '../Custom-hooks/usegetData';
import '../Styles/dashboard.css'; 

const Dashboard = () => {
  const { data: products } = useGetData('products');
  const { data: users } = useGetData('users');
  const totalOrders = 10; 
  const totalProducts = products.length; 

  return (
    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <div className='dashboard-box'>
              <h5>Total Sales</h5>
              <span>{totalOrders * 50} DNT</span>
            </div>
          </Col>
          <Col lg='3'>
            <div className='dashboard-box'>
              <h5>Orders</h5>
              <span>{totalOrders}</span>
            </div>
          </Col>
          <Col lg='3'>
            <div className='dashboard-box'>
              <h5>Total Products</h5>
              <span>{totalProducts}</span>
            </div>
          </Col>
          <Col lg='3'>
            <div className='dashboard-box'>
              <h5>Total Users</h5>
              <span>{users.length}</span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Dashboard;
