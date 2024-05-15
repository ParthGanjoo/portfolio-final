import React from 'react'
import { FaBehance, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import AnimatePage from './AnimatePage';
import ProjectComponent from './Showcase/Projects';


function Projects() {
  return (
    <>
        <AnimatePage>
	
            <ProjectComponent />

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

export default Projects