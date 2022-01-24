import React, {useEffect, useState} from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import {Nav, Navbar, NavDropdown, Button, Form, Container, FormControl} from 'react-bootstrap'
import {CSSTransition} from "react-transition-group"
import"./header.css"

export default function Header(){
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  }

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches){
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return() => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);
  return(
    <header classname="Header">
      <div className="Headerbox">
      <Link to="/" className="navLinkText">
        <StaticImage
          alt="UKWMS"
          src="../images/header v3.png"
        />
      </Link>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
          <nav className="Nav">
              <Link to="/" className="navLinkText">Home</Link>
              <Link to="/fasilitas" className="navLinkText">Fasilitas</Link>
              <Link to="/akademik" className="navLinkText">Akademik</Link>
              <Link to="/admisi" className="navLinkText">Admisi</Link>
              <Link to="/dosen-dan-staff" className="navLinkText">Dosen dan Staff</Link>
              <Link to="/informasi" className="navLinkText">Informasi</Link>
              <Link to="/publikasi" className="navLinkText">Publikasi</Link>
              <Link to="/contact-us" className="navLinkText">Contact Us</Link>
              <Link to="/member" className="navLinkText">Member</Link>
          </nav>
        </CSSTransition>

        <button onClick={toggleNav} className="Burger">
          <StaticImage
            alt="UKWMS"
            src="../images/icon/menu.png"
            height="30"
          />
        </button>
      </div>
    </header>
  )
}