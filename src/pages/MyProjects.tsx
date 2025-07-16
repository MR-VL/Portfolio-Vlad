import React from 'react';
import consolidev from "../assets/consoliDev logo no text.png";
import manCoding from "../assets/man-1839500_1280.jpg";
import puzzlePic from "../assets/puzzlePic.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPuzzlePiece} from "@fortawesome/free-solid-svg-icons/faPuzzlePiece";
import {Link} from "react-router-dom";
const MyProjects: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">My Projects</h1>

            {/* current projects */}
            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <div className="col-md-9 narrow-text p-4 rounded">
                    <h5 className="text-warning fw-bold mb-3">Present - Future</h5>

                    <p className="mb-1">
                        <strong>
                            <Link to="/Portfolio-Vlad/CurrentProjects" className="text-info text-decoration-underline">
                                Click to see projects that I am currently working on!
                            </Link>
                        </strong>
                    </p>

                    <p className="mb-1">
                        <strong>Also check out my  <a href="https://github.com/MR-VL/Puzzlez" target="_blank" rel="noopener noreferrer" className="text-info">GitHub</a> for more up to date information.</strong>
                    </p>
                </div>
            </div>

            {/* Consolidev */}
            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <div className="col-md-9 narrow-text p-4 rounded">
                    <h5 className="text-warning fw-bold mb-1">August 2024 – December 2024</h5>
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src={consolidev}
                            alt="Consolidev Logo"
                            className="img-fluid rounded me-4"
                            style={{ maxHeight: '100px'}}
                        />
                        <h3 className="text-info mb-0">
                           Consolidev
                        </h3>
                    </div>
                    <h4 className="text-info">The all in one developer toolkit platform</h4>

                    <p className="mb-1"><strong>Stack:</strong> PHP, SQL, phpMyAdmin, HTML, CSS, Git, Github, Wamp server,</p>
                    <p className="mb-1"><strong>Description:</strong></p>
                    <ul className="mb-1">
                        <li className="mb-1">Centralized platform offering 10+ developer tools such as Base64 Encoder/Decoder, JWT Decoder, Case Converter, Difference Checker, API Request Builder, and more.</li>
                        <li className="mb-1">Features include user authentication, personalized favorites navbar, detailed tool usage history, and per-user analytics.</li>
                        {/*<li className="mb-1">Admin portal enables oversight of user accounts and access to comprehensive usage statistics.</li>*/}
                        <li className="mb-1">Built with modularity, security, and expandability in mind to support future tools and contributors.</li>
                        <li className="mb-1">Responsive UI built with HTML and CSS, deployed locally using WAMP stack and version-controlled via Git and GitHub.</li>
                        <li className="mb-1">Documentation includes installation guide, troubleshooting reference, and contribution guidelines to encourage open-source collaboration.</li>
                    </ul>
                    <p className="mb-1">
                        <strong>Links: </strong>
                        <a href="https://github.com/MR-VL/Consolidev" target="_blank" rel="noopener noreferrer" className="text-info">GitHub</a>{' | '}
                        <a href="https://www.youtube.com/watch?v=S9aMG4It3TA" target="_blank" rel="noopener noreferrer" className="text-info">Demo Video</a>
                    </p>
                    <p className="text-light mb-1"><strong>Team Acknowledgments:</strong></p>
                    <ul className="mb-1">
                        <li className="mb-1">Thanks to <a href="https://github.com/Huston-Lillian" target="_blank" rel="noopener noreferrer" className="text-info">Lillian</a>, <a href="https://github.com/kpfud" target="_blank" rel="noopener noreferrer" className="text-info">Katelyn</a>, and <a href="https://github.com/sadhacde" target="_blank" rel="noopener noreferrer" className="text-info">Sadhana</a> for their contributions to the tool modules and customization features.</li>
                    </ul>
                </div>
                <div className="col-md-4 text-end">
                    <img
                        src={manCoding}
                        alt="Consolidev Project"
                        className="rounded me-5"
                        style={{ width: '500px', height: 'auto' }}
                    />
                </div>
            </div>


            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <div className="col-md-9 narrow-text p-4 rounded">
                    <h5 className="text-warning fw-bold mb-3">May 2024 – August 2024</h5>

                    <div className="d-flex align-items-center gap-4 mb-3">
                        <h1 className="mb-0">
                            <FontAwesomeIcon color="#cc8400" icon={faPuzzlePiece} />
                        </h1>
                        <h3 className="text-info mb-0">Puzzlez</h3>
                    </div>



                    <h4 className="text-info">A decentralized puzzle library service</h4>
                    <p className="mb-1"><strong>Stack:</strong> Java, Spring Boot, PostgreSQL, Angular, Docker, Typescript</p>
                    <p className="mb-1"><strong>Description:</strong></p>
                    <ul className="mb-1">
                        <li className="mb-1">Developed a community-driven platform for puzzle lovers to share jigsaw puzzles, keep track of their collections, and connect through feedback.</li>
                        <li className="mb-1">Set up secure user login and registration with JWT-based authentication, backed by Spring Security 6.</li>
                        <li className="mb-1">Built an intuitive file upload system allowing users to share puzzle images and details with ease.</li>
                        <li className="mb-1">Used MailDev to simulate and preview account confirmation and notification emails during development.</li>
                        <li className="mb-1">Designed a borrowing system that checks puzzle availability and keeps track of ongoing lends and returns.</li>
                        <li className="mb-1">Added return approval and archiving features to support a trusted puzzle-sharing workflow.</li>
                        <li className="mb-1">Created a smooth, responsive UI using Angular, complete with lazy-loaded routes and route guards for protected pages.</li>
                        <li className="mb-1">Connected frontend to backend using OpenAPI-generated Angular services to reduce boilerplate and sync types.</li>
                        <li className="mb-1">Followed REST best practices with validation, custom error responses, and paginated endpoints for scalability.</li>
                        <li className="mb-1">Containerized the entire app with Docker for easy setup, development, and deployment across environments.</li>
                        <li className="mb-1">Generated interactive API documentation using Swagger UI for quick testing and team collaboration.</li>
                        <li className="mb-1">Implemented environment-specific configurations using Spring Profiles to separate dev and production behavior.</li>
                        <li className="mb-1">Encouraged community engagement through a feedback system on completed puzzles, with special recognition for original uploaders.</li>
                    </ul>


                    <p className="mb-1">
                        <strong>Links: </strong>
                        <a href="https://github.com/MR-VL/Puzzlez" target="_blank" rel="noopener noreferrer" className="text-info">GitHub</a>{' | '}
                        <a href="https://mr-vl.github.io/Puzzlez-Info/" target="_blank" rel="noopener noreferrer" className="text-info">Companion site with more details</a>
                    </p>

                </div>
                <div className="col-md-4 text-end">
                    <img
                        src={puzzlePic}
                        alt="Puzzlez Project"
                        className="rounded me-5"
                        style={{ width: '500px', height: 'auto' }}
                    />
                </div>
            </div>


        </div>
    );

};

export default MyProjects;