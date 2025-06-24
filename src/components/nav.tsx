import { Navbar, NavDropdown, Nav as BootstrapNav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './nav.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons'
function Nav() {
    const base = '/PortfolioVlad';
    const element = <FontAwesomeIcon icon={faHeartPulse} style={{ color: '#FF5F1F' }} />;
    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to={`${base}/Home`}>
                <Navbar.Brand className={"margin"}>{element} Vlad's Portfolio</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <BootstrapNav className="mr-auto">

                    <LinkContainer className={"margin"} to={`${base}/Home`}>
                        <BootstrapNav.Link>Home</BootstrapNav.Link>
                    </LinkContainer>






                    <NavDropdown className={"margin"} title="Security Info" id="basic-nav-dropdown">
                        <LinkContainer to={`${base}/Security`}>
                            <NavDropdown.Item>Security Overview</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Registration`}>
                            <NavDropdown.Item>Registration</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Authentication`}>
                            <NavDropdown.Item>Authentication</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Login`}>
                            <NavDropdown.Item>Login</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Logout`}>
                            <NavDropdown.Item>Logout</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>





                    <NavDropdown className={"margin"} title="Puzzle Info" id="basic-nav-dropdown">
                        <LinkContainer to={`${base}/Puzzle`}>
                            <NavDropdown.Item>Puzzle Overview</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Create-Puzzle`}>
                            <NavDropdown.Item>Create a Puzzle</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Edit-Puzzle`}>
                            <NavDropdown.Item>Edit Puzzle</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Share-Puzzle`}>
                            <NavDropdown.Item>Share Puzzle</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Archive-Puzzle`}>
                            <NavDropdown.Item>Archive Puzzle</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>





                    <LinkContainer className={"margin"} to={`${base}/My-Puzzlez`}>
                        <BootstrapNav.Link>My Puzzlez</BootstrapNav.Link>
                    </LinkContainer>




                    <LinkContainer className={"margin"} to={`${base}/My-Completed-Puzzlez`}>
                        <BootstrapNav.Link>My Completed Puzzlez</BootstrapNav.Link>
                    </LinkContainer>





                    <LinkContainer className={"margin"} to={`${base}/Approve-Puzzlez`}>
                        <BootstrapNav.Link>Approve Completion</BootstrapNav.Link>
                    </LinkContainer>




                </BootstrapNav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Nav;
