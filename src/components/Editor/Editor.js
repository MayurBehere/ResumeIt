import React from 'react'
import styles from './Editor.module.css'
import InputControl from '../InputControl/InputControl'
import { X } from 'react-feather';

function Editor(props) {
    const sections = props.sections;
    
    const[activeSectionKey, setActiveSectionKey] = React.useState(Object.keys(sections)[0]); 

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter Job Title" />
                <InputControl label="Company" placeholder="Enter Company Name" />
            </div>
            <div className={styles.row}>
                <InputControl label="Certificate Link" placeholder="Enter Certificate Link" />
                <InputControl label="Location" placeholder="Enter Location eg.Remote" />
            </div>
            <div className={styles.row}>
                <InputControl label="Start Date" type="date" placeholder="Enter Start date of work" />
                <InputControl label="End Date" type="date" placeholder="Enter End date of work" />
            </div>
            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl placeholder="line 1"/>
                <InputControl placeholder="line 2"/>
                <InputControl placeholder="line 3"/>
             </div>   
        </div>
    );

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter Project Name" />
            </div>
            <InputControl label="Overview" placeholder="Enter Basic Overview of Project" />
            <div className={styles.row}>
                <InputControl label="Deployed Link" placeholder="Enter Deployed Link of Project" />
                <InputControl label="Github Link" placeholder="Enter Github link of Prj" />
            </div>
            <div className={styles.column}>
                <label>Enter Project description</label>
                <InputControl placeholder="line 1"/>
                <InputControl placeholder="line 2"/>
                <InputControl placeholder="line 3"/>
            </div>   
        </div>
    );

    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title eg. B.Tech" />
            </div>
            <InputControl label="College/School Name" placeholder="Enter School/College Name" />
            <div className={styles.row}>
                <InputControl label="Start Date" type="date" placeholder="Start date of Education" />
                <InputControl label="End Date" placeholder="End date of Education" />
            </div>
            
        </div>
    );

   
    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Name" placeholder="Enter you Name" />
                <InputControl label="Title" placeholder="eg. Frontend Developer" />
            </div>
            <div className={styles.row}>
                <InputControl label="Linked Link" placeholder="Enter LinkedIn Profile Link" />
                <InputControl label="Github Link" placeholder="Enter Github Profile Link" />
            </div>
            <div className={styles.row}>
                <InputControl label="Start Date" type="date" placeholder="Enter Start date of work" />
                <InputControl label="End Date" type="date" placeholder="Enter End date of work" />
            </div>
            <div className={styles.row}>
                <InputControl label="Email"  placeholder="Enter your Email" />
                <InputControl label="Phone No."  placeholder="Enter your Phone No. " />
            </div>
        </div>
    );

    const achievementBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>Enter your Achievement</label>
                <InputControl placeholder="line 1"/>
                <InputControl placeholder="line 2"/>
                <InputControl placeholder="line 3"/>
             </div>   
        </div>
    );

    const skillBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>Enter Your Skills</label>
                <InputControl placeholder="line 1"/>
                <InputControl placeholder="line 2"/>
                <InputControl placeholder="line 3"/>
             </div>   
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
               <InputControl label="Other" placeholder="Enter Other Information"/>
        </div>
    );

    const generateBody = () => {
            switch(sections[activeSectionKey]){
                case sections.workExp:
                    return workExpBody;
                case sections.projects:
                    return projectBody;
                case sections.education:
                    return educationBody;
                case sections.basicInfo:
                    return basicInfoBody;
                case sections.achievements:
                    return achievementBody;
                case sections.skills:
                    return skillBody;
                case sections.other:
                    return otherBody;
                 default:
                    return null;
            }
    }


    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {Object.keys(sections).map((key) => (
                    <div className={`${styles.section} ${key === activeSectionKey ? styles.active : ''}`} 
                    key={key}
                    onClick={() => setActiveSectionKey(key)}
                    >
                        {sections[key]}
                    </div>
                ))}
            </div>

            <div className={styles.body}>
               <InputControl label="Title" placeholder="Enter section title"/>

                <div className={styles.chips}>
                
                <div className={styles.chip}>
                <p> Project 1</p>  
                <X />  
                </div>       
                <div className={styles.chip}>
                <p> Project 2</p>  
                <X />  
                </div>  
                
               </div>      
                    
                


               {generateBody()}
            </div>       

        </div>
    );
}

export default Editor
