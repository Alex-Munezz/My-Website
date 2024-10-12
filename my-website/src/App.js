import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import img from './images/munezz.png';
import img2 from './images/munezz4.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import htmlIcon from './images/html, css, js.png';
import reactIcon from './images/react.png';
import pythonIcon from './images/python and flask.png';
import sqlIcon from './images/sql.png';
import tailwind from './images/tailwind.png';
import mysql from './images/mysql.png';
import PostgreSQL from './images/postgre.png';
import myCV from './Alex-Munene-CV.pdf';
import download from './images/download.png';
import send from './images/send.png';
import bgImage from './images/munezz1.png';
import Navbar from './Navbar';
import Projects from './Projects';

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
            <Navbar />

{/* Hero Section */}
<div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center" 
  style={{ backgroundImage: `url(${bgImage})` }}>
  <div className="absolute inset-0 bg-black opacity-50 blur-sm"></div>
  <div className="relative z-10 text-center">
    <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
      Alex Murithi
    </h3>
  </div>
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
  Hey there! I'm Alex Munene Murithi, your go-to Full Stack Software Engineer with a love for crafting both the front and back ends of the digital world. 🎨💻 
  I take your Figma designs and wildest ideas, and turn them into sleek, scalable, and downright awesome web applications. 🚀✨ <br /><br />
  With over a year of experience under my belt, I’ve become fluent in the language of the web. I’m talking about everything from dynamic interfaces to robust services — all thanks to my six-month, adrenaline-fueled bootcamp at <a href="https://www.moringaschool.com">Moringa School</a>! February 2023 to August 2023, those months were a whirlwind of coding marathons and mind-blowing discoveries. 🎓 And guess what? I officially graduated in November 2023. 🎉<br /><br />
  
  I’ve also been busy building cool projects for myself and clients, which has sharpened my problem-solving ninja skills 🥷 and coding chops. Whether it's solving complex challenges or writing elegant code, I’m always ready to tackle something new. <br /><br />
  
  I’m a lifelong learner, constantly on the lookout for new tools, languages, and frameworks to add to my arsenal. I’m all about designing, creating, deploying, and maintaining web apps that don’t just look good but perform like a dream. Let’s bring your ideas to life, one line of code at a time! 😎💡
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
        <Projects />
        
        <br /><br /><br /><br />
        <h4 className='flex justify-center text-4xl font-bold'>Socials:</h4><br />
        <ul>
          <div className='lg:grid grid-cols-3 xl:grid-cols-3 ml-40 social1'>
  <li>
    <button className="social-btn social-btn1" onClick={redirectToInsta}>
      <FontAwesomeIcon icon={faInstagram} className="social-btn__icon" />
      <span className="social-btn__text"><FontAwesomeIcon icon={faInstagram}/> Instagram</span>
    </button>
  </li>
  <li>
    <button className="social-btn social-btn2" onClick={redirectToWhatsApp}>
      <FontAwesomeIcon icon={faWhatsapp} className="social-btn__icon" />
      <span className="social-btn__text"> <FontAwesomeIcon icon={faWhatsapp}/> WhatsApp</span>
    </button>
  </li>
  <li>
    <button className="button2 social-btn social-btn4" onClick={redirectToLinkedIn}>
      <FontAwesomeIcon icon={faLinkedin} className="social-btn__icon" />
      <span className="social-btn__text"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</span>
    </button>
  </li>
  </div>
  </ul>

          <br /><br />
          <p className='ml-4'>Check out my GitHub account to see my other projects:</p>
        <ul>  <li>
          <button className="social-btn social-btn3 ml-6 button3" onClick={redirectToGithub}>
      <FontAwesomeIcon icon={faGithub} className="social-btn__icon" />
      <span className="social-btn__text"><FontAwesomeIcon icon={faGithub}/> GitHub</span>
    </button>
          </li>
          </ul>
       
        <div className="container download-cv ">
        <p className='formp ml-4'>Download my CV for more information and reference: </p><br />
        <button className="cv ml-8 relative" onClick={downloadCV}>
  <img src={download} className="cv__image ml-1" alt="Download Icon" />
  <span className="cv__text">Download CV</span>
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
          <button type="submit" class="button">
    <img src={send} alt="Send Icon" class="button__image" />
    <span class="button__text">Send Your Message 😊</span>
  </button>
        </form>
      </div>
    </div>
      </div>
  );
}


export default App;
