import React from "react";
import Skills from './Skills'

const Experience = () =>{

    const styles = {
        skills: {
            display: "grid",
            alignItems: "center",
            justifyContent: "center",   
        },
        projects: {
            display: "grid",
            alignItems: "center",
            justifyContent: "center", 
        }, 
    };

    return(
    <>

<div className="exp">


    <div style={styles.skills}>
        <Skills />
    </div>


    <div style={styles.projects}>
    Relevant Exp.
    </div>

    </div>
    </>);
}

export default Experience;