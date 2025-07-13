import React from 'react';
import consolidev from "../assets/consoliDev logo no text.png";

const MyProjects: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">My Projects</h1>

            {/* Consolidev */}
            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <div className="col-md-9 narrow-text p-4 rounded">
                    <h5 className="text-warning fw-bold mb-1">August 2024 – Present</h5>
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
                        // src={consolidevImg}
                        alt="Consolidev Project"
                        className="rounded me-5"
                        style={{ width: '500px', height: 'auto' }}
                    />
                </div>
            </div>


        </div>
    );

};

export default MyProjects;