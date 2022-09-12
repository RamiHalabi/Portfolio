import React from "react";
import About from "./About";
import Experience from "./Experience";

const Content = () => {

    return(
        <>
        <div className="contentContainer">
            <div className="subcontainer about"><About /></div>
            <div className="subcontainer experience"><Experience /></div>
        </div>
        </>
    );
};

export default Content; 