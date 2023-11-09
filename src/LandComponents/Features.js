import React from 'react'
import './Feature.css'


const Features = () => {
    return (
        
        <div className="text-center">
            <h1 className="feature-text">Why Us?</h1>
            <div
                className="row g-4 py-5 row-cols-1 row-cols-lg-3 mx-auto"
                style={{ maxWidth: '1000px' }}
            >
                <div className="feature-col">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-heading">Professional</h3>
                            <p style={{ fontFamily: 'Arial' }}>
                                Elevate your resume with a touch of sophistication. Craft
                                polished, industry-ready resumes effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="feature-col">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-heading">Customizable</h3>
                            <p style={{ fontFamily: 'Arial' }}>
                                Drag and drop sections, change colors, edit text, and more.
                                Create a resume tailored to your needs.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="feature-col">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-heading">Easy-to-use</h3>
                            <p style={{ fontFamily: 'Arial' }}>
                                Our resume builder is powerful and easy to use, with a range of
                                amazing functions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features
