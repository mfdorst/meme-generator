import React, { useState } from 'react'
import memesData from './memesData.js'

export default function Meme() {

  function getRandomMeme() {
    const memes = memesData.data.memes
    const randomIndex = Math.floor(Math.random() * memes.length)
    const {url, name} = memes[randomIndex]
    return {url, name}
  }

  const [meme, setMeme] = useState(getRandomMeme())

  function updateMeme() {
    setMeme(getRandomMeme())
  }

  return (
    <main>
      <input className='input-top' placeholder='Shut up' />
      <input className='input-botom' placeholder='and take my money' />
      <button className='purple-gradient' onClick={updateMeme}>Get a new meme image</button>
      <img className='meme' src={meme.url} alt={meme.name} />
    </main>
  )
}
