import React from "react";
import ProjectBox from "./ProjectBox/ProjectBox";
import "./Projects.css";

function Projects() {
  const projectsData = [
    {
      image: "https://files.catbox.moe/izoo4p.png",
      title: "Aniket Portfolio",
      sentences: [
        "> Built using Reactjs",
        "> Tells about myself, my experiences and projects",
        "> Hosted at",
        "> Have a look and feel free to contact anytime",
        "> Technologies - Reactjs, JavaScript, HTML, CSS",
      ],
      link: "https://google.com",
    },
    {
      image: "https://files.catbox.moe/bub85d.png",
      title: "TEDxNRTI",
      sentences: [
        "> Based on Alf.io",
        "> Website for the event of TEDxNRTI",
        "> Hosted at Heroku",
        "> Used for marketing, ticket sales and distribution",
        "> Technologies - Java, Heroku, SMTP",
      ],
      link: "https://tedxnrti.herokuapp.com/",
    },
    {
      image: "https://files.catbox.moe/6t8ugf.png",
      title: "PTPimgUploader",
      sentences: [
        "> Written in Python",
        "> Automation script for capturing screenshots and uploading",
        "> CLI interface",
        "> Fast and light, works on large videos too",
        "> Technologies - Python, FFMpeg, GitHub",
      ],
      link: "https://github.com/M0N0Atomic/ptpimg-uploader",
    },
  ];

  return (
    <div className="projects">
      <p className="projects_title">Projects</p>
      <div className="projects_box_container">
        {projectsData.map((value, key) => (
          <ProjectBox
            title={value.title}
            image={value.image}
            sentences={value.sentences}
            link={value.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;