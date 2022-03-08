import React from 'react'
import Cards from './Cards'
import './Sections.css'
import { Link } from 'react-router-dom'
import Post from './Post'

function Sections() {
  return (
    <>
    <div className='section-container'>
      <div className='section-header'>
        <div>
        <h1 className='section-header-title'>Now on View</h1>
        <p className='section-header-subtitle'>Explore exhibition gallery guides, videos, articles, and more.</p>
        </div>
        <div>
          <h3 className='section-header-left-title'><u>View All Exhibitions</u></h3>
          <div className='section-underline'></div>
        </div>
      </div>
      <Cards />
    </div>
    <div className='section-container'>
      <div className='section-header'>
        <div>
        <h1 className='section-header-title'>Article</h1>
        <p className='section-header-subtitle'>Get to know more about the house of dan hausa.</p>
        </div>
      </div>
    <Post />
    </div>  
    </>
  )
}

export default Sections