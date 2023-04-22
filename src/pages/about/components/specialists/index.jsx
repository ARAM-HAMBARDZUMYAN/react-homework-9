import React, { useState } from 'react';
import photo1 from  '../../../../assets/images/about-01.jpg';
import photo2 from  '../../../../assets/images/about-02.jpg';
import photo3 from  '../../../../assets/images/about-03.jpg';
import photo4 from  '../../../../assets/images/about-04.jpg';
import "./style.scss"

const SpecialList = () => {
const [items] = useState({
   specialists:[
        {
          img:photo1,
          name: 'Jennifer Soft',
          specialist: "Founder and CEO",
          description: ' Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.'
        },
        {
            img:photo2, 
          name: 'Daisy Walker',
          specialist:"Executive Chef",
          description: 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.'
        },
        {
            img:photo3,
          name: "Florence Nelson",
          specialist: 'Kitchen Manager',
          description: 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.'
        },
        {
            img:photo4,
          name: 'Valentina Martin',
          specialist: "Culinary Director",
          description: 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus. '
        },
      
      ]
});
  return (
    <div className='P-flex-container4'>
        {items.specialists.map((item) => {
          return <div className='P-flex-box4'  >
           <div className='cards'>
          <img  src={item.img} alt=""/>
          </div>
          <div>
     <p>{item.name}</p>
     <p>{item.specialist}</p> 
     <p>{item.description}</p>
</div>
    
   </div> 
         })}
   </div>
  );
}

export default SpecialList ;