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

  { name: "SQLAlchemy", icon: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*msfsws06ImMSJYop.jpg"},
  { name: "Postgre", icon: "https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"},
  { name: "MySQL", icon: "https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"},
  { name: "REST API", icon: "https://miro.medium.com/v2/resize:fit:1100/format:webp/0*5Qh4y7P8OtJBqsdr.jpg"},

  // { name: "Microservice Architecture"},
  { name: "Docker", icon: "https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"},
  { name: "Docker-compose", icon: "https://quintagroup.com/cms/technology/Images/docker-compose-button.jpg"},

  { name: "GCP", icon: "https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white"},
  { name: "S3 Bucket | Lambda | CloudWatch", icon: "https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white"},
  { name: "Github | Git version control", icon: "https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" },

];

const tools = [
  {name: "", icon: "https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/PyCharm-000000.svg?&style=for-the-badge&logo=PyCharm&logoColor=white"},
  {name: "", icon: "https://img.shields.io/badge/Bitbucket-0747a6?style=for-the-badge&logo=bitbucket&logoColor=white"}

]

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
                        <h2>Skills</h2>

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
                                        // width: "50px",
                                        marginBottom: "5px", 
                                      }}
                                    />
                                    <div className="hover-overlay">
                                      <p className="hover-text">{skill.name}</p>
                                    </div>
                                    {/* <Card.Text>{skill.name}</Card.Text> */}
                                  </Card.Body>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </div>

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
                                <Card className="custom-tool-card ">
                                  <Card.Body>
                                    <Card.Img
                                      variant="top"
                                      src={tool.icon}
                                      alt={tool.name}
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

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
