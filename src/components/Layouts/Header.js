import React , {useState , useEffect} from 'react';
import "../../styles/HeaderStyle.css";
import {Container , Nav , Navbar  } from 'react-bootstrap'
import { Link } from 'react-router-dom';  
import logo from '../../assets/logo/logo.png';


function Header() {


  const [nav, setNav] = useState(false);

  const changeValueOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    setNav(scrollValue > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);

    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);


  return (
<header>
<Navbar collapseOnSelect expand="lg" 
className={nav ? "sticky" : ""} >
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/" className='logo'>
            <img src={logo} alt="Logo" className='img-fluid' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/">
            <div className="cart">
            <i class="bi bi-bag fs-5"></i>
            <em className="roundpoint">2</em>
            </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default Header;
