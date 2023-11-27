import React from "react";
import styles from "./Body.module.css";
import ReactToPrint from "react-to-print";
import { ArrowDown } from "react-feather";
import Editor from "../Editor/Editor";
import { useState ,useRef} from "react";
import Resume from "../Resume/Resume";

function Body() {
  const colors = ["#F03FF3", "#228B22", "#0bc5ea", "#5A5A5A", "#000000"];
  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    projects: "Projects",
    education: "Education",
    achievements: "Achievements",
    skills: "Skills",
    other: "Other",
  };
  const resumeRef = useRef();
  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {}, //detail is an object basic info has one information
    },

    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [], //details is an array work experience has multiple information and similar for other sections
    },

    [sections.projects]: {
      id: sections.projects,
      sectionTitle: sections.projects,
      details: [],
    },

    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },

    [sections.achievements]: {
      id: sections.achievements,
      sectionTitle: sections.achievements,
      points: [],
    },

    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [],
    },

    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
            key={item}
            style={{ backgroundColor: item }}
            className={`${styles.color} ${
              activeColor === item ? styles.active : ""
            }`}
            onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button style={{marginRight:'0px'}}>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className={styles.main}>
        <Editor
         sections={sections} 
         information={resumeInformation} 
         setInformation={setResumeInformation}
         />
         <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>
    </div>
  );
}

export default Body;
