import React from 'react';
import logo from "../assets/Codebreaker.JPG";

const EventParticipation: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Event Participation</h1>

            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <div className="col-md-9 narrow-text p-4 rounded">
                    <h5 className="text-warning fw-bold mb-1">
                        September 16th, 2024 – January 17th, 2025
                    </h5>

                    <div className="d-flex align-items-center mb-3">
                        <img
                            src={logo}
                            alt="NSA Codebreaker Challenge Logo"
                            className="img-fluid rounded me-4"
                            style={{ maxHeight: '100px' }}
                        />
                        <h3 className="text-info mb-0">NSA Codebreaker Challenge</h3>
                    </div>

                    <p className="fw-semibold mb-1">
                        Associated with Texas A&M University–Central Texas
                    </p>

                    <p>
                        Participated in the <strong>NSA Codebreaker Challenge</strong>, a prestigious, hands-on cybersecurity competition hosted annually by the National Security Agency. The challenge simulates realistic national security missions and requires advanced technical skills in:
                    </p>

                    <ul className="mb-3">
                        <li>Reverse Engineering</li>
                        <li>Cryptography</li>
                        <li>Binary Analysis</li>
                        <li>Vulnerability Assessment</li>
                    </ul>

                    <p>
                        Successfully <strong>completed Task 0 and Task 1</strong>, and made significant progress on Task 2. Demonstrated persistence and strong problem-solving abilities under realistic cybersecurity constraints.
                    </p>

                    <p className="mt-3">Skills applied included:</p>
                    <ul className="mb-3">
                        <li>Python</li>
                        <li>Computer Forensics</li>
                        <li>Static and Dynamic Code Analysis</li>
                    </ul>

                    <blockquote className="blockquote text-secondary mt-4">
                        Through this challenge, I gained hands-on exposure to how cybersecurity professionals handle
                        mission-critical scenarios, further fueling my interest in offensive security and
                        intelligence-driven defense.
                    </blockquote>
                </div>
            </div>
        </div>
    );
};

export default EventParticipation;
