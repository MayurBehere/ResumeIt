import React from 'react'
import './Home.css';
import { Link } from 'react-router-dom';

function Home(props) {
  return (



    
    <div className="home">
      <div className="home__container">
        <div className="home__container__left">
          <h1>ResumeIT</h1>
          <p>ResumeIT is a web application that allows users to create and store their resumes online. Users can create their resumes using the ResumeIT resume builder and store them online. Users can also download their resumes in PDF format.</p>
          <Link to="/login"><button className="home__container__left__button">Get Started</button></Link>
        </div>
        
      </div>
    </div>
  )
    
  
}


export default Home;
