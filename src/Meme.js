import React, { useState } from 'react'
import memesData from './memesData.js'

export default function Meme() {

  const [memeUrl, setMemeUrl] = useState()
  const [memeName, setMemeName] = useState()

  function getRandomMeme() {
    const memes = memesData.data.memes
    const randomIndex = Math.floor(Math.random() * memes.length)
    const {url, name} = memes[randomIndex]
    setMemeUrl(url)
    setMemeName(name)
  }

  return (
    <main>
      <input className='input-top' placeholder='Shut up' />
      <input className='input-botom' placeholder='and take my money' />
      <button className='purple-gradient' onClick={() => console.log(getRandomMeme())}>Get a new meme image</button>
      <img className='meme' src={memeUrl} alt={memeName} />
    </main>
  )
}
