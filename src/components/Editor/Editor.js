import React, { useEffect } from 'react'
import styles from './Editor.module.css'
import InputControl from '../InputControl/InputControl'
import { X } from 'react-feather';
import { act } from 'react-dom/test-utils';
import { useState } from 'react';

function Editor(props) {
    const sections = props.sections;
    const information = props.information;
    const[activeSectionKey, setActiveSectionKey] = React.useState(Object.keys(sections)[0]); 
    const [activeInformation, setActiveInformation] = React.useState(information[sections[Object.keys(sections)[0]]]);   // data feded should be in the active section
    const[sectionTitle, setSectionTitle] = React.useState(sections[Object.keys(sections)[0]]);   // data feded should be in the active section
    const[values, setValue] = React.useState({
        name: activeInformation?.name || "",
        title: activeInformation?.title || "",
        LinkedIn: activeInformation?.LinkedIn || "",
        github: activeInformation?.github || "",
        phone: activeInformation?.phone || "",
        email: activeInformation?.email || "",
    });   
    const handlePointUpdate = (value, index) => {
        const tempValues = [...values];
        tempValues[index] = value;
        setValue(prev => ({...prev, points: tempValues}));
    }
    const handleSubmission = () => {
        console.log(values);
    }

    const workExpBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter Job Title" defaultValue={values.title} onChange={(event)=>setValue(prev=>({...prev, title:event.target.value}))} />
                <InputControl label="Company" placeholder="Enter Company Name" defaultValue={values.companyName} onChange={(event)=>setValue(prev=>({...prev, companyName:event.target.value}))} />
            </div>
            <div className={styles.row}>
                <InputControl label="Certificate Link" placeholder="Enter Certificate Link" defaultValue={values.certificationLink} onChange={(event)=>setValue(prev=>({...prev, certificationLink:event.target.value}))} />
                <InputControl label="Location" placeholder="Enter Location eg.Remote" defaultValue={values.location} onChange={(event)=>setValue(prev=>({...prev, location:event.target.value}))}/>
            </div>
            <div className={styles.row}>
                <InputControl label="Start Date" type="date" placeholder="Enter Start date of work" defaultValue={values.startDate} onChange={(event)=>setValue(prev=>({...prev, startDate:event.target.value}))}/>
                <InputControl label="End Date" type="date" placeholder="Enter End date of work" defaultValue={values.endDate} onChange={(event)=>setValue(prev=>({...prev, endDate:event.target.value}))}/>
            </div>
            <div className={styles.column}>
                <label>Enter work description</label>
                <InputControl placeholder="line 1" defaultValue={values.points ? values.points[0] : ""}   onChange={(event) =>handlePointUpdate(event.target.value, 0)}/>
                <InputControl placeholder="line 2" defaultValue={values.points ? values.points[1] : ""}   onChange={(event) =>handlePointUpdate(event.target.value, 1)}/> 
                <InputControl placeholder="line 3" defaultValue={values.points ? values.points[2] : ""}   onChange={(event) =>handlePointUpdate(event.target.value, 2)}/>

             </div>   
        </div>
    );

    const projectBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl
                    label="Title"
                    placeholder="Enter Project Name"
                    defaultValue={values.title}
                    onChange={(event) =>
                        setValue((prev) => ({ ...prev, title: event.target.value }))
                    }
                />
            </div>
            <InputControl
                label="Overview"
                placeholder="Enter Basic Overview of Project"
                defaultValue={values.overview}
                onChange={(event) =>
                    setValue((prev) => ({ ...prev, overview: event.target.value }))
                }
            />
            <div className={styles.row}>
                <InputControl
                    label="Deployed Link"
                    placeholder="Enter Deployed Link of Project"
                    defaultValue={values.deployedLink}
                    onChange={(event) =>
                        setValue((prev) => ({ ...prev, deployedLink: event.target.value }))
                    }
                />
                <InputControl
                    label="Github Link"
                    placeholder="Enter Github link of Prj"
                    defaultValue={values.githubLink}
                    onChange={(event) =>
                        setValue((prev) => ({ ...prev, githubLink: event.target.value }))
                    }
                />
            </div>
            <div className={styles.column}>
                <label>Enter Project description</label>
                <InputControl
                    placeholder="line 1"
                    defaultValue={values.points ? values.points[0] : ""}
                    onChange={(event) =>handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="line 2"
                    defaultValue={values.points ? values.points[1] : ""}
                    onChange={(event) =>handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="line 3"
                    defaultValue={values.points ? values.points[2] : ""}
                    onChange={(event) =>handlePointUpdate(event.target.value, 2)}
                />
            </div>
        </div>
    );
    const educationBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Title" placeholder="Enter title eg. B.Tech" defaultValue={values.title} onChange={(event)=>setValue(prev=>({...prev, title:event.target.value}))} />
            </div>
            <InputControl label="College/School Name" placeholder="Enter School/College Name" defaultValue={values.schoolName} onChange={(event)=>setValue(prev=>({...prev, schoolName:event.target.value}))} />
            <div className={styles.row}>
                <InputControl label="Start Date" type="date" placeholder="Start date of Education" defaultValue={values.startDate} onChange={(event)=>setValue(prev=>({...prev, startDate:event.target.value}))} />
                <InputControl label="End Date" placeholder="End date of Education" defaultValue={values.endDate} onChange={(event)=>setValue(prev=>({...prev, endDate:event.target.value}))} />
            </div>
            
        </div>
    );

   
    const basicInfoBody = (
        <div className={styles.detail}>
            <div className={styles.row}>
                <InputControl label="Name" placeholder="Enter you Name" defaultValue={values.name} onChange={(event)=>setValue(prev=>({...prev, name:event.target.value}))} />
                <InputControl label="Title" placeholder="eg. Frontend Developer" defaultValue={values.title} onChange={(event)=>setValue(prev=>({...prev, title:event.target.value}))} />
            </div>
            <div className={styles.row}>
                <InputControl label="Linked Link" placeholder="Enter LinkedIn Profile Link" defaultValue={values.LinkedIn} onChange={(event)=>setValue(prev=>({...prev, LinkedIn:event.target.value}))} />
                <InputControl label="Github Link" placeholder="Enter Github Profile Link" defaultValue={values.github} onChange={(event)=>setValue(prev=>({...prev, github:event.target.value}))} />
            </div>
            <div className={styles.row}>
                <InputControl label="Email"  placeholder="Enter your Email" defaultValue={values.email} onChange={(event)=>setValue(prev=>({...prev, email:event.target.value}))} />
                <InputControl label="Phone No."  placeholder="Enter your Phone No. " defaultValue={values.phone} onChange={(event)=>setValue(prev=>({...prev, phone:event.target.value}))} />
            </div>
        </div>
    );

    const achievementBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>Enter your Achievement</label>
                <InputControl placeholder="line 1" defaultValue={values.points ? values.points[0] : ""}   onChange={(event) =>handlePointUpdate(event.target.value, 0)}/>
                <InputControl placeholder="line 2" defaultValue={values.points ? values.points[1] : ""}   onChange={(event) =>handlePointUpdate(event.target.value, 1)}/>
                <InputControl placeholder="line 3" defaultValue={values.points ? values.points[2] : ""}   onChange={(event) =>handlePointUpdate(event.target.value, 2)}/>
             </div>   
        </div>
    );

    const skillBody = (
        <div className={styles.detail}>
            <div className={styles.column}>
                <label>Enter Your Skills</label>
                <InputControl
                    placeholder="line 1"
                    defaultValue={values.points ? values.points[0] : ""}
                    onChange={(event) =>handlePointUpdate(event.target.value, 0)}
                />
                <InputControl
                    placeholder="line 2"
                    defaultValue={values.points ? values.points[1] : ""}
                    onChange={(event) =>handlePointUpdate(event.target.value, 1)}
                />
                <InputControl
                    placeholder="line 3"
                    defaultValue={values.points ? values.points[2] : ""}
                    onChange={(event) =>handlePointUpdate(event.target.value, 2)}
                />
                <InputControl
                    placeholder="line 4"
                    defaultValue={values.points ? values.points[3] : ""}
                    onChange={(event) =>handlePointUpdate(event.target.value, 3)}
                />
                <InputControl
                    placeholder="line 5"
                    defaultValue={values.points ? values.points[4] : ""}
                    onChange={(event) =>handlePointUpdate(event.target.value, 4)}
                />
            </div>
        </div>
    );

    const otherBody = (
        <div className={styles.detail}>
               <InputControl label="Other" placeholder="Enter in Brief" defaultValue={values.other} onChange={(event)=>setValue(prev=>({...prev, title:event.target.value}))}  />
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

    useEffect(() => {
        setActiveInformation(information[sections[activeSectionKey]]);
        setSectionTitle(sections[activeSectionKey]);
    }, [activeSectionKey]);

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
               <InputControl label="Title" placeholder="Enter section title" value={sectionTitle} onChange={(event)=> setSectionTitle(event.target.value)}/>

                <div className={styles.chips}>
                
                       {activeInformation?.details?
                       
                        activeInformation.details.map((item,index) => (
                            <div className={styles.chip} key={item.title+index}>
                                <p>{sections[activeSectionKey]} {index+1}</p>
                                <X />
                            </div>
                        )):""}
                                          
                        
               </div>      
               {generateBody()}

               <button onClick={handleSubmission}>Save</button>
            </div>       

        </div>
    );
}

export default Editor
