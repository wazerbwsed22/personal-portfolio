import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';
import Confetti from "./Confetti";

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useRef();
  
  const handleSubmit = (e) => {
    e.preventDefault();
      emailjs.sendForm('service_emk0zld', 'template_6qk8leb', form.current, 'JYekA6RRO_NUM_RsN')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            setIsSubmitted(true);
            alert('Message sent successfully');
      
      e.target.reset();      
        }, (error) => {
          console.log("message NOT SENT");

            console.log(error.text);
        });
       
    };
  

  return (
    <section className="contact" id="connect">
      <Container>
   
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
              
                <form ref={form} onSubmit={handleSubmit}>
                <Row>

                <Col size={12} sm={6} className="px-1">
                <label>Name</label>
                    <input type="text" name="user_name" />
                </Col>
                <Col size={12} sm={6} className="px-1">
                <label>Email</label>
                    <input type="email" name="user_email" />
                </Col>
                <Col size={12} className="px-1">
                <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </Col>
             
                </Row>
                 
                </form>
                {isSubmitted && <Confetti show={isSubmitted}/>}

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}