import React from "react";
import "./ExperienceBox.css"

function ExperienceBox({
    title, 
    stat1,
    stat2,
    stat3,
    stat4,
    stat5,
}) {

    const arrow = "> "

    return (
        <div className="ex_box_container">
            <p className="ex_box_title">{title}</p>
            <div className="ex_box_statements">
                <p>{arrow} {stat1}</p>
                <p>{arrow} {stat2}</p>
                <p>{arrow} {stat3}</p>
                <p>{arrow} {stat4}</p>
                <p>{arrow} {stat5}</p>
            </div>
            <p className="ex_box_tech_used">Tech Used</p>
        </div>
    )
}
export default ExperienceBox;