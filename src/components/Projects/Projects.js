import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Turvis - Permainan Populer Anak Indonesia"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam erat, porttitor sed magna ac, semper mollis ex. Proin lectus nisi, porttitor eget urna sed, porttitor maximus nisl."
              demoLink="https://interaktif.kompas.id/baca/permainan-populer-anak-indonesia/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Turvis - Siap Siaga Hadapi Bencana Gempa"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam erat, porttitor sed magna ac, semper mollis ex. Proin lectus nisi, porttitor eget urna sed, porttitor maximus nisl."
              demoLink="https://interaktif.kompas.id/baca/siap-siaga-hadapi-bencana-gempa/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Turvis - Kisah Keluarga Imigran Tahanan PBB"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam erat, porttitor sed magna ac, semper mollis ex. Proin lectus nisi, porttitor eget urna sed, porttitor maximus nisl."
              demoLink="https://interaktif.kompas.id/baca/siap-siaga-hadapi-bencana-gempa/"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Gompu - Automation Testing Using 3 Test Automation Framework"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam erat, porttitor sed magna ac, semper mollis ex. Proin lectus nisi, porttitor eget urna sed, porttitor maximus nisl."
              ghLink="https://github.com/stars/shidqiadiatma/lists/gompu-automation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
