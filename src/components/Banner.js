import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from "../assets/resume/Utsha_paul_2024.pdf";
import React from "react";  // Ensure React is imported

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Student", "Software Engineer", "Web Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  useEffect(() => { //b/c it's in use effect it might have the issue of infinitely running 
    let iterations = 0;
    const heading = document.querySelector("h7");
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if (heading) {
      heading.onmouseover = (event) => {
       const interval =  setInterval(() => {
          event.target.innerText = event.target.innerText.split("")
          .map(letters[Math.floor(Math.random() * 26)])
          .join("");

          if(iterations >= 9) clearInterval(interval);
          iterations += 1;
          console.log("YESYING");
        }, 30);

      
      };
    }
  }, []); 


  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  function openPDF(){
    window.open(resume);
  }
  

    return (
      <section className="banner" id="home">
        <Container>
          <div className="portfolio-container">
          <span className="tagline">Welcome to my Portfolio</span>
            <h7>Hello, I'm Utsha.</h7>
            <p>I graduated from Stony Brook University 2025 with a major in Computer Science - specialization in Artificial Intelligence and Data Science. Currently, I'm an <strong>Associate Software Engineer at RVO Health </strong> </p>
            <button onClick={openPDF}>Resume <ArrowRightCircle size={45} /></button>
        </div>
        </Container>
      </section>
    )
  
}