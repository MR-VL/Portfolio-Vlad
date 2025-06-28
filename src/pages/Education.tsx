import React from 'react';
import ctcLogo from '../assets/ctc_logo.png';
import ctcSchool from '../assets/ctc_school.jpeg';
import tamuctLogo from '../assets/tamuct_logo.jpeg';
import tamuctSchool from '../assets/tamuct_school.jpg';
import '../styles/mainStyles.css';

const Education: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Education</h1>

            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <h3 className="text-warning fw-bold mb-1">(Masters's) Aug. 2025 - May 2026</h3>
                <div className="col-md-9 narrow-text">
                    <h3 className="text-info">
                        <img
                            src={tamuctLogo}
                            alt="Texas A&M Central Texas Logo"
                            className="img-fluid rounded me-5"
                            style={{ maxHeight: '100px' }}
                        /> Texas A&M Central Texas
                    </h3>
                    <p className="mb-1"><strong>Degree:</strong> Masters in Information Systems</p>
                    <p className="mb-1"><strong>Area of Focus:</strong> Applied Data Analytics</p>
                    {/*<p className="mb-1"><strong>GPA:</strong> N/A</p>*/}
                    <p className="mb-4"><strong>Graduation Year:</strong> May 2026</p>

                    {/*<p className="mb-1"><strong>Academic Achievements:</strong> N/A</p>*/}

                    <p className="text-light mb-1"><strong>Focused on: </strong> </p>
                    <ul className="mb-1">
                        <li className="mb-1">Fundamental concepts and principles of data analytics and their role in supporting and enhancing organizational decision making and predictions.</li>
                        <li className="mb-1">Trends, challenges, analytic methods, tools, and strategies for data analytics and data management, including data privacy and ethics.</li>
                        <li className="mb-1">Using data analytics to solve marketing and management problems.</li>
                        <li className="mb-1">Turning real-world datasets into data visualizations, using software such as Tableau, Power BI, Google Data Studio and others.</li>
                        <li className="mb-1">Social media data acquisition and analysis, social network representation and visualization, network cohesion, homophily, affiliation network, clustering, and social influencer identification.</li>
                        <li className="mb-1">Investigating managerial understanding of web analytics measures using open-source tools.</li>
                    </ul>
                </div>
                <div className="col-md-4 text-end">
                    <img
                        src={tamuctSchool}
                        alt="Texas A&M Central Texas Logo"
                        className="rounded me-5"
                        style={{ width: '500px', height: 'auto' }}
                    />
                </div>
            </div>

            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <h3 className="text-warning fw-bold mb-1">(Bachelors's) Aug. 2023 - May 2025</h3>
                <div className="col-md-9 narrow-text">
                    <h3 className="text-info">
                        <img
                            src={tamuctLogo}
                            alt="Texas A&M Central Texas Logo"
                            className="img-fluid rounded me-5"
                            style={{ maxHeight: '100px' }}
                        /> Texas A&M Central Texas
                    </h3>
                    <p className="mb-1"><strong>Degree:</strong> Bachelor of Science Computer Science</p>
                    <p className="mb-1"><strong>GPA:</strong> Major GPA: 4.0 | Cumulative GPA: 3.77</p>
                    <p className="mb-4"><strong>Graduation Year:</strong> May 2025</p>
                    <p className="mb-1"><strong>Academic Achievements:</strong></p>
                    <ul className="mb-4">
                        <li className="mb-2"><strong>Graduated with Summa Cum Laude Honors </strong>| maintained an overall GPA of 3.9 or higher on all coursework taken during entire degree plan.</li>
                        <li className="mb-2">Received <strong>Cybersecurity micro-credential</strong> for completing 9 credits and required classes in certificate path.</li>
                        <li className="mb-2">Received <strong>Business Analytics & Intelligence micro-credential</strong> for completing 9 credits and required classes in certificate path.</li>
                        <li className="mb-2"><strong>"A" Honor Roll (Fall 2023):</strong> Maintained a GPA greater than 3.5 on coursework 12 credits or more during a semester.</li>
                        <li className="mb-2"><strong>"A" Honor Roll (Spring 2024):</strong> Maintained a GPA greater than 3.5 on coursework 12 credits or more during a semester.</li>
                        <li className="mb-2"><strong>"A" Honor Roll (Fall 2024):</strong> Maintained a GPA greater than 3.5 on coursework 12 credits or more during a semester.</li>
                        <li className="mb-2"><strong>"A" Honor Roll (Spring 2025):</strong> Maintained a GPA greater than 3.5 on coursework 12 credits or more during a semester.</li>
                    </ul>

                    <p className="text-light mb-1"><strong>Focused on: </strong> </p>
                    <ul className="mb-1">
                        <li className="mb-1"><strong>Programming:</strong> Achieved expertise in programming languages such as Java, C++, C#, HTML, CSS and Java Script to create software applications and design websites for businesses. Similarly, become an expert in software development technologies such as Visual Studio and Visio.</li>
                        <li className="mb-1"><strong>Database Design and Development:</strong> Design and develop database applications using SQL and PL/SQL to create and manage databases.</li>
                        <li className="mb-1"><strong>Quantitative Communication and Processing:</strong> Inspect, clean and model data to create useful information and provide expert solutions.</li>
                        <li className="mb-1"><strong>Cybersecurity and Risk Management:</strong> Apply security techniques to protect the organizational information assets including business continuity and disaster recovery planning.</li>
                        <li className="mb-1"><strong>IT Project Management and Infrastructure:</strong> Plan, schedule and manage information technology resources using Microsoft Project. Also, learn to install, configure and maintain Windows- and Linux-based systems including enterprise systems and virtual systems. Design and set up corporate networks using tools such as Wireshark and Packet Tracer.</li>
                        <li className="mb-1"><strong>Security Awareness and Risk Response:</strong> Understand and implement best practices in cybersecurity awareness, threat detection, risk mitigation, and compliance to reduce vulnerabilities and protect digital environments.</li>
                    </ul>
                </div>
                <div className="col-md-4 text-end">
                    <img
                        src={tamuctSchool}
                        alt="Texas A&M Central Texas Logo"
                        className="rounded me-5"
                        style={{ width: '500px', height: 'auto' }}
                    />
                </div>
            </div>

            <div className="row align-items-center  pb-4 mb-5">
                <h3 className="text-warning fw-bold mb-1">(Associates) Aug. 2021 - May 2023
                </h3>
                <div className="col-md-9 narrow-text">
                    <h3 className="text-info">
                        <img
                            src={ctcLogo}
                            alt="Central Texas College Logo"
                            className="img-fluid rounded me-5"
                            style={{ maxHeight: '100px', backgroundColor: 'white' }}
                        /> Central Texas College
                    </h3>
                    <p className="mb-1"><strong>Degree:</strong> Interdisciplinary Studies | Focus in Computer Science and Mathematics</p>
                    <p className="mb-1"><strong>GPA:</strong> 3.56</p>
                    <p className="mb-4"><strong>Graduation Year:</strong> May 2023</p>
                    <p className="mb-1"><strong>Academic Achievements:</strong></p>
                    <ul>
                        <li className="mb-2"><strong>Graduated with honors </strong>| maintained an overall GPA of 3.55 on all coursework taken.</li>
                        <li className="mb-2"><strong>Dean's Honor Roll (Fall 2021)</strong> earned a grade point average of 3.5 in 12 or more semester credit hours of college-level credit taken concurrently during the regular semester.</li>
                        <li className="mb-2"><strong>Dean's Honor Roll (Spring 2022)</strong> earned a grade point average of 3.5 in 12 or more semester credit hours of college-level credit taken concurrently during the regular semester.</li>
                    </ul>

                    <p className="text-light mb-0"><strong>Focused on: </strong></p>
                    <ul>
                        <li><strong>Core coursework</strong> toward a Bachelor's degree in Computer Science</li>
                        <li><strong>Computer Science classes:</strong> including C++ (beginner and advanced OOP) programming and programming logic and design</li>
                        <li><strong>Foundational mathematics:</strong> Algebra I and Statistics</li>
                        <li><strong>Advanced mathematics:</strong> Pre-Calculus, Calculus I, and Calculus II</li>
                        <li><strong>Physics:</strong> Completed Physics I and II with corresponding lab components</li>
                    </ul>
                </div>
                <div className="col-md-4 text-end">
                    <img
                        src={ctcSchool}
                        alt="Central Texas College Logo"
                        className="rounded me-5"
                        style={{ width: '500px', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;
