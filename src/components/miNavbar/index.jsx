
import { Navbar , Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './navbar.css'

function NavbarComp (){
    

  
  
  return(
      
    <Navbar bg="red" variant="dark"  expand="lg">
        <Container>
      <Nav.Link className="superhero" as={Link} to={`/home`} >Home</Nav.Link>
      <Nav.Link className="superhero" as={Link} to={`/createForm`} >Create Form</Nav.Link>
      
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        > 
        </Nav>
      </Navbar.Collapse>
      </Container> 
    </Navbar>
             
      
        
    );
}

export default NavbarComp;






