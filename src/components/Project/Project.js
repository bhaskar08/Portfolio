import React, { useEffect } from 'react'
import './project.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import P1_Back from '../../assets/img/textUtils.png';
import P2_Back from '../../assets/img/newsApp.png';
import P3_Back from '../../assets/img/portfolio_front.jpg';
import P4_Back from '../../assets/img/inotepad.png';
import huffman from '../../assets/img/huffman.jpg';
import spotify from '../../assets/img/spotifyclone.jpg';


const Project = () => {
    useEffect(() => {
        AOS.init({ duration: 400 });
    }, []);

    return (
        <section id='project'>
            <h2>Projects</h2>

            <div className='container project_container'>
                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P4_Back} alt='TextUtils'></img>
                            <h3>myNoteBook</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>myNoteBook</h1>
                            <p>A secure note-taking web application powered by the MERN (MongoDB, Express.js, React.js, Node.js) stack. This project empowers users to create an account on the platform, authenticate securely, and seamlessly jot down their thoughts, ideas, and reminders.</p>
                            <a href='https://github.com/bhaskar08/myNotebook' className='btn-project' target='_blank' rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                

                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P2_Back} alt='NewsApp'></img>
                            <h3>News24X7</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>News24X7</h1>
                            <p>A dynamic and interactive web application that delivers the latest news from various sources. This project showcases my proficiency in web development, particularly in React.js, and my expertise in integrating external APIs.</p>
                            <a href='https://github.com/bhaskar08/NewsApp' className='btn-project' target='_blank' rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={huffman} alt='TextUtils'></img>
                            <h3>File Compressor</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>File Compressor</h1>
                            <p>An application for encoding/decoding files.</p>
                            <a href='https://github.com/bhaskar08/File-Compressor' className='btn-project' target='_blank' rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P1_Back} alt='TextUtils'></img>
                            <h3>TextUtils</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>TextUtils</h1>
                            <p>TextUtils is a collection of useful utilities for manipulating String objects.</p>
                            <a href='https://github.com/bhaskar08/TxtReDefine-React' className='btn-project' target='_blank' rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={P3_Back} alt='Portfolio'></img>
                            <h3>Portfolio</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>Portfolio</h1>
                            <p>Crafted a sleek and modern personal portfolio using React, showcasing my skills and accomplishments with engaging design and effortless navigation.</p>
                        <a href='https://github.com/bhaskar08/Portfolio' className='btn-project' target='_blank' rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className='project_card' data-aos="fade-up">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <img src={spotify} alt='Portfolio'></img>
                            <h3>Spotify-Clone</h3>
                        </div>
                        <div class="flip-card-back">
                            <h1>Spotify-Clone</h1>
                            <p>Developed a basic version of Spotify using JavaScript</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project