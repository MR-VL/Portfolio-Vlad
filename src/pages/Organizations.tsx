import React from 'react';
import demo from '../assets/demo.png';
import sherlock from '../assets/sherlock-logo.png';

const Organizations: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Organizations</h1>

            <div className="row align-items-start pb-4 mb-2">
                {/* LEFT COLUMN — TEXTUAL CONTENT */}
                <div className="col-md-8 narrow-text p-4 rounded">
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src={sherlock}
                            alt="Sherlock Project Logo"
                            className="img-fluid rounded me-4"
                            style={{ maxHeight: '100px' }}
                        />
                        <h3 className="text-info mb-0">
                            Sherlock Project
                        </h3>
                    </div>



                    <h5 className="text-warning fw-bold mb-1">Aug. 2025 - Present</h5>

                    <p><strong>GitHub Stars:</strong> ⭐66.4k+⭐</p>
                    <p><strong>Role:</strong> Individual Contributor</p>
                    <p><strong>Recognition:</strong> Top 50 Overall Contributors</p>

                    <p>
                        <strong>GitHub Repository:</strong>{' '}
                        <a
                            href="https://github.com/sherlock-project/sherlock"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-info"
                        >
                            sherlock-project/sherlock
                        </a>
                    </p>

                    <p>
                        As a recognized <strong>Top 50 Contributor</strong> to the project, I have played an active role
                        in maintaining and improving its JSON-based site configuration system. My contributions focus on
                        keeping the tool up-to-date and functional by:
                    </p>

                    <hr/>
                    <div className="mt-4">
                        <h5 className="text-warning fw-bold">🕓 Pending Commits</h5>
                        <div>
                            <p>
                                <a
                                    href="https://github.com/sherlock-project/sherlock/pull/2493"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-success"
                                >
                                    ( PR #2494)
                                </a>

                            </p>

                            <ul>
                                <li>Added support for a new platform (PyChess) recently requested via GitHub Issues.
                                    <a
                                        href="https://github.com/sherlock-project/sherlock/issues/2492"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-info"
                                    >
                                        ( Issue #2492 )
                                    </a>
                                </li>
                                <li>Removed a deprecated site (TorrentGalaxy) that was permanently shut down.
                                    <a
                                        href="https://github.com/sherlock-project/sherlock/issues/2494"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-info"
                                    >
                                        ( Issue #2494 )
                                    </a>
                                </li>
                                <li>Fixed minor typos and improved clarity in the project README.
                                    <a
                                        href="https://github.com/sherlock-project/sherlock/issues/2495"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-info"
                                    >
                                        ( Issue #2495 )
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>


                    <p>
                        <strong>Sherlock</strong> is a widely adopted open-source tool designed to detect the presence
                        of usernames across hundreds of social media platforms, websites, and online services. By
                        automating the search process, Sherlock significantly simplifies digital footprint
                        analysis, making it a valuable asset for cybersecurity professionals, penetration testers, OSINT
                        (Open Source Intelligence) investigators, digital forensics analysts, and privacy researchers
                        worldwide.
                    </p>

                    <p>
                        With over 66,000 stars on GitHub, Sherlock has become one of the most popular OSINT tools in the
                        cybersecurity ecosystem. It helps professionals quickly identify the online presence of
                        individuals by scanning for username availability and activity across platforms ranging from
                        mainstream social networks to niche services.
                    </p>
                    <img
                        src={demo}
                        alt="Sherlock demo image"
                        className="rounded d-block mx-auto"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            marginBottom: '1rem'
                        }}
                    />

                </div>

                {/* RIGHT COLUMN — IMAGES */}
                <div className="col-md-4 d-flex flex-column align-items-end justify-content-start">

                    <a
                        href="https://github.com/sherlock-project/sherlock/graphs/contributors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://contrib.rocks/image?&columns=12&max=1000&repo=sherlock-project/sherlock"
                            alt="Contributors"
                            className="rounded"
                            style={{
                                width: '100%',
                                maxWidth: '400px',
                                height: 'auto'
                            }}
                        />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Organizations;
