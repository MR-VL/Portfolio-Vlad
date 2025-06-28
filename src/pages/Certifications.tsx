import React, { useState } from 'react';

type Cert = {
    title: string;
    provider: 'Microsoft' | 'Adobe' | 'LinkedIn';
    date: string;
    url?: string;
    expiration?: string;
};

const certifications: Cert[] = [
    // { title: 'Photoshop Certification', provider: 'Adobe', date: '06-01-2023', expiration: '06-01-2024' },

];

const Certifications: React.FC = () => {
    const [filter, setFilter] = useState<'All' | 'Microsoft' | 'Adobe' | 'LinkedIn'>('All');

    const filteredCerts = filter === 'All'
        ? certifications
        : certifications.filter(cert => cert.provider === filter);

    const providers: ('All' | 'Microsoft' | 'Adobe' | 'LinkedIn')[] = ['All', 'Microsoft', 'Adobe', 'LinkedIn'];

    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Certifications</h1>

            <div className="mb-4">
                {providers.map((provider) => (
                    <button
                        key={provider}
                        onClick={() => setFilter(provider)}
                        className={`btn me-2 mb-2 ${filter === provider ? 'btn-primary' : 'btn-outline-light'}`}
                    >
                        {provider}
                    </button>
                ))}
            </div>

            <div className="row">
                {filteredCerts.map((cert, index) => {
                    const isExpired =
                        cert.expiration && new Date(cert.expiration) < new Date();

                    return (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                            <div className="bg-dark p-3 rounded shadow-sm h-100">
                                <h5 className="text-info">{cert.title}</h5>
                                <p className="mb-1"><strong>Provider:</strong> {cert.provider}</p>
                                <p className="mb-1"><strong>Date:</strong> {cert.date}</p>

                                {cert.expiration && (
                                    <p className={`mb-1 ${isExpired ? 'text-danger fw-bold' : ''}`}>
                                        <strong>Expiration:</strong> {cert.expiration}
                                        {isExpired && <span className="ms-2 badge bg-danger">Expired</span>}
                                    </p>
                                )}

                                {cert.url && (
                                    <a
                                        href={cert.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-decoration-underline text-light"
                                    >
                                        View Certificate
                                    </a>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Certifications;