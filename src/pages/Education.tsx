import React from 'react';
import draculaLogo from '../assets/dracula.jpeg';

const Education: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Education</h1>

            {/* Example 1 */}
            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <div className="col-md-9">
                    <h3 className="text-info">
                            <img
                            src={draculaLogo}
                            alt="University A Logo"
                            className="img-fluid rounded me-5"
                            style={{ maxHeight: '100px' }}
                        /> University of Example A
                    </h3>
                    <p className="mb-1"><strong>Degree:</strong> Bachelor of Science in Computer Science</p>
                    <p className="mb-1"><strong>GPA:</strong> 3.8</p>
                    <p className="mb-1"><strong>Graduation Year:</strong> 2021</p>
                    <p className="mb-1"><strong>Academic Achievements:</strong> Dean’s List, Programming Club President</p>
                    <p className="text-light"><strong>Focused on: </strong>Software engineering, algorithms, web development</p>
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

            {/* Example 2 */}
            <div className="row align-items-center border-bottom border-secondary pb-4 mb-5">
                <div className="col-md-9">
                    <h3 className="text-info">University of Example A</h3>
                    <p className="mb-1"><strong>Degree:</strong> Bachelor of Science in Computer Science</p>
                    <p className="mb-1"><strong>GPA:</strong> 3.8</p>
                    <p className="mb-1"><strong>Graduation Year:</strong> 2021</p>
                    <p className="mb-1"><strong>Academic Achievements:</strong> Dean’s List, Programming Club President</p>
                    <p className="text-light"><strong>Focused on: </strong>Software engineering, algorithms, web development</p>
                </div>
                <div className="col-md-3 text-end">
                    <img
                        src={draculaLogo}
                        alt="University A Logo"
                        className="img-fluid rounded"
                        style={{ maxHeight: '100px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Education;
