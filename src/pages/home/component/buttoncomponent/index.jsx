import React, { useState } from 'react';
import "./style.scss"
import photo1 from '../../../../assets/images/01.jpg';
import photo2 from '../../../../assets/images/02.jpg';
import photo3 from '../../../../assets/images/03.jpg';
import photo4 from '../../../../assets/images/04.jpg';
import photo5 from '../../../../assets/images/05.jpg';
import photo6 from '../../../../assets/images/06.jpg';
import photo7 from '../../../../assets/images/07.jpg';
import photo8 from '../../../../assets/images/08.jpg';

const ITEMS = [
    {
        img:photo1,
        name: 'Fusce dictum finibus',
        price: "$45 / $55",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        category:"Pizza",
      },
      {
          img:photo2, 
        name: 'Aliquam sagittis',
        price: "$65 / $70",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan ',
        category:"Pizza",
      },
      {
          img:photo3,
        name: 'Sed varius turpis',
        price: "$30.50",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan ',
        category:"Pizza",
      },
      {
          img:photo4,
        name: 'Aliquam sagittis',
        price:"$25.50" ,
        description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        category:"Pizza",
      },
      {
          img:photo5,
        name: 'Maecenas eget justo',
        price: "$80.25",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan ',
        category:"Pizza",
      },
      {
          img:photo6,
        name: 'Quisque et felis eros',
        price:" $20 / $40 / $60",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        category:"Pizza",
      },
      {
          img:photo7,
        name:"Sed ultricies dui",
        price:"$94",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        category:"Pizza",
      },
      {
          img:photo8,
        name: 'Donec porta consequat',
        price:"$15" ,
        description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        category:"Pizza",
      },
      {
        img:photo1,
        name: 'Fusce dictum finibus',
        price: "$45 / $55",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        category:"Salad"
      },
      {
          img:photo2, 
        name: 'Aliquam sagittis',
        price: "$65 / $70",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan ',
        category:"Salad"
      },
      {
          img:photo3,
        name: 'Sed varius turpis',
        price: "$30.50",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan ',
        category:"Salad"
      },
      {
          img:photo4,
        name: 'Aliquam sagittis',
        price:"$25.50" ,
        description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        category:"Salad"
      },
      {
          img:photo5,
        name: 'Maecenas eget justo',
        price: "$80.25",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan ',
        category:"Salad"
      },
      {
          img:photo6,
        name: 'Quisque et felis eros',
        price:" $20 / $40 / $60",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        category:"Salad"
      },
      {
        img:photo1,
        name: 'Fusce dictum finibus',
        price: "$45 / $55",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        category:"Noodle"
      },
      {
          img:photo2, 
        name: 'Aliquam sagittis',
        price: "$65 / $70",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan ',
        category:"Noodle"
      },
      {
          img:photo3,
        name: 'Sed varius turpis',
        price: "$30.50",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan ',
        category:"Noodle"
      },
      {
          img:photo4,
        name: 'Aliquam sagittis',
        price:"$25.50" ,
        description: "Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan",
        category:"Noodle"
      },
      {
          img:photo5,
        name: 'Maecenas eget justo',
        price: "$80.25",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan ',
        category:"Noodle"
      },
      {
          img:photo6,
        name: 'Quisque et felis eros',
        price:" $20 / $40 / $60",
        description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
        category:"Noodle"
      },
];

const MENU_CATEGORIES = [ 'Pizza', 'Salad', 'Noodle'];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('Pizza');

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredItems =ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className='menu-container'>
      <div className='category-buttons'>
        {MENU_CATEGORIES.map((category, index) => (
          <button
            key={index}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='item-list'>
        {filteredItems.map((item, index) => (
          <div key={index} className='item'>
            <img src={item.img} alt={item.name} />
            <div className='item-details'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
