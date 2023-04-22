import React, { useState } from 'react';
import photo1 from  '../../../../assets/images/01.jpg';
import photo2 from  '../../../../assets/images/02.jpg';
import photo3 from  '../../../../assets/images/03.jpg';
import photo4 from  '../../../../assets/images/04.jpg';
import photo5 from  '../../../../assets/images/05.jpg';
import photo6 from  '../../../../assets/images/06.jpg';
import photo7 from  '../../../../assets/images/07.jpg';
import photo8 from  '../../../../assets/images/08.jpg';
const SaladList = () => {
  const [items] = useState({
    salads:[
      {
        img:photo1,
        name: 'Fusce dictum finibus',
        price: "$45 / $55",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'
      },
      {
          img:photo2, 
        name: 'Aliquam sagittis',
        price: "$65 / $70",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan '
      },
      {
          img:photo3,
        name: 'Sed varius turpis',
        price: "$30.50",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan '
      },
      {
          img:photo4,
        name: 'Aliquam sagittis',
        price:"$25.50" ,
        description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan"
      },
      {
          img:photo5,
        name: 'Maecenas eget justo',
        price: "$80.25",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan '
      },
      {
          img:photo6,
        name: 'Quisque et felis eros',
        price:" $20 / $40 / $60",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan'
      },
       
       ]
 });
  return (
    <div className='P-flex-container'>
        {items.salads.map((item) => {
          return <div className='P-flex-box'  >
           
          <img  src={item.img} alt=""/> 
     <p>{item.name}</p>
     <p>{item.description}</p>
<p>{item.price}</p> 
      
   </div> 
         })}
   </div>
  );
}

export default SaladList ;