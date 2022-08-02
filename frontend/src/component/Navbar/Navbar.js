import React from 'react'
import { Navbar as NAVBAR,Container,Nav} from 'react-bootstrap'

const Navbar = () => {
  return (
    <NAVBAR bg="primary" variant="dark">
        <Container>
          <NAVBAR.Brand>{"</> crud mern"}</NAVBAR.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav>
        </Container>
      </NAVBAR>
  )
}

export default Navbar