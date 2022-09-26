import React from "react";
import './Navbar.css';
import $ from 'jquery';

function Navbar() {

    const name = "<AY/>"

    const about = () => {
        $('html,body').animate({
            scrollTop: $(".navbar_container").offset().top
        },
            'slow');
    };

    const tools = () => {
        $('html,body').animate({
            scrollTop: $(".ts_container").offset().top
        },
            'slow');
    };

    const experience = () => {
        $('html,body').animate({
            scrollTop: $(".ex_container").offset().top
        },
            'slow');
    };

    const project = () => {
        $('html,body').animate({
            scrollTop: $(".projects").offset().top
        },
            'slow');
    };

    return(
        <div className="navbar_container">
            <div className="navbar_left">
                <p>{name}</p>
            </div>
            <div className="navbar_right">
                <a onClick={about}>About</a>
                <a onClick={tools}>Tools</a>
                <a onClick={experience}>Experience</a>
                <a onClick={project}>Projects</a>
                <a href="http://bit.do/aniket-resume" download="Aniket_Yadav_Resume.pdf">Resume</a>
            </div>
        </div>
    )
}
export default Navbar;