import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import img from './munezz.png';
import img2 from './munezz4.png'; // Replace with the correct file extension
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import htmlIcon from './html, css, js.png';
import reactIcon from './react.png';
import pythonIcon from './python and flask.png';
import sqlIcon from './sql.png';
import AM from './AM.png';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img, img2];
  const contentRef = useRef(null);

  useEffect(() => {
    const slideshowInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(slideshowInterval);
    };
  }, [slides.length]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    });

    const contentNode = contentRef.current;

    if (contentNode) {
      observer.observe(contentNode);
    }

    return () => {
      if (contentNode) {
        observer.unobserve(contentNode);
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="logo">
        <img src={AM} alt="my logo" />
      </div>
      <h1>
        Hey👋 <br />
        Welcome to my website!
      </h1>
      <h2>About Myself:</h2>
      <div className="image-container">
        <img className="image" src={slides[currentSlide]} alt="" />
      </div>
      <br></br>
      <br></br>
      <div className="content-container" ref={contentRef}>
        <p>
          I'm Alex, a full stack developer studied at <a href="https://www.moringaschool.com">Moringa School</a> and living in Nairobi, Kenya.
          I have a passion and I am proficient in Designing, Creating, Deploying, and maintaining scalable Services in websites and web
          applications. I
        </p>
        <br />
        <h3>Languages I Code With:</h3>
        <br />
        <div className="card-container">
          <div className="card">
            <img src={htmlIcon} alt="HTML" />
            <h5>HTML, CSS, JS</h5>
          </div>
          <div className="card">
            <img src={reactIcon} alt="React" />
            <h5>REACT</h5>
          </div>
          <div className="card">
            <img src={pythonIcon} alt="Python" />
            <h5>PYTHON & FLASK</h5>
          </div>
          <div className="card">
            <img src={sqlIcon} alt="SQL" />
            <h5>SQL</h5>
          </div>
        </div>
        <br />
        <h4>Socials:</h4>
        <ul>
          <li>
            <a href="https://www.instagram.com/__n.e.z.z__/">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </li>
          <li>
            <a href="https://twitter.com/_mu_nezz_">
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
          </li>
          <p>Check out my GitHub account to see my other projects:</p>
          <li>
            <a href="https://github.com/Alex-Munezz">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </li>
        </ul>
        <p>
          If you want to reach out for inquiries and projects, you can reach me through my email :{' '}
          <u>
            <strong>munezz456@gmail.com</strong>
          </u>{' '}
          and I would be happy and glad to be able to make your website bloom.
        </p>
      </div>
    </div>
  );
}

export default App;
