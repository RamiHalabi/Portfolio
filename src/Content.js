import React from "react";
import About from "./About";
import Experience from "./Experience";

const Content = () => {

    const styles = {
        styledChevron: {
            display: 'grid',
            alignContent: 'center',
            height: '0',
            position: 'relative',
            justifyItems: 'center',
            top: '-5.5rem',
        },
    };

    const handleScroll = () =>{ window.scrollTo(0, 1000);};

    return(
        <>
        <div className="contentContainer">

            <div className="subcontainer about">
                <About />
            </div>
            <div style={styles.styledChevron} onClick={handleScroll}>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
                    <div class="chevron"></div>
            </div> 

            <div className="subcontainer experience">
                <Experience />
            </div>



        </div>
        </>
    );
};

export default Content; 