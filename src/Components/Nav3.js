// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react'



// export default function Nav3() {
//   const[classupdate, setclassupdate]= useState('menu')
//   const handleClass = ()=>{
//     setclassupdate('menusoup')
//   }




//    return (

//       <>
  
//   <div className='nav3'>
//          <div className='div1'>
//              <div className='menu'>
//                 <Link to="/"> All</Link>
//              </div>
//              <div className='menusoup' >
//                 <Link to="/soup"> Soup</Link>
  
//              </div>
//              <div className='menu'>
//                 <Link to="/juice"> Drink</Link>
//              </div>
//              <div className='menu'>
//              <Link to="#"> Spicy</Link>
//              </div>
//              <div className='menu'>
//              <Link to="#"> Tradition</Link>
//              </div>
//              <div className='menu'>
//              <Link to="#"> Sweet</Link>
//              </div>
//              <div className='menu'>
//              <Link to="#"> Cake</Link>
//              </div>
  
//          </div>
//          <div className='div2'>
//           <i class="fa-solid fa-bars-staggered"></i> 
//          </div>
  
  
//       </div>
      
  
  
      
//       </>
//     )
// }


import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Nav3juice() {
  // Refs for each menu item
  const allRef = useRef(null);
  const soupRef = useRef(null);
  const juiceRef = useRef(null);
  const spicyRef = useRef(null);
  const traditionRef = useRef(null);
  const sweetRef = useRef(null);
  const cakeRef = useRef(null);

  // Function to set the active class
  const setActiveClass = (activeRef) => {
    // Reset all classes to 'menu'
    allRef.current.className = 'menu';
    soupRef.current.className = 'menu';
    juiceRef.current.className = 'menu';
    spicyRef.current.className = 'menu';
    traditionRef.current.className = 'menu';
    sweetRef.current.className = 'menu';
    cakeRef.current.className = 'menu';

    // Set the clicked item's class to 'menusoup'
    activeRef.current.className = 'menusoup';
  };

  // Get the current location for link navigation
  const location = useLocation();

  return (
    <>
      <div className='nav3'>
        <div className='div1'>
          <div ref={allRef} className={location.pathname === '/' ? 'menusoup' : 'menu'} onClick={() => setActiveClass(allRef)}>
            <Link to="/"> All</Link>
          </div>
          <div ref={soupRef} className={location.pathname === '/soup' ? 'menusoup' : 'menu'} onClick={() => setActiveClass(soupRef)}>
            <Link to="/soup"> Soup</Link>
          </div>
          <div ref={juiceRef} className={location.pathname === '/juice' ? 'menusoup' : 'menu'} onClick={() => setActiveClass(juiceRef)}>
            <Link to="/juice"> Drink</Link>
          </div>
          <div ref={spicyRef} className='menu' onClick={() => setActiveClass(spicyRef)}>
            <Link to="#"> Spicy</Link>
          </div>
          <div ref={traditionRef} className='menu' onClick={() => setActiveClass(traditionRef)}>
            <Link to="#"> Tradition</Link>
          </div>
          <div ref={sweetRef} className='menu' onClick={() => setActiveClass(sweetRef)}>
            <Link to="#"> Sweet</Link>
          </div>
          <div ref={cakeRef} className='menu' onClick={() => setActiveClass(cakeRef)}>
            <Link to="#"> Cake</Link>
          </div>
        </div>
        <div className='div2'>
          <i className="fa-solid fa-bars-staggered"></i>
        </div>
      </div>
    </>
  );
}
