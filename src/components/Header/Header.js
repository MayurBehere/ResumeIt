import React from 'react'
import styles from './Header.module.css'
import resumeSvg from './resume.svg'
function Header() {
  return (
   
     <div className={styles.container}>
       <div className={styles.left}>
        <p className={styles.heading}>
            A <span>Resume</span> that Stands Out!
        </p>
        <p className={styles.heading}>
           Make you own resume in minutes with <span>ResumeIt</span>
        </p>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="resume" className={styles.resumeSvg}/>
        </div>
      </div> 
    
  )
}

export default Header
