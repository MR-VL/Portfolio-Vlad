import React from 'react';
import tamuctLogo from "../assets/tamuct_logo.jpeg";
import cciLogo from "../assets/cci.png";

const WorkContributions: React.FC = () => {
    return (
        <div className="container mt-5 text-white">
            <h1 className="mb-4 border-bottom pb-2">Work Contributions and Achievements</h1>

            <div className="row align-items-center pb-4 mb-5">

                <div className="col-md-9 narrow-text p-4 rounded">
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src={tamuctLogo}
                            alt="Texas A&M Central Texas Logo"
                            className="img-fluid rounded me-4"
                            style={{ maxHeight: '100px' }}
                        />
                        <h3 className="text-info mb-0">
                            Center For Cybersecurity Innovation (CCI)
                        </h3>
                    </div>

                    <section id="iot-sampling" className="my-5 text-light">
                        <h2 className="mb-3 border-bottom pb-2"><strong>Stratified Sampling</strong> on Large-Scale IoT Dataset</h2>

                        <p><strong>Project Overview:</strong><br/>
                            Developed a robust and scalable <strong>stratified sampling method</strong> tailored to
                            the <strong>CIC IoT 2023 dataset</strong>, which contains over <strong>48 million
                                rows</strong>, <strong>48 features</strong>, and <strong>1 class label</strong>. The
                            goal was to produce a reduced yet statistically representative sample of the original
                            dataset, suitable for downstream ML and statistical analysis tasks.</p>

                        <p><strong>Key Contributions:</strong></p>
                        <ul>
                            <li><strong>Designed and implemented</strong> a custom stratified sampling algorithm to
                                retain class distribution while ensuring balance across all classes in a massive
                                multi-class IoT dataset.
                            </li>
                            <li><strong>Performance Benchmark:</strong> Achieved an <strong>Adversarial AUC score of
                                0.4884</strong> (where 0.5 is ideal), indicating high realism and indistinguishability
                                between original and sampled data.
                            </li>
                            <li>Conducted a <strong>comprehensive statistical comparison</strong> between the sampled
                                and original datasets across all 48 features:
                                <ul>
                                    <li><code>flow_duration</code>: Mean diff = -0.23, Std diff = -19.42</li>
                                    <li><code>Header_Length</code>: Mean diff = -444.93, Std diff = -2414.95</li>
                                    <li><code>Rate</code> & <code>Srate</code>: Mean diff = -10.40, Max diff =
                                        -1,048,576.0
                                    </li>
                                    <li><code>IAT</code>: Mean diff = +6300.95, Std diff = +1555.99</li>
                                    <li><code>Covariance</code>: Max diff = -41,953,812.12</li>
                                </ul>
                            </li>
                            <li><strong>Validated realism</strong> using adversarial validation and summary statistic
                                deltas to ensure fidelity of the sample.
                            </li>
                            <li><strong>Optimized for memory and scalability,</strong> enabling processing of tens of
                                millions of rows on mid-range hardware.
                            </li>
                        </ul>

                        <p><strong>Tools & Technologies:</strong><br/>
                            Python (NumPy, Pandas), Matplotlib / Seaborn, Scikit-learn, Jupyter Notebooks, CIC IoT 2023
                            Dataset</p>

                        <p><strong>Outcome:</strong><br/>
                            The resulting sample preserved core statistical characteristics and label distributions,
                            making it ideal for <strong>faster prototyping</strong>, <strong>model
                                experimentation</strong>, and <strong>resource-constrained ML research</strong>. This
                            work demonstrates proficiency in <strong>big data processing</strong>, <strong>applied
                                statistics</strong>, and <strong>model evaluation techniques</strong>.</p>
                    </section>

                </div>
                <div className="col-md-4 text-end">
                    <img
                        src={cciLogo}
                        alt="Texas A&M Central Texas Logo"
                        className="rounded me-5"
                        style={{width: '500px', height: 'auto'}}
                    />
                </div>
            </div>


            <div className="row align-items-center pb-4 mb-5">

                <div className="col-md-9 narrow-text p-4 rounded">
                    <div className="d-flex align-items-center mb-3">
                        <img
                            src={tamuctLogo}
                            alt="Texas A&M Central Texas Logo"
                            className="img-fluid rounded me-4"
                            style={{maxHeight: '100px'}}
                        />
                        <h3 className="text-info mb-0">
                            Center For Cybersecurity Innovation (CCI)
                        </h3>
                    </div>

                    <section id="iot-undersampling" className="my-5 text-light">
                        <h2 className="mb-3 border-bottom pb-2">Undersampling Method for Realistic IoT Traffic
                            Reduction</h2>

                        <p><strong>Project Overview:</strong><br/>
                            Developed a tailored <strong>undersampling technique</strong> for the CIC IoT 2023 dataset
                            , which contains over <strong>48 million
                                rows</strong>, <strong>48 features</strong>, and <strong>1 class label</strong>.
                            designed to significantly reduce dataset size while maintaining fidelity to the
                            original data distribution. The goal was to produce a lightweight yet realistic dataset for
                            rapid model experimentation and resource-limited environments.</p>


                        <p><strong>Key Results:</strong></p>
                        <ul>
                            <li><strong>Adversarial AUC (Synthetic vs Original): 0.8240</strong> — some detectable
                                differences, but retains strong statistical alignment.
                            </li>
                            <li>Undersampled dataset was exported to <code>undersampled_data.csv</code> with <strong>2.3
                                million rows from an original 48 million.</strong>.
                            </li>
                            <li><strong>Summary Statistics (Original - Sample)</strong> indicate only minor but expected
                                variation across most features. A few key differences include:
                                <ul>
                                    <li><code>flow_duration</code>: Mean diff ≈ -119.2, Std diff ≈ -629.5</li>
                                    <li><code>Header_Length</code>: Mean diff ≈ -123,043, Std diff ≈ -291,591</li>
                                    <li><code>Rate / Srate</code>: Mean diff ≈ +4,943, Max diff ≈ 7.74M</li>
                                    <li><code>IAT</code>: Mean diff ≈ -1.18M, Std diff ≈ -36.5M</li>
                                    <li><code>Covariance</code>: Mean diff ≈ -105,129, Max diff ≈ 80.96M</li>
                                    <li><code>label</code>: Mean diff ≈ -10.03, Std diff ≈ -5.11</li>
                                </ul>
                            </li>
                            <li>Captured full statistical shift over <strong>47 features</strong> including flags,
                                protocol types, packet timings, and custom features such
                                as <code>Magnitude</code> and <code>Packets_Duration_Ratio</code>.
                            </li>
                        </ul>

                        <p><strong>Tools & Technologies:</strong><br/>
                            Python (Pandas, NumPy), Scikit-learn, Matplotlib, CIC IoT 2023 Dataset</p>

                        <p><strong>Outcome:</strong><br/>
                            The method produced a balanced and explainable downsampled dataset. It offers an optimal
                            trade-off between model training efficiency and data realism, especially valuable in
                            scenarios where <strong>computational efficiency</strong> or <strong>limited
                                memory</strong> is a constraint.</p>
                    </section>


                </div>
                <div className="col-md-4 text-end">
                    <img
                        src={cciLogo}
                        alt="Texas A&M Central Texas Logo"
                        className="rounded me-5"
                        style={{width: '500px', height: 'auto'}}
                    />
                </div>
            </div>


        </div>

    );

};

export default WorkContributions;