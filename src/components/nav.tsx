import { Navbar, NavDropdown, Nav as BootstrapNav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    const base = '/Portfolio-Vlad';
    const element = (<FontAwesomeIcon icon={faHeartPulse} className="pulse-icon" />);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to={`${base}/Home`}>
                <Navbar.Brand className="margin me-4">{element} Vlad's Portfolio</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                {/* Spread items evenly using Bootstrap flex + full width */}
                <BootstrapNav className="w-100 justify-content-evenly align-items-center">

                    <LinkContainer to={`${base}/Home`}>
                        <BootstrapNav.Link className="margin">Home</BootstrapNav.Link>
                    </LinkContainer>

                    <NavDropdown className="margin" title="Security Info" id="security-dropdown">
                        <LinkContainer to={`${base}/Security`}>
                            <NavDropdown.Item className="margin">Security Overview</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Registration`}>
                            <NavDropdown.Item className="margin">Registration</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Authentication`}>
                            <NavDropdown.Item className="margin">Authentication</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Login`}>
                            <NavDropdown.Item className="margin">Login</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Logout`}>
                            <NavDropdown.Item className="margin">Logout</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                    <NavDropdown className="margin" title="Puzzle Info" id="puzzle-dropdown">
                        <LinkContainer to={`${base}/Puzzle`}>
                            <NavDropdown.Item className="margin">Puzzle Overview</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Create-Puzzle`}>
                            <NavDropdown.Item className="margin">Create a Puzzle</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Edit-Puzzle`}>
                            <NavDropdown.Item className="margin">Edit Puzzle</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Share-Puzzle`}>
                            <NavDropdown.Item className="margin">Share Puzzle</NavDropdown.Item>
                        </LinkContainer>
                        <LinkContainer to={`${base}/Archive-Puzzle`}>
                            <NavDropdown.Item className="margin">Archive Puzzle</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>

                    <LinkContainer to={`${base}/My-Puzzlez`}>
                        <BootstrapNav.Link className="margin">My Puzzlez</BootstrapNav.Link>
                    </LinkContainer>

                    <LinkContainer to={`${base}/My-Completed-Puzzlez`}>
                        <BootstrapNav.Link className="margin">My Completed Puzzlez</BootstrapNav.Link>
                    </LinkContainer>

                    <LinkContainer to={`${base}/Approve-Puzzlez`}>
                        <BootstrapNav.Link className="margin">Approve Completion</BootstrapNav.Link>
                    </LinkContainer>



                </BootstrapNav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;
