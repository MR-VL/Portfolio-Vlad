import React from 'react';
import draculaLogo from '../assets/dracula.jpeg';

const Education: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Education</h1>

            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">

                <h3 className="text-warning-emphasis fw-bold mb-1">(Masters's) Aug. 2025 - May 2026</h3>
                <div className="col-md-9">
                    <h3 className="text-info">
                        <img
                            src={draculaLogo}
                            alt="Texas A&M Central Texas Logo"
                            className="img-fluid rounded me-5"
                            style={{ maxHeight: '100px' }}
                        /> Texas A&M Central Texas
                    </h3>
                    <p className="mb-1"><strong>Degree:</strong> Masters in Information Systems</p>
                    <p className="mb-1"><strong>Area of Focus:</strong> Applied Data Analytics</p>
                    <p className="mb-1"><strong>GPA:</strong> N/A</p>
                    <p className="mb-1"><strong>Graduation Year:</strong> May 2026</p>

                    <p className="mb-1"><strong>Academic Achievements:</strong> N/A</p>

                    <p className="text-light mb-0"><strong>Focused on: </strong> </p>
                    <ul>
                        <li>Fundamental concepts and principles of data analytics and their role in supporting and enhancing organizational decision making and predictions</li>
                        <li>Trends, challenges, analytic methods, tools, and strategies for data analytics and data management, including data privacy and ethics</li>
                        <li>Using data analytics to solve marketing and management problems</li>
                        <li>Turning real-world datasets into data visualizations, using software such as Tableau, Power BI, Google Data Studio and others</li>
                        <li>Social media data acquisition and analysis, social network representation and visualization, network cohesion, homophily, affiliation network, clustering, and social influencer identification</li>
                        <li>Investigating managerial understanding of web analytics measures using open-source tools</li>
                    </ul>


                </div>
                <div className="col-md-3 text-end">
                    <img
                        src={draculaLogo}
                        alt="Texas A&M Central Texas Logo"
                        className="img-fluid rounded me-5"
                        // style={{ maxHeight: '100px' }}
                    />
                </div>
            </div>


            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <h3 className="text-warning-emphasis fw-bold mb-1">(Bachelors's)</h3>
                <div className="col-md-9">
                    <h3 className="text-info">
                        <img
                            src={draculaLogo}
                            alt="Texas A&M Central Texas Logo"
                            className="img-fluid rounded me-5"
                            style={{ maxHeight: '100px' }}
                        /> Texas A&M Central Texas
                    </h3>
                    <p className="mb-1"><strong>Degree:</strong> ddd</p>
                    <p className="mb-1"><strong>GPA:</strong> 0</p>
                    <p className="mb-1"><strong>Graduation Year:</strong> 1233</p>
                    <p className="mb-1"><strong>Academic Achievements:</strong> woof</p>
                    <p className="text-light"><strong>Focused on: </strong>kdjkfd</p>

                </div>
                <div className="col-md-3 text-end">
                    <img
                        src={draculaLogo}
                        alt="Texas A&M Central Texas Logo"
                        className="img-fluid rounded me-5"
                        // style={{ maxHeight: '100px' }}
                    />
                </div>
            </div>

            <div className="row align-items-center  pb-4 mb-5">
                <h3 className="text-warning-emphasis fw-bold mb-1">(Masters's)</h3>
                <div className="col-md-9">
                    <h3 className="text-info">
                        <img
                            src={draculaLogo}
                            alt="University A Logo"
                            className="img-fluid rounded me-5"
                            style={{ maxHeight: '100px' }}
                        /> University of Example C
                    </h3>
                    <p className="mb-1"><strong>Degree:</strong> ddd</p>
                    <p className="mb-1"><strong>GPA:</strong> 0</p>
                    <p className="mb-1"><strong>Graduation Year:</strong> 1233</p>
                    <p className="mb-1"><strong>Academic Achievements:</strong> woof</p>
                    <p className="text-light"><strong>Focused on: </strong>kdjkfd</p>

                </div>
                <div className="col-md-3 text-end">
                    <img
                        src={draculaLogo}
                        alt="University A Logo"
                        className="img-fluid rounded me-5"
                        // style={{ maxHeight: '100px' }}
                    />
                </div>
            </div>

        </div>
    );
};

export default Education;
