import { Inter } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import dp from '../public/profilepic1.jpeg';
import memomate from '../public/memomate.png';
import skilltrekker from '../public/SkillTrekker.jpg';
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
import AOS from "aos";
import "aos/dist/aos.css";
import Typewriter from 'typewriter-effect';

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

  const currDate = new Date();
  const currYear = currDate.getFullYear();
  return (
    <div className={darkMode ? 'dark' : ''}>
      <main className='px-6 bg-cyan-100 dark:bg-gray-800 md:px-16 lg:px-32'>
        <section className='mb-10'>
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

        <section>
          <div>
            <h3 className='font-poppins font-medium text-teal-900 text-2xl py-2 lg:px-9 dark:text-white'>Experience</h3>
            <p className='font-josefin lg:text-lg text-md py-2 leading-8 lg:px-9 text-gray-800 dark:text-gray-400'>These are the technologies I've worked with</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-8'>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500'>
                <Image src={html5} alt='html5' className='w-20 mx-auto mt-2 h-16 w-16' />
                <p className='font-poppins text-orange-500 py-1'>HTML</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-400'>
                <Image src={css3} alt='css3' className='w-20 mx-auto' />
                <p className='font-poppins text-blue-400 py-1'>CSS</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-400'>
                <Image src={js} alt='js' className='w-20 mx-auto mt-2 h-16 w-16' />
                <p className='font-poppins text-yellow-400 py-1'>Javascript</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-400'>
                <Image src={react} alt='react' className='w-20 mx-auto my-1' />
                <p className='font-poppins text-sky-400 py-1'>ReactJs</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-cyan-500'>
                <Image src={tailwind} alt='tailwind' className='w-20 mx-auto my-5' />
                <p className='font-poppins text-cyan-500 py-1'>TailwindCSS</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-600'>
                <Image src={mui} alt='mui' className='w-20 mx-auto my-1' />
                <p className='font-poppins text-blue-600 py-1'>MaterialUI</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-lime-700'>
                <Image src={nodejs} alt='nodejs' className='w-20 mx-auto' />
                <p className='font-poppins text-lime-700 py-1'>NodeJs</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500'>
                <Image src={expressjs} alt='expressjs' className='w-20 mx-auto' />
                <p className='font-poppins text-gray-500 py-1'>ExpressJs</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-600'>
                <Image src={mongodb} alt='mongodb' className='w-20 mx-auto' />
                <p className='font-poppins text-green-600 py-1'>MongoDB</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-600'>
                <Image src={firebase} alt='firebase' className='w-20 mx-auto' />
                <p className='font-poppins text-yellow-600 py-1'>Firebase</p>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className='bg-gray-100 dark:bg-transparent shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-black'>
                <Image src={flask} alt='flask' className='w-20 mx-auto' />
                <p className='font-poppins text-black py-1'>Flask</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mb-5'>
          <div>
            <h3 className='font-poppins font-medium text-teal-900 text-2xl py-2 lg:px-9 dark:text-white'>Recent Projects</h3>
            <p className='font-josefin lg:text-lg text-md py-2 leading-8 lg:px-9 text-gray-800 dark:text-gray-400'>Explore My Latest Portfolio Additions</p>
          </div>
          <div className='flex flex-wrap gap-10 md:gap-5 justify-center'>
            {/* Card */}
            <div data-aos="fade-up" data-aos-duration="1000">
              <div className="hover:scale-105 duration-300 shadow-lg dark:shadow-slate-600 shadow-slate-800 max-w-sm md:max-w-xs mx-2 md:mx-1 my-2 md:my-5 lg:my-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-cyan-500 dark:border-gray-700">
                <a href="https://skill-trekker.vercel.app">
                  <Image className="rounded-t-lg" src={skilltrekker} alt="skilltrekker" />
                </a>
                <div className="p-5">
                  <a href="https://skill-trekker.vercel.app">
                    <h5 className="font-robotoslab mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-cyan-1000">SkillTrekker: A Roadmap website for tech domains you love !</h5>
                  </a>
                  <p className="font-poppins mb-3 font-normal text-gray-700 dark:text-gray-800">Developed Using ReactJs, MaterialUI, Firestore, EChartsJs and Firebase Authentication.</p>
                  <a href="https://skill-trekker.vercel.app" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-cyan-500 rounded-lg hover:bg-cyan-600 focus:outline-none dark:bg-cyan-700 dark:hover:bg-cyan-800">
                    Checkout
                    <svg className="w-3 h-3 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
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
            <div data-aos="fade-up" data-aos-duration="1000">
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

        <footer class="bg-white dark:bg-gray-900">
          <div class="px-4 py-6 bg-cyan-100 dark:bg-gray-800 md:flex md:items-center md:justify-between">
            <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© {currYear} <a href="https://flowbite.com/">Pr3mKum4r™</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <a href="https://www.linkedin.com/in/pr3mkum4r" class="text-gray-400 hover:text-sky-600 ">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" clip-rule="evenodd" /> </svg>
                <span class="sr-only">Linkedin account</span>
              </a>
              <a href="https://www.github.com/pr3mkum4r" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                </svg>
                <span class="sr-only">GitHub account</span>
              </a>
              <a href="https://www.youtube.com/@gamerslife4107" class="text-gray-400 hover:text-red-600">
                <svg class='w-4 h-4' aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor"  viewBox="0 0 16 16"> <path fillRule="evenodd"d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" clipRule="evenodd"/> </svg>
                <span class="sr-only">Youtube account</span>
              </a>
            </div>
          </div>
        </footer>

        {isVisible &&
          <button id="to-top-button" onClick={scrollToTop} title="Go To Top"
            class="fixed z-90 bottom-8 right-8 border-0 w-12 h-12 rounded-full drop-shadow-md bg-sky-500 dark:bg-teal-500 text-white text-2xl font-bold">&uarr;</button>}
      </main >
    </div >
  )
}
