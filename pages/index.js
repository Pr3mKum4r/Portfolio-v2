import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import dp from '../public/profilepic1.jpeg';
import terrachat from '../public/terrachat.png';
import neuroassist from '../public/neuroassist.png'
import memomate from '../public/memomate.png';
import skilltrekker from '../public/SkillTrekker.png';
import weatherapp from '../public/weatherapp.jpg';
import Switcher from './Switcher.js';
import { useState, useEffect } from 'react';
import html5 from '../public/html.png';
import css3 from '../public/css.png';
import js from '../public/js.png';
import react from '../public/react.png';
import tailwind from '../public/tailwind.png';
import mui from '../public/mui.png';
import nodejs from '../public/nodejs.png';
import expressjs from '../public/expressjs.png';
import mongodb from '../public/mongodb.png';
import firebase from '../public/firebase.png';
import flask from '../public/flask.png';
import reactnative from '../public/react-native-1.svg';
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to check when to show/hide the button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // Show the button when the user has scrolled down 300 pixels
        setIsVisible(true);
      } else {
        // Hide the button if the user is at the top of the page
        setIsVisible(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const timeLineDataSet = [
    {
      id: 1,
      date: "Dec 2023 - Current",
      heading: "Vicuna Kouture",
      subHeading: "Technical Head",
      description: "Leading the technical team to develop cutting edge technologies"
    },
    {
      id: 2,
      date: "Aug 2023 - Nov 2023",
      heading: "Clinigo",
      subHeading: "Backend Developer Intern",
      description: "Working on developing a system to convert medical data to NRCES compliant FHIR format."
    },
    {
      id: 3,
      date: "Aug 2023 - Sep 2023",
      heading: "Valsco Technology",
      subHeading: "Frontend Developer Intern",
      description: "Leading the team of Frontend Interns, developing frontend for clients using ReactJs, TailwindCSS, MaterialUI"
    },
    {
      id: 4,
      date: "Jan 2023",
      heading: "VitrendzTech",
      subHeading: "Fullstack Web Developer",
      description: "Worked on Projects involving Reactjs, MaterialUI, ExpressJs, NodeJs, MongoDB, Firebase, Echarts."
    }
  ];

  const educationDataSet = [
    {
      id: 4,
      date: "Sep 2021 - Jul 2025",
      heading: "Vellore Institute Of Technology, Vellore Campus",
      subHeading: "Grade: 9.55",
      description: "Pursuing Bachelors of Technology in Information Technology."
    }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='px-6 bg-cyan-100 dark:bg-gray-800 md:px-16 lg:px-32'>
        <section className='mb-14'>
          <nav className='flex pt-10 mb-12 justify-between'>
            <h1 className='font-concertone text-xl dark:text-white'>Pr3mKum4r</h1>
            <ul className='flex items-center'>
              <li><a href="/Resume.pdf" download="Resume" className='bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-md text-white'>Resume</a></li>
            </ul>
          </nav>
          <div className='flex justify-end pb-10 px-2'><Switcher onToggle={toggleDarkMode} checked={darkMode} /></div>
          <div className='relative mx-auto rounded-full w-60 h-60 md:w-72 md:h-72'>
            <Image src={dp} className='rounded-full' />
          </div>
          <div className='text-center p-1'>
            <h2 className='font-robotoslab text-4xl py-3 text-teal-600 font-medium md:text-5xl'><Typewriter
              options={{
                strings: ['Prem Kumar Singh'],
                autoStart: true,
                loop: true,
                pauseFor: 1500
              }}
            /></h2>
            <h3 className='font-roboto text-2xl py-3 md:text-3xl dark:text-white'>Fullstack Web Developer</h3>
            <p className='font-josefin font-normal text-md py-5 leading-8 text-gray-800 dark:text-gray-400 md:text-xl max-w-xl mx-auto'>I'm a passionate MERN stack web developer. Explore my portfolio to see my latest projects and get in touch to discuss collaboration opportunities.</p>
          </div>
          <div className='text-3xl md:text-4xl py-5 flex justify-center gap-12'>
            <a href='https://www.linkedin.com/in/pr3mkum4r'><FontAwesomeIcon icon={faLinkedin} style={{ color: "#0072b1", }} /></a>
            <a href='https://www.github.com/pr3mkum4r'><FontAwesomeIcon icon={faGithub} style={{ color: "#171515", }} /></a>
            <a href='https://www.youtube.com/@gamerslife4107'><FontAwesomeIcon icon={faYoutube} style={{ color: "#f00", }} /></a>
          </div>
        </section>

        <section className='mb-14'>
          <div>
            <h3 className='font-poppins font-medium text-teal-900 text-2xl py-2 lg:px-9 dark:text-white'>Skills</h3>
            <p className='font-josefin lg:text-lg text-md py-2 leading-8 lg:px-9 text-gray-800 dark:text-gray-400'>These are the technologies I've worked with</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-8'>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'>
                <Image src={html5} alt='html5' className='w-20 mx-auto mt-2 h-16 w-16' />
                <p className='font-poppins text-orange-500 py-1'>HTML</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-400'>
                <Image src={css3} alt='css3' className='w-20 mx-auto' />
                <p className='font-poppins text-blue-400 py-1'>CSS</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-400'>
                <Image src={js} alt='js' className='w-20 mx-auto mt-2 h-16 w-16' />
                <p className='font-poppins text-yellow-400 py-1'>Javascript</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400'>
                <Image src={react} alt='react' className='w-20 mx-auto my-1' />
                <p className='font-poppins text-sky-400 py-1'>ReactJs</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-cyan-500'>
                <Image src={tailwind} alt='tailwind' className='w-20 mx-auto my-5' />
                <p className='font-poppins text-cyan-500 py-1'>TailwindCSS</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <Image src={mui} alt='mui' className='w-20 mx-auto my-1' />
                <p className='font-poppins text-blue-600 py-1'>MaterialUI</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-lime-700'>
                <Image src={nodejs} alt='nodejs' className='w-20 mx-auto' />
                <p className='font-poppins text-lime-700 py-1'>NodeJs</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500'>
                <Image src={expressjs} alt='expressjs' className='w-20 mx-auto' />
                <p className='font-poppins text-gray-500 py-1'>ExpressJs</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-600'>
                <Image src={mongodb} alt='mongodb' className='w-20 mx-auto' />
                <p className='font-poppins text-green-600 py-1'>MongoDB</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-600'>
                <Image src={firebase} alt='firebase' className='w-20 mx-auto' />
                <p className='font-poppins text-yellow-600 py-1'>Firebase</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black'>
                <Image src={flask} alt='flask' className='w-20 mx-auto' />
                <p className='font-poppins text-black py-1'>Flask</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400'>
                <Image src={reactnative} alt='flask' className='w-32 mb-2 mx-auto' />
                {/* <p className='font-poppins text-sky-400 py-1'>React Native</p> */}
              </div>
            </div>
          </div>
        </section>

        <section className='mb-14'>
          <div>
            <h3 className='font-poppins font-medium text-teal-900 text-2xl py-2 lg:px-9 dark:text-white'>Recent Projects</h3>
            <p className='font-josefin lg:text-lg text-md py-2 leading-8 lg:px-9 text-gray-800 dark:text-gray-400'>Explore My Latest Portfolio Additions</p>
          </div>
          <div className='flex flex-wrap gap-10 md:gap-5 justify-center'>
            {/* Card */}
            <div data-aos="fade-up" data-aos-duration="800">
              <div className="hover:scale-105 duration-300 shadow-lg dark:shadow-slate-600 shadow-slate-800 max-w-sm md:max-w-xs mx-2 md:mx-1 my-2 py-1 md:my-5 lg:my-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-cyan-500 dark:border-gray-700">
                <a href="https://neuroassist.vercel.app/" target='__blank'>
                  <Image className="rounded-t-lg" src={neuroassist} alt="memomate" />
                </a>
                <div className="p-5">
                  <a href="https://neuroassist.vercel.app/">
                    <h5 className="font-robotoslab mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-1000">NeuroAssist: Neural Disorder Diagnosis</h5>
                  </a>
                  <p className="font-poppins mb-3 font-normal text-gray-700 dark:text-gray-800">NeuroAssist, leverages GenAI with ReactJS, TailwindCSS, Flask, and Intel ML libraries, enables early diagnosis of neural diseases in children like ADHD, OCD, and Dyslexia.</p>
                  <a href="https://neuroassist.vercel.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none dark:bg-cyan-700 dark:hover:bg-cyan-800">
                    Checkout
                    <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className="hover:scale-105 duration-300 shadow-lg dark:shadow-slate-600 shadow-slate-800 max-w-sm md:max-w-xs mx-2 md:mx-1 my-2 py-1 md:my-5 lg:my-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-cyan-500 dark:border-gray-700">
                <a href="https://terrachat.vercel.app/" target='__blank'>
                  <Image className="rounded-t-lg" src={terrachat} alt="memomate" />
                </a>
                <div className="p-5">
                  <a href="https://terrachat.vercel.app/">
                    <h5 className="font-robotoslab mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-1000">TerraChar: Multilingual Chat App</h5>
                  </a>
                  <p className="font-poppins mb-3 font-normal text-gray-700 dark:text-gray-800">TerraChat, built with ReactJS, TailwindCSS, and Azure Cognitive AI, uses an ExpressJS and Socket.IO backend with MongoDB and Prisma for real-time multilingual communication.</p>
                  <a href="https://terrachat.vercel.app/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none dark:bg-cyan-700 dark:hover:bg-cyan-800">
                    Checkout
                    <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className="hover:scale-105 duration-300 shadow-lg dark:shadow-slate-600 shadow-slate-800 max-w-sm md:max-w-xs mx-2 md:mx-1 my-2 py-1 md:my-5 lg:my-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-cyan-500 dark:border-gray-700">
                <a href="https://skill-trekker.vercel.app">
                  <Image className="rounded-t-lg" src={skilltrekker} alt="skilltrekker" />
                </a>
                <div className="p-5">
                  <a href="https://skill-trekker.vercel.app">
                    <h5 className="font-robotoslab mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-1000">SkillTrekker: A Roadmap webapp for tech domains</h5>
                  </a>
                  <p className="font-poppins mb-3 font-normal text-gray-700 dark:text-gray-800">Developed a web app with ReactJS, MaterialUI, and Firebase, providing technical roadmaps, storing user data with Firestore, and visualizing progress with ECharts.</p>
                  <a href="https://skill-trekker.vercel.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none dark:bg-cyan-700 dark:hover:bg-cyan-800">
                    Checkout
                    <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className="hover:scale-105 duration-300 shadow-lg dark:shadow-slate-600 shadow-slate-800 max-w-sm md:max-w-xs mx-2 md:mx-1 my-2 py-1 md:my-5 lg:my-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-cyan-500 dark:border-gray-700">
                <a href="https://memo-mate.vercel.app" target='__blank'>
                  <Image className="rounded-t-lg" src={memomate} alt="memomate" />
                </a>
                <div className="p-5">
                  <a href="https://memo-mate.vercel.app">
                    <h5 className="font-robotoslab mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-1000">MemoMate: A Note Taking App</h5>
                  </a>
                  <p className="font-poppins mb-3 font-normal text-gray-700 dark:text-gray-800">Developed Using ReactJs, MaterialUI, NodeJs, ExpressJs and MongoDB with Auth0 Authentication.</p>
                  <a href="https://memo-mate.vercel.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none dark:bg-cyan-700 dark:hover:bg-cyan-800">
                    Checkout
                    <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="800">
              <div className="hover:scale-105 duration-300 shadow-lg dark:shadow-slate-600 shadow-slate-800 max-w-sm md:max-w-xs mx-2 md:mx-1 mt-2 mb-7 py-0.5 md:my-5 lg:my-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-cyan-500 dark:border-gray-700">
                <a href="https://pr3mkum4r.github.io/React-Weather-App/" target='__blank'>
                  <Image className="rounded-t-lg" src={weatherapp} alt="weatherapp" />
                </a>
                <div className="p-5">
                  <a href="https://pr3mkum4r.github.io/React-Weather-App/">
                    <h5 className="font-robotoslab mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-1000">CityCast: Your Weather Navigator</h5>
                  </a>
                  <p className="font-poppins mb-3 font-normal text-gray-700 dark:text-gray-800"> Real-time city weather forecasts powered by ReactJs and Axios. Stay informed about weather conditions.</p>
                  <a href="https://pr3mkum4r.github.io/React-Weather-App/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none dark:bg-cyan-700 dark:hover:bg-cyan-800">
                    Checkout
                    <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mb-14'>
          <h3 className='font-poppins font-medium text-teal-900 text-2xl py-2 lg:px-9 dark:text-white'>Work Experience and Education</h3>
          <Timeline timeLineDataSet={timeLineDataSet} workIcon={<FontAwesomeIcon icon={faBriefcase} style={{color: "#ffffff",}} />} bgColor={darkMode ? "#06B6D4" :  "#ffffff" } educationIcon={<FontAwesomeIcon icon={faGraduationCap} style={{color: "#ffffff",}} />} educationDataSet={educationDataSet}/>
        </section>

        <Footer/>

        {isVisible &&
          <button id="to-top-button" onClick={scrollToTop} title="Go To Top"
            class="fixed z-90 bottom-8 right-8 border-0 w-12 h-12 rounded-full drop-shadow-md bg-sky-500 dark:bg-teal-500 text-white text-2xl font-bold">&uarr;</button>}
      </main >
    </div >
  )
}
