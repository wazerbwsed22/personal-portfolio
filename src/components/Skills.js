import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import reactIcon from "../assets/img/react.icon.png";
import nodeIcon from "../assets/img/node.icon.png";
import javaIcon from "../assets/img/javaIcon.png";
import pythonIcon from "../assets/img/pythonIcon.png";
import cIcon from "../assets/img/CIcon.png";
import tailwindIcon from "../assets/img/TailwindIcon.png";
import DartIcon from "../assets/img/Dart.png";
import JsIcon from '../assets/img/js-logo.svg'
import React from "react";  // Ensure React is imported
import GoIcon from '../assets/img/go-logo.png'
import SqlIcon from '../assets/img/sql-logo.png'

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
    },
    mobile2: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
    mobile3: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <table className="skill-table">
                <tbody>
                  <tr>
                    <td><img src={javaIcon} alt="Java" style={{ width: '95px', height: 'auto' }} /><h5>Java</h5></td>
                    <td><img src={nodeIcon} alt="Node" style={{ width: '100px', height: 'auto' }} /><h5>Node</h5></td>
                    <td><img src={reactIcon} alt="React" style={{ width: '100px', height: 'auto' }} /><h5>React</h5></td>
                    <td><img src={tailwindIcon} alt="Tailwind" style={{ width: '100px', height: 'auto' }} /><h5>Tailwind</h5></td>
                    <td><img src={cIcon} alt="C Programming" style={{ width: '80px', height: 'auto' }} /><h5>C Programming</h5></td>


                  </tr>
                  <tr>
                    <td><img src={SqlIcon} alt="SQL" style={{ width: '130px', height: 'auto' }} /><h5>SQL</h5></td>
                    <td><img src={pythonIcon} alt="Python" style={{ width: '150px', height: 'auto' }} /><h5>Python</h5></td>
                    <td><img src={GoIcon} alt="Go" style={{ width: '100px', height: 'auto' }} /><h5>Go</h5></td>
                    <td><img src={JsIcon} alt="Javascript" style={{ width: '100px', height: 'auto' }} /><h5>Javascript</h5></td>
                    <td><img src={DartIcon} alt="Dart" style={{ width: '100px', height: 'auto' }} /><h5>Dart</h5></td>

                    <td></td> {/* Empty cell for alignment */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
  
}
