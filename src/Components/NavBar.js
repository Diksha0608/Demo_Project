import React from 'react'
import './NavBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Nav,Container} from 'react-bootstrap';
import {NavLink, Link } from 'react-router-dom'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const NavBar = () => {
  return (
    <div>
    <Navbar className='nav color-nav' expand="lg" >
  <Container fluid>
    <Navbar.Brand to="#" className='px-5'>Defy</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <li className="nav-item">
          <NavLink className="nav-link active px-5" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-5 "  to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-5" to="/subject">Subject</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-5" to="/features">Features</NavLink>
        </li>
        

      </Nav>
        
      <div class="d-flex">
    <Link class="navbar-brand" to="#">
      <AddShoppingCartIcon color='seccess'/>
    </Link>
  </div>


    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

export default NavBar