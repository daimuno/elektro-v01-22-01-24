import React, {useEffect, useState} from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import {Nav, Navbar, NavDropdown, Button, Form, Container, FormControl} from 'react-bootstrap'
import {CSSTransition} from "react-transition-group"
import"./header.css"

export default function Header(){
  const [show1, setShow1] = useState(false);
  const showDropdown1 = (e)=>{
      setShow1(!show1);
  }
  const hideDropdown1 = e => {
      setShow1(false);
  }

  const [show2, setShow2] = useState(false);
  const showDropdown2 = (e)=>{
      setShow2(!show2);
  }
  const hideDropdown2 = e => {
      setShow2(false);
  }
  
  const [show3, setShow3] = useState(false);
  const showDropdown3 = (e)=>{
      setShow3(!show3);
  }
  const hideDropdown3 = e => {
      setShow3(false);
  }

  const [show4, setShow4] = useState(false);
  const showDropdown4 = (e)=>{
      setShow4(!show4);
  }
  const hideDropdown4 = e => {
      setShow4(false);
  }

  const [show5, setShow5] = useState(false);
  const showDropdown5 = (e)=>{
      setShow5(!show5);
  }
  const hideDropdown5 = e => {
      setShow5(false);
  }

  const [show6, setShow6] = useState(false);
  const showDropdown6 = (e)=>{
      setShow6(!show6);
  }
  const hideDropdown6 = e => {
      setShow6(false);
  }

  return(
    <header classname="Header">
      <div className="Headerbox">
      <div className="grid2col">
          <div>
            <Link to="/" className="navLinkText">
              <StaticImage
                alt="UKWMS"
                src="../images/header v3.png"
              />
            </Link>
          </div>
          <div>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="light">Search</Button>
            </Form>
          </div>
      </div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Fasilitas" 
                id="fasilitas-dropdown" 
                show={show1}
                onMouseEnter={showDropdown1} 
                onMouseLeave={hideDropdown1}
                >
                <NavDropdown.Item href="/fasilitas/lab">Laboratorium</NavDropdown.Item>
                <NavDropdown.Item href="/fasilitas/lingkungan">Lingkungan Kami</NavDropdown.Item>
                <NavDropdown.Item href="/fasilitas/olah-raga">Lapangan Olah Raga</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/fasilitas">
                  More info
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Akademik" 
                id="akademik-dropdown" 
                show={show2}
                onMouseEnter={showDropdown2} 
                onMouseLeave={hideDropdown2}
                >
                <NavDropdown.Item href="/akademik/alur">Alur Kuliah</NavDropdown.Item>
                <NavDropdown.Item href="/akademik/kalender">Kalender Akademik</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/akademik">
                  More info
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="admisi" 
                id="admisi-dropdown" 
                show={show3}
                onMouseEnter={showDropdown3} 
                onMouseLeave={hideDropdown3}
                >
                <NavDropdown.Item href="/admisi/pendaftaran">Registration</NavDropdown.Item>
                <NavDropdown.Item href="/admisi/beasiswa">Scholarship</NavDropdown.Item>
                <NavDropdown.Item href="/contact-us">Contact Us</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/admisi">
                  More info
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Dosen dan Staff" 
                id="staff-dropdown" 
                show={show4}
                onMouseEnter={showDropdown4} 
                onMouseLeave={hideDropdown4}
                >
                <NavDropdown.Item href="/dosen-dan-staff/dosen">Dosen</NavDropdown.Item>
                <NavDropdown.Item href="/dosen-dan-staff/staf">Staff</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/dosen-dan-staff">
                  More info
                </NavDropdown.Item>
              </NavDropdown>

            <NavDropdown title="Information" 
                id="info-dropdown" 
                show={show5}
                onMouseEnter={showDropdown5} 
                onMouseLeave={hideDropdown5}
                >
                <NavDropdown.Item href="/informasi/news">News</NavDropdown.Item>
                <NavDropdown.Item href="/informasi/event">Event</NavDropdown.Item>
                <NavDropdown.Item href="/informasi/schedule">Schedule</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/informasi">
                  More info
                </NavDropdown.Item>
              </NavDropdown>

            <NavDropdown title="Publication" 
                id="publication-dropdown" 
                show={show6}
                onMouseEnter={showDropdown6} 
                onMouseLeave={hideDropdown6}
                >
                <NavDropdown.Item href="/publication/sci">International Journal (SCI)</NavDropdown.Item>
                <NavDropdown.Item href="/publication/book">Book</NavDropdown.Item>
                <NavDropdown.Item href="/publication/patent">Patent</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/publication">
                  More info
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>

              <NavDropdown title="Login" id="LoginDropdown">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                  <Button variant="primary" type="login">
                    Submit
                  </Button>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/member/signup">
                    New around here? Sign up
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/member/password-reset">
                    Forgot password?
                  </NavDropdown.Item>
                </Form>
              </NavDropdown>
            </Nav>
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
         
      </div>
    </header>
  )
}