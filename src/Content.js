import React from "react";
import About from "./About";

const Content = () => {

    return(
        <>
        <div className="contentContainer">
            <div className="subcontainer about"><About /></div>
            <div className="subcontainer experience">EXPERIENCE: Skills / Education / internship</div>
            <div className="subcontainer projects">PROJECTS</div>
        </div>
        </>
    );
};

export default Content; 