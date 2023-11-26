import React from 'react'
import HeroImg from './HeroPoster.jpg'
import './Hero.css'
import { Link } from 'react-router-dom';



const Hero = () => {
    return (
        <div className="px-4 pt-5 my-5 text-center">
            <h1 className="Main">The Ultimate Resume Builder</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Build beautiful, recruiter-tested resumes in a few clicks! Our resume builder is powerful and easy to use, with a range of amazing functions. Custom-tailor resumes for any job within minutes. Increase your interview chances and rise above the competition.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5"  >
                    <Link to="/login"><button type="button" className="btn btn-primary btn-lg px-5 me-sm-3" >Build</button></Link>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-primary btn-lg px-5 me-sm-2 hover-effect">Analyse</button></a>
                </div>
            </div>
            <div className='Resume'>
                <img src={HeroImg} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
            </div>
        </div>
    )
}

export default Hero;
