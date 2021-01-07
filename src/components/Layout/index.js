import React from 'react';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
       <Header />
       {
         props.sidebar ?
         <Container fluid>
          <Row>
            <Col md={2} className="sidebar">
              <ul>
                <li><NavLink exact to={`/`}>HOME</NavLink></li>
                <li><NavLink to={`/page`}>INSTRUCTION</NavLink></li>
                <li><NavLink to={`/booking`}>BOOKING DETIALS</NavLink></li>
                <li><NavLink to={`/confirmed`}>CONFIRMED DETIALS</NavLink></li>
                <li><NavLink to={`/products`}>CANDIDATE ABSENT</NavLink></li>
                <li><NavLink to={`/orders`}>OFFICIAL ANOUNCEMENT</NavLink></li>
              </ul>
            </Col>
            <Col md={10} style={{ marginLeft: 'auto', paddingTop: '60px' }}>
              {props.children}
            </Col>
          </Row>
        </Container>
        :
        props.children
       }
        
        
    </>
   )

 }

export default Layout;