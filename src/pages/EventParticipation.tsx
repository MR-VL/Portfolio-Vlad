import React from 'react';
import logo from "../assets/Codebreaker.jpg";
import task1 from "../assets/nsaTask1.jpeg";
import picoMain from "../assets/picoMain.jpg"
import picoTask from "../assets/pico2.png"
const EventParticipation: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Event Participation</h1>

            <div className="row align-items-start border-bottom border-secondary pb-4 mb-5">
                {/* Main content on the left */}
                <div className="col-md-8 narrow-text p-4 rounded">
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


                <div className="col-md-4 text-center mt-5">
                    <img
                        src={task1}
                        alt="NSA Codebreaker task 1 logo"
                        className="img-fluid rounded shadow"
                        style={{
                            height: "500px",
                            width: "100%",
                            objectFit: "cover"
                        }}
                    />
                </div>

            </div>


            <div className="row align-items-start border-bottom border-secondary pb-4 mb-5">
                {/* Main content on the left */}
                <div className="col-md-8 narrow-text p-4 rounded">
                    <h5 className="text-warning fw-bold mb-1">
                        March 2025
                    </h5>

                    <div className="d-flex align-items-center mb-3">
                        <img
                            src={picoMain}
                            alt="picoCTF Logo"
                            className="img-fluid rounded me-4"
                            style={{ maxHeight: '100px' }}
                        />
                        <h3 className="text-info mb-0">picoCTF 2025 – Mini-Competition</h3>
                    </div>

                    <p className="fw-semibold mb-1">
                        Participated as a senior in high school
                    </p>

                    <p>
                        Competed in <strong>picoCTF</strong>, an online Capture The Flag (CTF) competition designed by
                        cybersecurity experts at Carnegie Mellon University. The challenge provided real-world scenarios
                        that tested my knowledge in:
                    </p>

                    <ul className="mb-3">
                        <li>Cryptography</li>
                        <li>Binary Exploitation</li>
                        <li>Reverse Engineering</li>
                        <li>Web Exploitation</li>
                        <li>Forensics</li>
                    </ul>

                    <p>
                        Out of <strong>4,822</strong> total participants, I achieved a rank of <strong>#552</strong>, placing in the top 12% globally.
                        This accomplishment reflects my strong analytical thinking, curiosity, and persistence in solving complex cybersecurity challenges from a young age.
                        Participating in picoCTF during my senior year of high school sparked a deeper passion for cybersecurity and inspired me to further pursue ethical hacking and digital defense.
                    </p>


                    <p className="mt-3">Technologies and skills applied:</p>
                    <ul className="mb-3">
                        <li>Python scripting</li>
                        <li>Linux command-line tools</li>
                        <li>Cybersecurity fundamentals</li>
                    </ul>

                    <blockquote className="blockquote text-secondary mt-4">
                        picoCTF strengthened my passion for cybersecurity and gave me a competitive introduction to the
                        world of ethical hacking and information security.
                    </blockquote>
                </div>

                <div className="col-md-4 text-center mt-5">
                    <img
                        src={picoTask}
                        alt="PicoCTF coding task image"
                        className="img-fluid rounded shadow"
                        style={{
                            height: "500px",
                            width: "100%",
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default EventParticipation;
