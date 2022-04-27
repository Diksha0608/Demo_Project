import React from 'react'
// import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
    // const myStyle = {
    //     paddingLeft: "40rem",
    //     paddingTop: "9rem"
    // }
    
  
  return (
    <>
    <div className='containers' >
        {/* <img  src='/images/img3.jpg' alt='nice'/> */}
    
            
     <div className='containers_content'>      
    <h1>You defy aging.</h1>
    <p style={{fontSize: "2rem"}}>We defy expectations.</p>
    
    
    <button className='btn'>click here</button>
    <button  className='btn'>click here</button>
    
    </div> 
    </div>
    
    {/* <button><Link to="/">Enroll Now</Link></button> */}

 {/* <div className="content-box">
 <h2>FACILITIES</h2>
 <div className="row">
     <div className="column">
         <Link to="/"><img src="https://media.istockphoto.com/photos/happy-diverse-students-walking-in-college-campus-picture-id1165524880?k=20&m=1165524880&s=612x612&w=0&h=FZzObkv5FGFCwJCLg1fi1-W2Rg4jukq_VKMzTqw_sYA=" alt=""/></Link>
         <Link className='link' to="/">CAMPUS</Link>
     </div>
     <div className="column">
         <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg/1200px-Biblioth%C3%A8que_de_l%27Assembl%C3%A9e_Nationale_%28Lunon%29.jpg" alt=""/></Link>
         <Link className='link'  to="/">LIBRARY</Link>
     </div>
     <div className="column">
         <Link to="/"><img src="https://im.whatshot.in/img/2020/Nov/11950-e-1606238896.jpg" alt=""/></Link>
         <Link className='link' to="/">CANTEEN</Link>
     </div>
 </div>
</div> */}
</>
  )

}

export default Home