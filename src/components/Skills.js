import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
// import Divider from '@material-ui/core/Divider';

import '../App.css'; 

import React from "react";
import { Card, Col, Row } from "react-bootstrap";


const skills = [
  { name: "Python", icon: "https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"},
  { name: "Flask", icon: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
  { name: "Django", icon: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green"},
  { name: "FastAPI", icon: "https://img.shields.io/badge/fastapi-109989?style=for-the-badge&logo=FASTAPI&logoColor=white"},
  { name: "GraohQL", icon: "https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white"},
  { name: "PyTest", icon: "https://ggdx.co.uk/media/images/pytest.2e16d0ba.fill-744x450.png"},

  { name: "SQLAlchemy", icon: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*msfsws06ImMSJYop.jpg"},
  { name: "Postgre", icon: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"},
  { name: "MySQL", icon: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"},
  { name: "REST API", icon: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*5Qh4y7P8OtJBqsdr.jpg"},
  {name: "RabbitMQ", icon: "https://img.shields.io/badge/rabbitmq-%23FF6600.svg?&style=for-the-badge&logo=rabbitmq&logoColor=white"},

  // { name: "Microservice Architecture"},
  { name: "Docker", icon: "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"},
  { name: "Docker-compose", icon: "https://quintagroup.com/cms/technology/Images/docker-compose-button.jpg"},

  { name: "GCP", icon: "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"},
  { name: "S3 Bucket | Lambda | CloudWatch", icon: "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"},
  { name: "Github | Git version control", icon: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" },

];

const communication_mediums = [
  {name: "Slack", icon: "https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white"},
  {name: "Zoom", icon: "https://img.shields.io/badge/Zoom-2D8CFF?style=for-the-badge&logo=zoom&logoColor=white"},
  {name: "Skype", icon: "https://img.shields.io/badge/Skype-00AFF0?style=for-the-badge&logo=skype&logoColor=white"},

];

const tools = [
  {name: "", icon: "https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/Bitbucket-0747a6?style=for-the-badge&logo=bitbucket&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/Jupyter-F37626.svg?&style=for-the-badge&logo=Jupyter&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white"}
];

const soft_skills = [
  {name: "Documentataion", icon: ""},
  {name: "Communication", icon: ""},
  {name: "Team Player", icon: ""},
  {name: "Adaptable", icon: ""}
];


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
  const lineStyle = { borderTop: "2px solid #6c757d" }; // Custom border

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Professional Toolkit 🛠️</h2>
                    {/* TECH SKILLS */}
                        <div className="d-flex align-items-center my-4">
                          <hr style={lineStyle} className="flex-grow-1" />
                          <span className="mx-3" style={{ fontSize:"25px",fontWeight: "bold", color: "gray" }}>
                              {"Technical Skills"}
                          </span>
                          <hr style={lineStyle} className="flex-grow-1" />
                        </div>
                        <div className="container mt-1">
                          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                            {skills.map((skill, index) => (
                              <Col key={index}>

                                <Card className="custom-skill-card">
                                  <Card.Body>
                                    <Card.Img
                                      variant="top"
                                      src={skill.icon}
                                      alt={skill.name}
                                      style={{
                                        height: "65px", 
                                        marginBottom: "5px", 
                                      }}
                                    />
                                    <div className="hover-overlay">
                                      <p className="hover-text">{skill.name}</p>
                                    </div>
                       
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </div>

                  {/* TOOLS */}
                        <div className="d-flex align-items-center my-4">
                          <hr style={lineStyle} className="flex-grow-1" />
                          <span className="mx-3" style={{ fontSize:"25px",fontWeight: "bold", color: "gray" }}>
                              {"Tools"}
                          </span>
                          <hr style={lineStyle} className="flex-grow-1" />
                        </div>
                        <div>
                          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                            {tools.map((tool, index) => (
                              <Col key={index}>
                                <Card className="custom-tool-card">
                                  <Card.Body>
                                    <Card.Img
                                      variant="top"
                                      src={tool.icon}
                                      alt={tool.name}
                                      style={{
                                        height: "65px", 
                                        marginBottom: "5px", 
                                      }}
                                    />
                                    <div className="hover-overlay">
                                      <p className="hover-text">{tool.name}</p>
                                    </div>
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </div>
                  {/* SOFT SKILLS */}
                        <div className="d-flex align-items-center my-4">
                          <hr style={lineStyle} className="flex-grow-1" />
                          <span className="mx-3" style={{ fontSize:"25px",fontWeight: "bold", color: "gray" }}>
                              {"Soft Skills"}
                          </span>
                          <hr style={lineStyle} className="flex-grow-1" />
                        </div>
                        <div>
                          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                            {soft_skills.map((soft_skill, index) => (
                              <Col key={index}>
                                <Card className="custom-text-card">
                                  <Card.Body>
                                    <Card.Text>{soft_skill.name}</Card.Text> 
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </div>

                  {/* In progress*/}

                  {/* Communication mediums */}
                        <div className="d-flex align-items-center my-4">
                          <hr style={lineStyle} className="flex-grow-1" />
                          <span className="mx-3" style={{ fontSize:"25px",fontWeight: "bold", color: "gray" }}>
                              {"Communication Mediums"}
                          </span>
                          <hr style={lineStyle} className="flex-grow-1" />
                        </div>
                        <div>
                          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                            {communication_mediums.map((communication_medium, index) => (
                              <Col key={index}>
                                <Card className="custom-skill-card">
                                  <Card.Body>
                                    <Card.Img
                                      variant="top"
                                      src={communication_medium.icon}
                                      alt={communication_medium.name}
                                      style={{
                                        height: "65px", 
                                        marginBottom: "5px", 
                                      }}
                                    /> 
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
