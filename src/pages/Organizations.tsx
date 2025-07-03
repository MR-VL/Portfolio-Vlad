import React from 'react';
import demo from '../assets/demo.png';
import sherlock from '../assets/sherlock-logo.png'
const Organizations: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Organizations</h1>

            <div className="row align-items-center pb-4 mb-2">

                <div className="col-md-9 narrow-text p-4 rounded">
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

                    <div>
                        <p><strong>Role: </strong> Individual Contributor</p>
                        <p><strong>Area of Focus:</strong> JSON site list maintenance.</p>
                    </div>






                    {/*<p className="mb-1"><strong>Academic Achievements:</strong> N/A</p>*/}

                    {/*<p className="text-light mb-1"><strong>Job Responsibilities: </strong> </p>*/}
                    {/*<ul className="mb-1">*/}
                    {/*    <li className="mb-1">Supported guided cybersecurity research using the CIC IoT 2023 dataset, focusing on machine learning-based*/}
                    {/*        threat detection.</li>*/}
                    {/*    <li className="mb-1">Developed and evaluated classification models (Random Forest, XGBoost, VAE) alongside sampling methods*/}
                    {/*        (SMOTE, SMOTE-ENN, SMOTE-Tomek, ADASYN, stratified sampling, data diffusion and undersampling) to*/}
                    {/*        improve detection accuracy and class balance.</li>*/}
                    {/*    <li className="mb-1">Conducted in-depth performance analysis across pre-processing strategies and model combinations, identifying*/}
                    {/*        trade-offs in detection effectiveness and stealth.</li>*/}
                    {/*    <li className="mb-1">Optimized large-scale data workflows using DASK and custom Python scripts for statistical analysis and label*/}
                    {/*        encoding.</li>*/}
                    {/*    <li className="mb-1">Reviewed and integrated research on GNNs, GANs, CNNs, and Transformer models to shape experimental design*/}
                    {/*        and align with evolving research goals.</li>*/}
                    {/*    <li className="mb-1">Analyzed performance trade-offs across pre-processing strategies and model combinations to optimize for detection effectiveness and stealth.</li>*/}
                    {/*</ul>*/}
                </div>
                <div className="col-md-4 text-end">
                    <img
                        src={demo}
                        alt="Sherlock demo image"
                        className="rounded me-5"
                        style={{ width: '500px', height: 'auto' }}
                    />
                </div>
            </div>

        </div>


    );

};

export default Organizations;