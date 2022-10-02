import React from 'react'
import arrow_up from '../assets/icon/arrow-up.svg'
import graphic from '../assets/icon/404-graphic.svg'

export default function NotFound() {
  return (
    <div className='not-found'>
        <div className='content'>
            <div className='party-piece'>404</div>
            <div className='speech'>Sorry  <span className='red'>!  </span>There's nothing here  <span className='red'>...</span></div>
            <button className='button'>Home</button>
            <img className='arrow-up' src={arrow_up}/>
            <div className='point'>Don't worry you can still go home...</div>
        </div>
      <div className='graphic'>
        <img src={graphic}/>
      </div>
    </div>
  )
}
