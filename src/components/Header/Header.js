
import "./Header.css";


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function Header() {
  return (



  <div className="navbar-container">
   <Navbar variant="dark" className="navbar">
      <Container fluid>
          <Navbar.Brand href="/React-Calculator">
            <img
              src= "https://img.icons8.com/external-flat-circular-vectorslab/512/external-Calculator-shopping-and-commerce-flat-circular-vectorslab.png"
              className="d-inline-block align-top calculator-icon"
              alt ="Calculator_Icon"
            />{'  '}
            <h1 id="nav-heading">Calculator</h1>
          </Navbar.Brand>
      </Container>
      </Navbar>
    </div>
    

  );
}

export default Header;
