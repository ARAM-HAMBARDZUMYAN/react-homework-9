import React, { useState } from 'react';
import './style.scss'
import PizzaList from '../pizzasection';
import SaladList from '../saladsection';
import NoodleList from '../noodlesection';


function LIST() {
  const [activeComponent, setActiveComponent] = useState(1);

  const handleClick = (componentNumber) => {
    setActiveComponent(componentNumber);
  }

  return (
    <div className='showcomponent'>  
        <button className={activeComponent === 1? "active":""} onClick={() => handleClick(1)}>Pizza</button>
      <button className={activeComponent === 2? "active":""}  onClick={() => handleClick(2)}>Salad</button>
      <button className={activeComponent === 3? "active":""}  onClick={() => handleClick(3)}>Noodle</button>
      {activeComponent === 1 && <PizzaList />}
      {activeComponent === 2 && <SaladList />}
      {activeComponent === 3 && <NoodleList />}

    
    </div>
  );
}

export default LIST;