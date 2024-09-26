import React from 'react'
import Nav3All from './Nav3All'
import Nav3juice from './Nav3juice'
import Alldishes from './Alldishes'
import Nav3 from '../Components/Nav3'
import Heading from './Heading'

export default function All() {
  return (
   

<>  
    {/* <div className='heading'>
              <div className='heading1'>
                     <h2>Popular Food</h2>
              </div>
                <div className='border'></div>
       </div> */}
       <Heading/>
      <div className='Margin'>
        <div className='Margin1'> 

   
     <Nav3/>
     <Alldishes/>
     </div>
     </div>
    </>     
    
  )
}
