import React, { useEffect } from 'react'
import Button from './Button'
import './Herocard.css'
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image'
import { useState, useRef } from 'react'
import { clear } from '@testing-library/user-event/dist/clear'




function Herocard() {
  const initalState = 0; 
  const [images, setImages] = useState(["./images/hero-image.png", "./images/undraw_art_museum_8or4.png","./images/hero-image.png", "./images/undraw_art_museum_8or4.png","./images/hero-image.png", "./images/undraw_art_museum_8or4.png","./images/hero-image.png", "./images/undraw_art_museum_8or4.png"])
  const [count, setCount] = useState(initalState);
  const counterRef = useRef(initalState);


  useEffect(() => {
    counterRef.current = count;
  })

  useEffect(() => {
    const interValID = setInterval(slideShow,  5000)

    return () => clearInterval(interValID)
  },[])


  const slideShow = () => {
    
    if(count === images.length) {
      setCount(0)
      return;
    } else {
      setCount(counterRef.current + 1)
    }
 
    
  }

  return (
    <>
    <div className='hero-card-container'>
      <div className='article-wrapper'>
    <div className='main-article-slide-show fade'>
      <img className='main-article-image' src={[images[count]]}  />
    </div>
  
    <div className='main-article-text-wrapper'>
    <h1 className='title-text'>Welcome To The Kano State History and Culture Bureau</h1>
        <p className='subtitle-text'>Popoktigt klimatflykting. Ina jåskap. 
          Anasm. Deng UX. 
          Debeda digisk. Kassa hideling. 
          Dibirat red. Svenna sitt liv bäl. 
          Pseudokrati intryckssanera. Chatbots nyre. 
        </p>
        <Button buttonStyle={'btn--outline'} children={'Plan A Visit'}/>
     </div>
     </div>
    </div>
    </>
  )
}

export default Herocard