import React from 'react'
import { FaBehance, FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import '../styles/styles.css';

function Footer() {
  return (
    <div>
        <footer>
            <div class="container">
                <div class="center icons resp-align">
                    <a href="mailto:parth21342@iiitd.ac.in">
                        <i><FaEnvelope style="color: rgb(255, 255, 255);"/></i>
                    </a> 
                    <a target="_blank" href="https://www.instagram.com/parthganjoophotography/">
                        <i><FaInstagram color='#FFFFFF'/> </i>
                    </a>
                    <a target="_blank" href="https://www.behance.net/ganjoo">     
                        <i><FaBehance color='#000000'/></i>   
                    </a>   
                    <a target="_blank" href="https://www.linkedin.com/in/parth-ganjoo-407003277/">  
                        <i><FaLinkedin color='#000000'/></i> 
                    </a>
                    <a target="_blank" href="https://github.com/ParthGanjoo">
                        <i><FaGithub color='#000000'/></i> 
                    </a>  
                    <a target="_blank" href="https://open.spotify.com/user/dt1fhkj1i7gxqbeb9igv7anxf">
                        <i><FaSpotify color='#000000'/></i> 
                    </a>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer

{/*             <a href="#" target="_blank">
					<i class="fa fa-twitter"></i>
				</a> */}