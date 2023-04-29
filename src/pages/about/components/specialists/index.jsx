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
          description: ' Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',
          fblink:"https://www.facebook.com",
          twitlink:"https://twitter.com",
          instalink:"https://www.instagram.com/",
        },
        {
            img:photo2, 
          name: 'Daisy Walker',
          specialist:"Executive Chef",
          description: 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
          fblink:"https://www.facebook.com",
          twitlink:"https://twitter.com",
        },
        {
            img:photo3,
          name: "Florence Nelson",
          specialist: 'Kitchen Manager',
          description: 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
          fblink:"https://www.facebook.com",
         
          instalink:"https://www.instagram.com/",
        },
        {
            img:photo4,
          name: 'Valentina Martin',
          specialist: "Culinary Director",
          description: 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus. ',
          fblink:"https://www.facebook.com",
          twitlink:"https://twitter.com",
          instalink:"https://www.instagram.com/",
          youtubelink:"https://www.youtube.com",
        },
      
      ]
});
  return (
    <div className='P-flex-container4'>
        {items.specialists.map((item,index) => {
          return <div className='cards'  key={index}>
           <div className='img'>
          <img  src={item.img} alt=""/>
          </div>
          <div className='shortdescription'>
     <h4 className='name'>{item.name}</h4>
     <p className='specialist'>{item.specialist}</p> 
     <p className='description'>{item.description}</p>
    {item.fblink? <i className={`icon icon-facebook2 `}>
     <a href={item.fblink}></a>
     </i>:""}
    {item.instalink?<i className={`icon icon-instagram `}>
     <a href={item.instalink}></a>
     </i>:""}
    {item.twitlink? <i className={`icon icon-twitter `}>
     <a href={item.twitlink}></a>
     </i>:""}
   {item.youtubelink?  <i className={`icon icon-youtube `}>
     <a href={item.youtubelink}></a>
     </i>:""}
</div>
    
   </div> 
         })}
   </div>
  );
}

export default SpecialList ;