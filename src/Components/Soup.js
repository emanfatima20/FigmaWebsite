import React from 'react'
import Nav3 from '../Components/Nav3'
import Soups from '../Components/Soups'
import Heading from './Heading'

export default function Soup() {
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
     <Soups/>
     </div>
     </div>
    </>
  )
}