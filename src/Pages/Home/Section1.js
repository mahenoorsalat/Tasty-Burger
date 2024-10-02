import React from 'react';
import { Container, Row , Col } from 'react-bootstrap';
import Burger from '../../assets/hero/hero-2.png';
import  '../../styles/HomeStyle.css';

import { Link } from 'react-router-dom';  
function Section1() {
  return (
    <div>
      <section className="hero_section">
        <Container>
            <Row>
                <Col lg={7} className="mb-5 mb-lg-0">
                <div className="position-relative">
                    <img src={Burger} alt="Hero" className='img-fluid' />
                    <div className="price_badge">
                        <div className="badge_text">
                            <h4 className='h4_xs'>Only</h4>
                            <h4 className='h4_lg'>$6.99</h4>
                        </div>
                    </div>
                </div></Col>

                <Col lg={5}>
                <div className="hero_text text_center">
                    <h1 className='text-white'>New Burger</h1>
                    <h2 className='text-white'>With Onions</h2>
                    <p className='text-white pt-2 pb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti itaque odio, porro 
                    </p>
                    <Link to="/" className="order_now">
                    Order Now
                    </Link>
                </div>
                </Col>
            </Row>
        </Container>
      </section>
    </div>
  )
}

export default Section1
