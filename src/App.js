// import logo from './logo.svg';
// import './App.css';
// import Nav from './Components/Nav';
// import Nav2 from './Components/Nav2';
// // import Herosection from './Components/Herosection';
// import Soup from './Components/Soup';
// import Nav3 from './Components/Nav3';
// import React from "react";
// import Juices from './Components/Juices';

// import All from './Components/All';


// import Soups from './Components/Soups';

// function App() {
//   return (
//     <>
       
//         <Nav/>
//         <Nav2/>
//         <All />
      
        
       
//     </>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Nav2 from './Components/Nav2';
// import Herosection from './Components/Herosection';
import Soup from './Components/Soup';
import Nav3 from './Components/Nav3';
import React from "react";
import Juices from './Components/Juices';
import Footer from './Components/Footer';
import All from './Components/All';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// import Soups from './Components/Soups';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Nav2 />
     
        
        <Routes>
       
          <Route path="/soup" element={<Soup />} />
          <Route  path="/juice" element={<Juices />} />
          
              <Route path="/" element={<All />} />
        </Routes>
      </Router>
   
   
    </>
  );
}

export default App;
