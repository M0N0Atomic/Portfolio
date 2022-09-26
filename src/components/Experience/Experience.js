import React from "react";
import "./Experience.css";
import ExperienceBox from "./ExperienceBox";

function Experience() {
  return (
    <div className="ex_container">
      <p className="ex_title">Experience</p>
      <div className="ex_boxes_container">
      <ExperienceBox
        title="Adani Ports and SEZ Ltd."
        stat1="Worked as an Executive in the Planning Department"
        stat2="Remote monitoring of all the processes of a container terminal in real-time to ensure a smooth workflow and resolve any problems that may
        occur"
        stat3="Anticipating the need for equipment, labor, and other resources and deploying them in such a way to ensure optimal utilization and minimum dwell time"
        stat4="Analyzing the inventory for proper allocation of containers for efficient inventory management"
        stat5="Preparing proper plan for the job through the data recieved from the planning department"
      />
      <ExperienceBox
        title="TEDxNRTI"
        stat1="Volunteered in the organisation of TEDxNRTI as Head of the Design Team"
        stat2="Developed a online ticketing system for sales of ticket and event marketing"
        stat3="Provided the check-in staff with an app that verified the ticekts on the day of the event"
        stat4="Maintained the website operation for hassle-free and fast delivery of tickets"
        stat5="Created and edited videos and poster for the promotion of event, collaborated and coordinated with the social media, finance team
           for the smooth operations of the event"
      />
      <ExperienceBox
        title="MRVCL"
        stat1="Completed internship at Mumbai Rail Vikas Corporation Ltd."
        stat2="Experienced the work environment, organisational structure and process flow"
        stat3="Departments: IT, Telecommunications, Finance, Inventory and Stores Management, Standardization"
        stat4="Case Study - Supply chain management and Risk Management of Panvel-Karjat Double Line Suburban Corridor and Virar-
        Dahanu Quadrupling Project"
        stat5="Researched the feasibility of Automated Highway systems and Transit Elevated Buses in the Mumbai metropolitan city"
      />
      <ExperienceBox 
        title="Indian Railways"
        stat1="Completed internship at Indian Railways - Mumbai Division (Central Railways)"
        stat2="Researched the feasibility of COVID-19 automation initiatives and innovation by the Mumbai Division (CR) in the Post-Covid
        Period by integrating the technological and social understanding"
        stat3="Proposed design and framework changes to the technologies built for COVID-19 period to maintain their significance Post COVID-19"
        stat4="Technologies worked upon: Drones, Portable Public Address System, Robot Rakshak, UV based currency and file sanitizer and Check-in Master app"
        stat5="Guided and Mentored by Shalabh Goel, Division Railway Manager, Mumbai-Central Railways"
      />
      </div>
      
    </div>
  );
}
export default Experience;