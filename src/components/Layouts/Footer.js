
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  

  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>5505 Waterford District</p>
                <p>Dr, Miami, FL 33126</p>
                <p>United States</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Working Hours</h5>
                <p>Mon-Fri: 9:00AM - 10:00PM</p>
                <p>Saturday: 10:00AM - 8:30PM</p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Order Now</h5>
                <p>Quaerat neque purus ipsum</p>
                <p>
                  <Link to="tel:999888777" className="calling text-decoration-none">
                    999-888-7777
                  </Link>
                </p>
                <p>Sunday: 12:00PM - 5:00PM</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>Quaerat neque purus ipsum</p>
                <ul>
                  <li>
                    <Link className="text-decoration-none" style={{ color: 'inherit' }} to="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" style={{ color: 'inherit' }} to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" style={{ color: 'inherit' }} to="/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link className="text-decoration-none" style={{ color: 'inherit' }} to="/">
                      <i className="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <Row className="copy_right">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0">
                  <li>
                    <Link style={{ color: 'inherit' }} className="text-decoration-none" to="/">
                      © 2024 <span>Mahenoor Salat</span> | All Right Reserved
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: 'inherit' }} className="text-decoration-none" to="/">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: 'inherit' }} className="text-decoration-none" to="/">
                      Terms Of Use
                    </Link>
                  </li>
                  <li>
                    <Link style={{ color: 'inherit' }} className="text-decoration-none" to="/">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>


    </>
  );
}

export default Footer;
