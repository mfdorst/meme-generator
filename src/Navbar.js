import React from 'react'
import trollFace from './images/troll-face.png'

export default function Navbar() {
  return (
    <nav className='purple-gradient'>
    <img className='troll-face' src={trollFace} alt="Troll face"/>
    <h1>Meme Generator</h1>
    <h2>React Course - Project 3</h2>
    </nav>
  )
}
