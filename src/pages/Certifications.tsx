import React, { useState } from 'react';

type Cert = {
    title: string;
    provider: 'Microsoft' | 'Adobe' | 'LinkedIn' | 'TAMUCT';
    date: string;
    url?: string;
    certificateId?: string;
    expiration?: string;
};


const certifications: Cert[] = [
    { title: 'Business Analytics & Intelligence UG. Micro-credential', provider: 'TAMUCT', date: '06-16-2025', url:'https://www.parchment.com/u/award/490894183ee048322cd3fca4cda8fa40'},
    { title: 'Cybersecurity UG. Micro-credential', provider: 'TAMUCT', date: '06-16-2025', url:'https://www.parchment.com/u/award/3036a03922922f47291b879fcb0cca30'},
    { title: 'MTA:98-367: Security Fundamentals', provider: 'Microsoft', date: '04-29-2021', certificateId:"cdUU-uGHM", url:'https://github.com/MR-VL/Portfolio-Vlad/blob/0331cf67f4f36155bae3a13714d7731000352692/public/Certifications/securityfundamentals.pdf'},
    { title: 'MTA:98-381: Introduction to Programming using Python', provider: 'Microsoft', date: '03-05-2020', certificateId:"odNU-uSHL", url:'https://github.com/MR-VL/Portfolio-Vlad/blob/0331cf67f4f36155bae3a13714d7731000352692/public/Certifications/pythoncert.pdf'},
    { title: 'MTA:98-383: Introduction to Programming using HTML and CSS', provider: 'Microsoft', date: '05-22-2019', certificateId:"wbpVL-H9ad", url:'https://github.com/MR-VL/Portfolio-Vlad/blob/0331cf67f4f36155bae3a13714d7731000352692/public/Certifications/htmlcert.pdf'},
    { title: 'Graphic Design & Illustration using Adobe Illustrator 2020 (v 24.x)', provider: 'Adobe', date: '04-26-2021', expiration:"04-26-2024", certificateId:"JSoq-4wkM", url:'https://github.com/MR-VL/Portfolio-Vlad/blob/0331cf67f4f36155bae3a13714d7731000352692/public/Certifications/illustrator.pdf'},
    { title: 'Zendesk Customer Service Professional Certificate', provider: 'LinkedIn', date: '05-10-2024', url:'https://www.linkedin.com/learning/certificates/6144eb0ef207147a588df96e2f66c8e734090b7e2fd6b6edddc6acb0c790e399?u=222312266'},
    { title: 'SS&C Blue Prism Robotic Process Automation Professional Certificate', provider: 'LinkedIn', date: '04-05-2024', url:'https://www.linkedin.com/learning/certificates/5484ef4c29cbd4d09935df9a4497cae59852e9e5482ca8cb7cfbfb4e4810333f?u=222312266'},
    { title: 'ServiceNow IT Leadership Professional Certificate', provider: 'LinkedIn', date: '04-19-2024', url:'https://www.linkedin.com/learning/certificates/affeec2408e685845c805890b9f7972b30300af3afa0000b0bfd0a121b404867?u=222312266'},
    { title: 'Aha! Product Management Professional Certificate', provider: 'LinkedIn', date: '03-10-2024', url:'https://www.linkedin.com/learning/certificates/5d879adfb644d99b7fa261fb1b810f138e84f88ca699a8707fc3dede961b3dcd?u=222312266'},
    { title: 'OpenEDG Python Institute: Programming with Python Professional Certificate', provider: 'LinkedIn', date: '03-29-2024', url:'https://www.linkedin.com/learning/certificates/82adc51d10988e39c9dc74fd26893554bae7d0d5ae0b39d4117835f9080d6a40?u=222312266'},
    { title: 'Career Essentials in Cybersecurity by Microsoft and LinkedIn', provider: 'LinkedIn', date: '01-29-2024', url:'https://www.linkedin.com/learning/certificates/df2f508479dfef81c36dde3d2a56c6846e11adc9dbfa7975245cd341d6b851ea?u=222312266'},
    { title: 'Career Essentials in Generative AI by Microsoft and LinkedIn', provider: 'LinkedIn', date: '02-23-2024', url:'https://www.linkedin.com/learning/certificates/78e9385baafef61417ff61baf87426cf1e29df584e3c18c6bf68c7e5acfe894d?u=222312266'},
    { title: 'Career Essentials in Sustainable Tech by Microsoft and LinkedIn', provider: 'LinkedIn', date: '03-08-2024', url:'https://www.linkedin.com/learning/certificates/950ffb63614b89e6e9accee63cc84cf713e2e7ec9bcbecd3a3dab71bbc9923aa?u=222312266'},

    // { title: '', provider: 'LinkedIn', date: '05-10-2024'},

];

const Certifications: React.FC = () => {
    const [filter, setFilter] = useState<'All' | 'Microsoft' | 'Adobe' | 'LinkedIn' | 'TAMUCT'>('All');

    const filteredCerts = filter === 'All'
        ? certifications
        : certifications.filter(cert => cert.provider === filter);

    const providers: ('All' | 'Microsoft' | 'Adobe' | 'LinkedIn' | 'TAMUCT')[] = ['All', 'Microsoft', 'Adobe', 'LinkedIn', 'TAMUCT'];

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

                                {cert.certificateId && (
                                    <p className={`mb-1 ${''}`}>
                                        <strong>CertificateID:</strong> {cert.certificateId}
                                    </p>
                                )}
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