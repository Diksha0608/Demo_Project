

import Main from "./Components/Main";
import Home from "./Components/Home";
import {
  Routes,
  Route,
} from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./Components/About";
import Features from "./pages/Features";


function App() {
 
  
  return (
    
    
    <div >
    
     <Main/>
    <Routes>
      <Route  path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/features" element={<Features/>} />
    </Routes>
  
  
     

 
</div>
    
  );
}

export default App;
