import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import img from './munezz.png';
import img2 from './munezz4.png'; // Replace with the correct file extension
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import htmlIcon from './html, css, js.png';
import reactIcon from './react.png';
import pythonIcon from './python and flask.png';
import sqlIcon from './sql.png';
import tailwind from './tailwind.png';
import mysql from './mysql.png';
import PostgreSQL from './postgre.png';
import AM from './AM.png';
import myCV from './My-CV.pdf';
import download from './download.png';
import send from './send.png';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [img, img2];
  const contentRef = useRef(null);

  const redirectToWhatsApp = () => {
    window.open("https://api.whatsapp.com/send?phone=254768453442&text=Hello%20Alex....", '_blank');
};
  const redirectToInsta = () => {
  window.open("https://instagram.com/__n.e.z.z__/", '_blank');
};
  const redirectToGithub = () => {
window.open("https://api.whatsapp.com/send?phone=254700148521&text=Hello%20David....", '_blank');
};
const redirectToLinkedIn = () => {
  window.open("https://www.linkedin.com/in/alex-munene-289729260/", '_blank');
  };
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = myCV; // Update with the correct path to your CV
    link.download = 'AlexM-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <div className="flex justify-center items-center h-screen logo">
        <img src={AM} alt="my logo" className='logo' />
      </div>
      <div className="typing-container">
    <h1 className="typing-text">
      Hey👋
      !!Welcome to my portfolio!!
    </h1>
  </div><br />
      <h2 className='about text-3xl'>About Myself:</h2><br />
      <div className="flex justify-center items-center">
        <img className="w-30 h-80" src={slides[currentSlide]} alt="" />
      </div>
      <br></br>
      <br></br>
      <div className="content-container" ref={contentRef}>
        <p className='ml-2'>
          I'm Alex Munene Murithi, a passionate Full Stack Software Engineer
           with expertise in building scalable and user friendly web applications. <br />
           I have over 1 year of experience in developing dynamic web applications and services with strong foundation in both front-end and back-end
          technologies that i gained while i was in  <a href="https://www.moringaschool.com">Moringa School  </a>  
          for my six month bootcamp that started in February 2023 - August 2023, then i graduated in November 2023.<br />
          I have also worked on a few personal projects and for other clients as well which have equipped
          me with strong problem solving skills, and adept coding skills.
         <br /> I am always eager to learn and adopt new tools, Languages and frameworks.
          I have a passion for developing and I am proficient in Designing, Creating, Deploying, and maintaining scalable Services in websites and web
          applications.<br />

        </p>
        <br /><br />
        <h3 className='text-2xl font-bold lang'>Languages and Frameworks I Code With:</h3>
        <br />
        <div className="lg:grid grid-cols-2 xl:grid-cols-4 ml-14 card-container">
          <div className="card">
            <img src={htmlIcon} alt="HTML" />
            <h5>HTML, CSS, JS</h5>
          </div>
          <div className="card">
            <img src={tailwind} alt="SQL" />
            <h5>TailWind CSS</h5>
          </div>
          <div className="card">
            <img src={reactIcon} alt="React" />
            <h5>REACT</h5>
          </div>
          <div className="card">
            <img src={pythonIcon} alt="Python" />
            <h5>PYTHON & FLASK</h5>
          </div>
          </div><br /><br />
          <h2 className='lang font-bold text-3xl'>Database Management:</h2><br />
          <div className='lg:grid grid-cols-3 xl:grid-cols-3 card-container'>
          <div className="ml-14 card">
            <img src={sqlIcon} alt="SQL" />
            <h5>SQL</h5>
          </div>
          <div className="ml-14 card">
            <img src={mysql} alt="SQL" />
            <h5>My SQL</h5>
          </div>
          <div className="ml-14 card">
            <img src={PostgreSQL} alt="SQL" />
            <h5> PostgreSQL</h5>
          </div>
        </div>
        <br /><br /><br /><br />
        <h4 className='flex justify-center text-4xl font-bold'>Socials:</h4><br />
        <ul>
          <div className='lg:grid grid-cols-3 xl:grid-cols-3 ml-40 social1'>
          <li>
            <button className='button1' onClick={redirectToInsta}>
              <FontAwesomeIcon icon={faInstagram} /> 
            </button>
          </li>
          <li>
            <button className='button2' onClick={redirectToWhatsApp}>
             <FontAwesomeIcon icon={faWhatsapp} /> 
            </button>
          </li>
          <li>
            <button className='button4' onClick={redirectToLinkedIn}>
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </li></div><br /><br />
          <p className='ml-4'>Check out my GitHub account to see my other projects:</p>
          <li>
            <button className='button3 ml-6' onClick={redirectToGithub}>
              <FontAwesomeIcon icon={faGithub} /> 
            </button>
          </li>
        </ul>
       
        <div className="container download-cv ">
        <p className='formp ml-4'>Download my CV for more information and reference: </p><br />
        <button className="cv ml-8" onClick={downloadCV}>
          <img src={download} className='ml-3' alt='' />
          </button>
      </div>
      <p className='ml-4 formp'>
          If you want to reach out for inquiries and projects, 
          please fill in and submit the form below and I would be happy and glad to be 
          able to make your website bloom.
        </p><br /><br />
      <div className="form">
        <h2 className='text-2xl font-bold'>Contact Me</h2>
        <form action="https://formspree.io/f/manwwonz" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="_replyto" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" rows="6" required></textarea>
          <button type="submit">
          <img src={send} alt=''/>
          </button>
        </form>
      </div>
    </div>
      </div>
  );
}


export default App;
