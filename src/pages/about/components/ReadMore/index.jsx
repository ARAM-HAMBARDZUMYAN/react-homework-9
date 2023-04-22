import React, { useState } from 'react';
import photo1 from  '../../../../assets/images/01.jpg';
import photo2 from  '../../../../assets/images/02.jpg';
import photo3 from  '../../../../assets/images/03.jpg';
import "./style.scss"

const ReadMore= () => {
const [items] = useState({
   readmore:[
        {
          img:photo1,
          description: 'Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante. ',
          background:"blue",
          buttontext:"Read More"
        },
        {
            img:photo2, 
          description: 'Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.',
          background:"green",
          buttontext:"Read More"
        },
        {
            img:photo3,
          description: 'Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.',
          background:"darkred",
          buttontext:"Read More"
        },
      
      
      ]
});
  return (
    <div className='P-flex-container2'>
        {items.readmore.map((item) => {
          return <div className='P-flex-box2'  >
           
          <img  src={item.img} alt="ste pti liner icon bayc de hmi esa"/>
     <p>{item.description}</p>
      <button style={{backgroundColor:item.background}}>{item.buttontext}</button>
   </div> 
         })}
   </div>
  );
}

export default ReadMore ;