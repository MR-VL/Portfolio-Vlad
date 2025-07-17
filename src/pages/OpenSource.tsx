import React from 'react';
import demo from '../assets/demo.png';
import sherlock from '../assets/sherlock-logo.png';

const OpenSource: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Open Source Contributions</h1>

            {/* Maigret Project */}
            <div className="row align-items-start pb-4">
                <div className="col-md-8 narrow-text p-4 rounded">
                    <div className="d-flex align-items-center mb-3">
                        <h3 className="text-info mb-0">Maigret</h3>
                    </div>

                    <h5 className="text-warning fw-bold mb-1">Jul. 2025 - Present</h5>
                    <p><strong>GitHub Stars:</strong> ⭐15.7k+⭐</p>
                    <p><strong>Role:</strong> Individual Contributor</p>
                    <p>
                        <strong>GitHub Repository:</strong>{' '}
                        <a
                            href="https://github.com/soxoj/maigret"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-info"
                        >
                            soxoj/maigret
                        </a>
                    </p>

                    <div className="mt-4">
                        <h5 className="text-warning fw-bold">✅ Merged Commits</h5>
                        <p>
                            <a
                                href="https://github.com/soxoj/maigret/pull/2037"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-success"
                            >
                                ( PR #2037)
                            </a>

                        </p>
                        <ul>
                            <li className="mb-2">Disabled a deprecated site (Ask.FM) to maintain the accuracy and performance of the tool
                                <a
                                    href="https://github.com/soxoj/maigret/issues/2036"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-info"
                                >
                                    ( Issue #2036 )
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="text-secondary" />
                    <p>
                        <strong>About Maigret:</strong> Maigret is an advanced username reconnaissance tool used for
                        finding a person’s footprint across many online platforms. It’s highly regarded for its speed,
                        extensibility, and support for various output formats including JSON and PDF.
                    </p>
                </div>
            </div>

            {/* Sherlock Project */}
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



                    <h5 className="text-warning fw-bold mb-1">Aug. 2024 - Present</h5>

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
                                <li className="mb-1">Added support for a new platform (PyChess) recently requested via GitHub Issues.
                                    <a
                                        href="https://github.com/sherlock-project/sherlock/issues/2492"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-info"
                                    >
                                        ( Issue #2492 )
                                    </a>
                                </li>
                                <li className="mb-1">Removed a deprecated site (TorrentGalaxy) that was permanently shut down.
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

                    <hr/>
                    <div className="mt-4">
                        <h5 className="text-warning fw-bold">✅ Merged Commits</h5>
                        <p>
                            <a
                                href="https://github.com/sherlock-project/sherlock/pull/2404"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-success"
                            >
                                ( PR #2404)
                            </a>

                        </p>
                        <ul>
                            <li className="mb-2">Fixed a broken site entry (Instagram) using URL pattern probing and validation techniques
                                <a
                                    href="https://github.com/sherlock-project/sherlock/issues/2396"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-info"
                                >
                                    ( Issue #2396 )
                                </a>
                            </li>


                            <li>Removed website that shut down (Ask.fm) to maintain the accuracy and performance of the tool</li>

                        </ul>
                    </div>
                    <hr className="text-secondary" />

                    <div>
                        <p>
                            <a
                                href="https://github.com/sherlock-project/sherlock/pull/2316"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-success"
                            >
                                ( PR #2316)
                            </a>

                        </p>

                        <ul>
                            <li>Added support for a new platform (AtCoder) recently requested via GitHub Issues.
                                <a
                                    href="https://github.com/sherlock-project/sherlock/issues/2314"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-info"
                                >
                                    ( Issue #2314 )
                                </a>
                            </li>

                        </ul>
                    </div>
                    <hr className="text-secondary" />

                    <div>
                        <p>
                            <a
                                href="https://github.com/sherlock-project/sherlock/pull/2265"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-success"
                            >
                                ( PR #2265)
                            </a>

                        </p>

                        <ul>
                            <li>Removed website that shut down (ICQ.com) to maintain the accuracy and performance of the tool
                                <a
                                    href="https://github.com/sherlock-project/sherlock/issues/2264"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-info"
                                >
                                    ( Issue #2264 )
                                </a>
                            </li>

                        </ul>
                    </div>


                    <hr/>

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

export default OpenSource;
