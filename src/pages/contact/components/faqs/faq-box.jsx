import {useState} from "react";

const FaqBox = ({item, index}) => {  // question, answer
  const [isOpen, setIsOpen] = useState(false)

  return <div className='P-faq-box'>
    <div onClick={()=>setIsOpen(!isOpen)} className={`P-faq-header ${isOpen? "active":""}`}>{index+1}. {item.question}</div>
    <div className={`P-faq-body ${isOpen? 'P-open-faq':''}`}>{item.answer}</div>
  </div>
}

export default FaqBox