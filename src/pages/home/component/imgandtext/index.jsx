import React from "react";
import './style.scss'
import avocado  from  '../../../../assets/images/img-01.jpg';
function Box(){
   
      return( <section className="imagebox">
      
        <div>
       <img src={avocado} alt=""/>
       </div>
       <div>
       <h1>Maecenas nulla neque</h1>
       <p>Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.</p>
        </div>
        
      </section>
      )
  }
  
  export default Box