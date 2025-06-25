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
    const isActive = (path: string) => location.pathname === `${base}${path}`;
    const isAnyActive = (paths: string[]) => paths.some((path: string) => location.pathname === `${base}${path}`);
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
                    
                    <LinkContainer to={`${base}/Education`}>
                        <BootstrapNav.Link className={`margin ${isActive('/Education') ? 'active-link' : ''}`}>
                            Education
                        </BootstrapNav.Link>
                    </LinkContainer>

                    <LinkContainer to={`${base}/Experience`}>
                        <BootstrapNav.Link className={`margin ${isActive('/Experience') ? 'active-link' : ''}`}>
                            Experience
                        </BootstrapNav.Link>
                    </LinkContainer>

                    <NavDropdown
                        className={`margin ${isAnyActive([
                            '/Contributions', '/MyProjects', '/WorkContributions', '/EventParticipation', '/Organizations'
                        ]) ? 'active-link' : ''}`}
                        title="Contributions and Projects"
                        id="contributions-dropdown"
                    >

                        <LinkContainer to={`${base}/Contributions`}>
                            <NavDropdown.Item className="margin">Contributions Overview</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={`${base}/MyProjects`}>
                            <NavDropdown.Item className="margin">My Projects</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={`${base}/WorkContributions`}>
                            <NavDropdown.Item className="margin">Work Contributions</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={`${base}/Organizations`}>
                            <NavDropdown.Item className="margin">Organizations</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={`${base}/EventParticipation`}>
                            <NavDropdown.Item className="margin">Event Participation</NavDropdown.Item>
                        </LinkContainer>
                    </NavDropdown>


                    <LinkContainer to={`${base}/Certifications`}>
                        <BootstrapNav.Link className={`margin ${isActive('/Certifications') ? 'active-link' : ''}`}>
                            Certifications
                        </BootstrapNav.Link>
                    </LinkContainer>

                    <NavDropdown
                        className={`margin ${isAnyActive([
                            '/AboutMe', '/Skills', '/CurrentProjects', '/Hobbies', '/Contact'
                        ]) ? 'active-link' : ''}`}
                        title="About Me"
                        id="aboutme-dropdown"
                    >
                        <LinkContainer to={`${base}/AboutMe`}>
                            <NavDropdown.Item className="margin">About Me Overview</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={`${base}/Skills`}>
                            <NavDropdown.Item className="margin">Skills</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={`${base}/CurrentProjects`}>
                            <NavDropdown.Item className="margin">Current Projects</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={`${base}/Hobbies`}>
                            <NavDropdown.Item className="margin">Hobbies</NavDropdown.Item>
                        </LinkContainer>

                        <LinkContainer to={`${base}/Contact`}>
                            <NavDropdown.Item className="margin">Contact</NavDropdown.Item>
                        </LinkContainer>

                    </NavDropdown>

                </BootstrapNav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Nav;
