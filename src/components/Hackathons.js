import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import payGreen from "../assets/img/Paygreen2.png";
import SaveGo from "../assets/img/plane.png";
import StonyHub from "../assets/img/StonyHub.png";
import recallMe from "../assets/img/recallMe.jpg";


export const Hackathons = () => {
  const hackathons = [
    {
      title: "PayGreen [2023]",
      description: "An app to manage finances and provide sustainable choices",
      imgUrl: payGreen,
      extra: "Best design winner @TechTogether New York 2023 hackathon",
      link : 'https://devpost.com/software/pay-green',
      
   
    },
    {
      title: "Save & Go [2023]",
      description: "An app to simplify the travel experience with affordable flights and hotel accommodations.",
      imgUrl: SaveGo,
      extra: "",
      link: 'https://devpost.com/software/save-go',
    },
    {
      title: "StonyHub [2022]",
      description: "Inspired by GrubHub, this app allows food browsing for students to eat on or off campus",
      imgUrl: StonyHub,
      extra: "",
      link: 'https://devpost.com/software/stonyhub',
    },
        {
      title: "RecallMe [2024]",
      description: "Application that helps dementia patients remember their loved ones",
      imgUrl: recallMe,
      extra: "",
      link: 'https://devpost.com/software/recallme-t5hxuz',
    },
  ];

  return (
    <section className="hackathons" id="hackathons">
      <Container>
        <Row>
          <Col size={12}>
          <h2 style={{ marginBottom: '60px' }}>Hackathons</h2>
          <Row className="row">
              {
                hackathons.map((hackathon, index) => {
                  return (
                    <ProjectCard
                      key={index}
                      {...hackathon}
                      />
                  )
                })
              }
          </Row>

            {/* <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  {/* <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>} */}
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}