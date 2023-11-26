import React from 'react'
import  './About.css'
const mayur = require('./mayur.jpg')
const patil = require('./patil.jpg')
const nishad = require('./nishad.jpg')
const raghav = require('./raghav.jpg')

const About = () => {
    return (
        <div className='Aboutus'>
            <h2>About Us</h2>
            <p>
                We are a group of students from MIT, Pune who have developed this website as a part of our project for the course of Full Stack Dev.
                <br />
                This website is a platform for students/Employees to Create and Analyse their Resume in few clicks. 
                <br />
                We hope you like our website and find it useful. If you have any queries or suggestions, please feel free to contact us.
            </p>

            <h3>Developers</h3>
            <div className='Developers'>
                <div className='Developer'>
                    <a href='https://github.com/MayurBehere'><img src={mayur} alt='Developer 1' /></a>
                    <a href='https://www.linkedin.com/in/mayur-behere-446148223/'><h4>Mayur Behere</h4></a>
                    
                </div>
                <div className='Developer'>
                <a href='https://github.com/prathamesh093'>  <img src={patil} alt='Developer 2' /></a>
                 <a href='https://www.linkedin.com/in/prathamesh-patil-8a403624a/'><h4>Prathamesh Patil</h4></a>
                </div>
                <div className='Developer'>
                    <img src={nishad} alt='Developer 3' />
                    <a href='https://www.linkedin.com/in/nishad-wanjari-2ab13a18b/'><h4>Nishad Wanjari</h4></a>
                </div>
                <div className='Developer'>
                    <img src={raghav} alt='Developer 3' />
                    <a href='https://www.linkedin.com/in/raghav-bhandari-91225220b/'><h4>Raghav Bhandari</h4></a>
                </div>
             
            </div>

            <h3>Contact Us</h3>
            <form className='ContactForm'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' name='name' />

                <label htmlFor='email'>Email:</label>
                <input type='email' id='email' name='email' />

                <label htmlFor='message'>Message:</label>
                <textarea id='message' name='message'></textarea>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default About
