import React from 'react'
import { FaBehance, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import AboutPhoto from '../Assets/AboutPhoto.png'
import AnimatePage from './AnimatePage';


function About() {
  return (
    <>
        
    <AnimatePage>
    <div class="everything">
        <div class="container">
            <section class="about-container">
                <div id="about">
                    <div class="mmh five columns respbro">
                        <p class="resp-align2 right">
                            <img src={AboutPhoto} alt="Parth Ganjoo" draggable="false" class="me" loading="lazy" target="_blank" />
                        </p>
                    </div>
                    <div class="mmh text-item seven columns">
                        <p>
                        Hi, I’m Parth Ganjoo, a 21 year old Computer Science and Design student at IIIT Delhi. I'm a Frontend and XR Developer, UI/UX Designer and a Wildlife Photographer.
                        </p>
                        <p>
                        Birdwatching since 2011, photographing wildlife since 2018 and passionate about designing things since forever, my interest in photography and design has been ever growing. I am always enthusiastic about going out in the wild and taking photos, involved in learning more about design and picking up new skills and knowledge. Building upon this passion for design, thanks to my technical background, I learned to design and develop websites and extended reality interfaces. I also play my guitar and sing sometimes. (P.S. The Moon on the home page is shot by me on my terrace!)
                        </p>
                        <p>
                        If you would like to work on a project together, go out for a photowalk, or even start a rock band, let me know!
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>

    <footer>
            <div class="container">
                <div class="center icons resp-align">
                    <a href="mailto:parth21342@iiitd.ac.in">
                        <i><FaEnvelope color='#FFFFFF'/></i>
                    </a> 
                    <a target="_blank" href="https://www.instagram.com/parthganjoophotography/">
                        <i><FaInstagram color='#FFFFFF'/> </i>
                    </a>
                    <a target="_blank" href="https://www.behance.net/ganjoo">     
                        <i><FaBehance color='#FFFFFF'/></i>   
                    </a>   
                    <a target="_blank" href="https://www.linkedin.com/in/parth-ganjoo-407003277/">  
                        <i><FaLinkedin color='#FFFFFF'/></i> 
                    </a>
                    <a target="_blank" href="https://github.com/ParthGanjoo">
                        <i><FaGithub color='#FFFFFF'/></i> 
                    </a>  
                    <a target="_blank" href="https://open.spotify.com/user/dt1fhkj1i7gxqbeb9igv7anxf">
                        <i><FaSpotify color='#FFFFFF'/></i> 
                    </a>
                </div>
            </div>
        </footer>
        </AnimatePage>
    </>
  )
}

export default About
