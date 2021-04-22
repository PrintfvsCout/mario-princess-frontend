import React from "react"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const UpperNavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Navbar.Brand>Mario game</Navbar.Brand>
        <Nav className="mr-auto">
          <Container>
            <Row>
              <Col>
                <Link to="/">Home</Link>
              </Col>
              <Col>
                <Link to="/results">Results</Link>
              </Col>
              <Col>
                <Link to="/game">Play</Link>
              </Col>
            </Row>
          </Container>
        </Nav>
      </Navbar>
    </>
  )
}

export default UpperNavBar
