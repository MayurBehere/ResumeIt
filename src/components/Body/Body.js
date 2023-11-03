import React from 'react'
import styles from './Body.module.css'
import {ArrowDown} from 'react-feather'
import Editor from '../Editor/Editor';
import { useState } from 'react';

      function Body() {
        const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
        const sections = {
          basicInfo: "Basic Info",
          workExp: "Work Experience",
          projects: "Projects",
          education: "Education",
          achievements: "Achievements",
          skills: "Skills",
          other: "Other"
        };

        const[resumeInformation, setResumeInformation] = useState({
          [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail:{}                        //detail is an object basic info has one information
          },

          [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details:[]                      //details is an array work experience has multiple information and similar for other sections
          },

          [sections.projects]: {
          id: sections.projects,
          sectionTitle: sections.projects,
          details:[]
          },

          [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details:[]
          },

          [sections.achievements]: {
          id: sections.achievements,
          sectionTitle: sections.achievements,
          points:[]
          },      

          [sections.skills]: {
          id: sections.skills,
          sectionTitle: sections.skills,
          points:[]
          },

          [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail:""
          },
        });

        return (
          <div className={styles.container}>
            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
              <div className={styles.colors}>
                {
                  colors.map((item) => (
                    <span 
                    key={item}
                    className={styles.color} 
                    style={{backgroundColor: item}}/>
                  ))
                }
              </div>
              <button>Download<ArrowDown/></button>
            </div>
            <div className={styles.main}>
              <Editor sections={sections} information={resumeInformation} />
            </div>
          </div>
        )
      }

      export default Body


