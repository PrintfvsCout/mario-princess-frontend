import React from "react"
import { Navbar, Container } from "react-bootstrap"

const BottomNavBar = () => {
  return (
    <>
      <Container>
        <Navbar
          className="justify-content-center"
          collapseOnSelect
          expand="lg"
          bg="dark"
          fixed="bottom"
        >
          <Navbar.Brand>
            <div> &#169;Mario game</div>
          </Navbar.Brand>
        </Navbar>
      </Container>
    </>
  )
}

export default BottomNavBar
