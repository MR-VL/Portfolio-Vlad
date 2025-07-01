import React from 'react';

import {Link} from "react-router-dom";


const Organizations: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Organizations</h1>

            <div className="row align-items-center pb-4 mb-5">

                <div className="col-md-9 narrow-text p-4 rounded">
                    <div className="d-flex align-items-center mb-3">
                        {/*<img*/}
                        {/*    src={tamuctLogo}*/}
                        {/*    alt="Texas A&M Central Texas Logo"*/}
                        {/*    className="img-fluid rounded me-4"*/}
                        {/*    style={{ maxHeight: '100px' }}*/}
                        {/*/>*/}
                        <h3 className="text-info mb-0">
                            Sherlock Project
                        </h3>
                    </div>
                    <h5 className="text-warning fw-bold mb-1">Feb. 2025 - May 2025</h5>
                    {/*<p><strong>Position Title: </strong> Student Worker / Researcher Assistant</p>*/}
                    {/*<p className="mb-1"><strong>Company:</strong> Texas A&M Central Texas | Killeen Tx. 76549</p>*/}
                    {/*<p className="mb-1"><strong>Area of Focus:</strong> Data Analytics, Machine Learning, Internet Of Things</p>*/}
                    {/*<p className="mb-1">*/}
                    {/*    <strong>*/}
                    {/*        <Link to="/Portfolio-Vlad/WorkContributions" className="text-info text-decoration-none">*/}
                    {/*            Click to see major contributions and achievements.*/}
                    {/*        </Link>*/}
                    {/*    </strong>*/}
                    {/*</p>*/}





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
                    {/*<img*/}
                    {/*    src={cciLogo}*/}
                    {/*    alt="Texas A&M Central Texas Logo"*/}
                    {/*    className="rounded me-5"*/}
                    {/*    style={{ width: '500px', height: 'auto' }}*/}
                    {/*/>*/}
                </div>
            </div>

        </div>


    );

};

export default Organizations;