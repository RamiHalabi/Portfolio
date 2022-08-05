import React from "react";
import NavBar from "./NavBar";


const Header = () => {
    const name = "Rami Halabi"

    return(
        <>
            <div className="name">{name}</div>
            <div className="navbar"> <NavBar /> </div>
        </>
    );
};

export default Header; 