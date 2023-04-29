import React from "react";
import './style.scss'
import avocado  from  '../../../../assets/images/img-01.jpg';
function Box(){
   
      return( <section className="imagebox">
      
        <div className="image">
       <img src={avocado} alt=""/>
       </div>
       <div className="texts">
       <h1>Maecenas nulla neque</h1>
       <p style={{marginBottom:"100px"}}>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
        <button>Read More</button>
         </div> 
      </section>
      )
  }
  
  export default Box