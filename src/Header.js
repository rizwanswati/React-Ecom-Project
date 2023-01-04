import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
function Header() {
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();
    function logout(){
        localStorage.clear();
        navigate('/login')
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto nav-bar-wrapper">
                        {
                            localStorage.getItem('user') ?
                                <>
                                    <Link to={"/add"}>Add</Link>
                                    <Link to={"/update"}>Update</Link>
                                </>
                                :
                                <>
                                    <Link to={"/login"}>login</Link>
                                    <Link to={"/register"}>Register</Link>
                                </>
                        }

                    </Nav>
                    {localStorage.getItem('user')?
                    <Nav>
                        <NavDropdown title={user.name} >
                            <NavDropdown.Item onClick={()=>logout()}>Log Out</NavDropdown.Item>
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    :null}
                </Container>
            </Navbar>
        </div>
    )
}

export default Header