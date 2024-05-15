import React from 'react'
import '../styles/MoonImage.css'
import Moon from '../Assets/Moon.png'
import MoonLitUp from '../Assets/MoonLitUp.png'

function MoonImage() {
  return (
    <div className='MoonPhoto'>
        <img src={Moon} id='Moon' />
        <img src={MoonLitUp} id='MoonLitUp' />
    </div>
  )
}

export default MoonImage

