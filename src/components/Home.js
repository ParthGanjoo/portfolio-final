import React from 'react'
import AnimatePage from './AnimatePage' 
import MoonImage from './MoonImage'

function Home() {
  return (
    <>
        
    <AnimatePage>
      <div class="everything inLanding">
        <div class="container">
            <section id="mainbody" class="">
                <h1 class="main-title">Hi,<br class="responsive-br" /> I'm Parth.</h1>
                <h4 class="subtitle">I , Develop, and Photograph.</h4>
            </section>
        </div>
      </div>
      <MoonImage />
    </AnimatePage>  

     
    </>
  )
}

export default Home