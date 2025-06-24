import { Navbar, NavDropdown, Nav as BootstrapNav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

function Nav() {
    const base = '/Portfolio-Vlad';
    const element = (<FontAwesomeIcon icon={faHeartPulse} className="pulse-icon" />);
    const location = useLocation();
    const isActive = (path) => location.pathname === `${base}${path}`;
    const isAnyActive = (paths) => paths.some(path => location.pathname === `${base}${path}`);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <LinkContainer to={`${base}/Home`}>
                <Navbar.Brand className="margin me-4">{element} Vlad's Portfolio</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
                <BootstrapNav className="w-100 justify-content-evenly align-items-center">

                    <LinkContainer to={`${base}/Home`}>
                        <BootstrapNav.Link className={`margin ${isActive('/Home') ? 'active-link' : ''}`}>
                            Home
                        </BootstrapNav.Link>
                    </LinkContainer>

                    <NavDropdown
                        className={`margin ${isAnyActive([
                            '/Security', '/Registration', '/Authentication', '/Login', '/Logout'
                        ]) ? 'active-link' : ''}`}
                        title="Security Info"
                        id="security-dropdown"
                    >

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

                    <NavDropdown
                        className={`margin ${isAnyActive([
                            '/Puzzle', '/Create-Puzzle', '/Edit-Puzzle', '/Share-Puzzle', '/Archive-Puzzle'
                        ]) ? 'active-link' : ''}`}
                        title="Puzzle Info"
                        id="puzzle-dropdown"
                    >

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
                        <BootstrapNav.Link className={`margin ${isActive('/My-Puzzlez') ? 'active-link' : ''}`}>
                            My Puzzlez
                        </BootstrapNav.Link>
                    </LinkContainer>

                    <LinkContainer to={`${base}/My-Completed-Puzzlez`}>
                        <BootstrapNav.Link className={`margin ${isActive('/My-Completed-Puzzlez') ? 'active-link' : ''}`}>
                            My Completed Puzzlez
                        </BootstrapNav.Link>
                    </LinkContainer>

                    <LinkContainer to={`${base}/Approve-Puzzlez`}>
                        <BootstrapNav.Link className={`margin ${isActive('/Approve-Puzzlez') ? 'active-link' : ''}`}>
                            Approve Completion
                        </BootstrapNav.Link>
                    </LinkContainer>

                </BootstrapNav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;
