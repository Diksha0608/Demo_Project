import React from 'react'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='section2'>

             
  <img 
  src='\images\grow-lazy.jpg'
      data-src="\images\grow.jpg"  
  alt='good' height="270" width="250"
  className= " feature-img lazy-img"/>
  
  <div className="text_content2" >
        
      <h1>Filter</h1>
      <p>If you happen to have multiple values of the same margin for this Stack, you may want to use this method. (However, since it's not conceptually correct, you may have to break it down if you want to set a different margin for new elements in the future. So in that case, I think it's better to use Spacer.)</p>
      
      <button className='slider__btn'><span className='span'>see more</span>&rarr;</button>
      <button className='slider__btn'><span className='span'>see more</span> &rarr;</button>
      
      </div>
  
      
      </div>
    
  )
}

export default Section2