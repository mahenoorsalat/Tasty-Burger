import React from 'react'
import { Container, Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Section7() {
  return (
 <>
 <section className="contact_section">
    <Container>
        <Row className='justify-content-between'>
            <Col sm={8} className='align-items-center text-center'>
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, magni ex? Corporis neque libero illum qui quidem cor
            </p>
            <Link to="/" className='btn_red px-4 py-2 rounded-0 text-decoration-none'>Call: 999-888-777</Link>
            </Col>
        </Row>
    </Container>
 </section>
 </>
  )
}

export default Section7