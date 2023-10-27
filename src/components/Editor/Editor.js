import React from 'react'
import styles from './Editor.module.css'


function Editor(props) {
    const sections = props.sections;
    
    const[activeSectionKey, setActiveSectionKey] = React.useState(Object.keys(sections)[0]);

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
                
                
            
                
            </div>       

        </div>
    );
}

export default Editor
