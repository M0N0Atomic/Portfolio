import React from "react";
import "./TechStack.css";

function TechStack() {
  return (
    <div className="ts_container">
      <p className="ts_title">Tech Stack</p>
      <div className="ts_images_container">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" width="150px" alt="python"/>
          <p>Python</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968267.png" width="150px" alt="html"/>
          <p>HTML</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png" width="150px" alt="css"/>
          <p>CSS</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" width="150px" alt="javascript"/>
          <p>Javascript</p>
        </div>
        <div>
          <img src="https://img.icons8.com/color/344/react-native.png" width="150px" alt="react"/>
          <p>React</p>
        </div>
        <div>
          <img src="https://img.icons8.com/color/344/git.png" width="150px" alt="git"/>
          <p>Git</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" width="150px" alt="github"/>
          <p>GitHub</p>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/25/25719.png" width="150px" alt="linux"/>
          <p>Linux</p>
        </div>
        <div>
          <img src="https://img.icons8.com/color/344/amazon-web-services.png" width="150px" alt="aws"/>
          <p>AWS</p>
        </div>
        <div>
          <img src="https://img.icons8.com/fluency/344/azure-1.png" width="150px" alt="azure"/>
          <p>Azure</p>
        </div>
        <div>
          <img src="https://img.icons8.com/color/344/google-cloud.png" width="150px" alt="gcp"/>
          <p>GCP</p>
        </div>
        <div>
          <img src="https://img.icons8.com/color/344/adobe-creative-cloud--v1.png" width="150px" alt="adobe"/>
          <p>Adobe CC</p>
        </div>
      </div>
    </div>
  );
}
export default TechStack;