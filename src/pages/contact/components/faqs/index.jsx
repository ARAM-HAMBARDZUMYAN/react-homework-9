import React, { useState } from 'react';
import FaqBox from './faq-box';
import "./style.scss"
const FAQsAccordion = () => {
  const [faqs, setFAQs] = useState([
    { 
        question :" Fusce eu lorem et dui #09C maximus varius?",
         answer: '#666 Duis blandit purus vel nenenatis rutrum. Pellentesque pellentesque tindicunt lorem, ac egestas massa sollicitudin vel. Nam scelerisque vulputate quam mollis pretium. Morbi condimentum volutpat.', 
     
 },
    { 
        question:"Vestibulum #999 ante ipsum primis in faucibus orci?", 
    answer: 'Mauris euismod odio at commodo rhoncus. Maecenas nec interdum purus, sed auctor est. Sed eleifend urna nec diam consectetur, a aliquet turpis facilisis. Integer est sapien, sagittis vel massa vel, interdum euismod erat. Aenean sollicitudin nisi neque, efficitur posuere urna rutrum porta.'
 },
    {
         question: 'Um erat. Lorem ipsum dolor sit amet consectetur?',
     answer: 'Phasellus dui velit, feugiat sed elit ut, facilisis aliquam metus. Ut id bibendum erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum porttitor imperdiet. Integer facilisis.' 
    },
    {
        question: 'Ut ac erat sit amet neque efficitur faucibus et in lectus?',
        answer:" Vivamus viverra pretium ultricies. Praesent feugiat, sapien vitae blandit efficitur, sem nulla venenatis nunc, vel maximus ligula sem a sem. Pellentesque ligula ex, facilisis ac libero a, blandit ullamcorper enim."  
    }
  ]);

  const handleClick = (index) => {
    const newFAQs = [...faqs];
    newFAQs[index].showAnswer = !newFAQs[index].showAnswer;
    setFAQs(newFAQs);
  };

  return (
    <div className='faqs'>
    <h1>Faqs</h1>
    <p>This section comes with Accordion tabs for different questions and answers about Simple House HTML CSS template. Thank you. #666</p>
        {faqs.map((faq, index) => {
        return <FaqBox item={faq} index={index} key={index}/>
        })}
    </div>
  );
};

export default FAQsAccordion;