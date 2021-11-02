import React from "react";
import "./navbar.css"

class Navbar extends React.Component{

    render(){

        return(

            <div className="navbar">
                <p className="logo">Brand </p>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
            </div>

        )
    }
    }

    export default Navbar;