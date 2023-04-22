import React from "react";
import './style.scss'

function TEXT(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}

export default TEXT;
