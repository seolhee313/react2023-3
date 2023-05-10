import React from "react";
import ReactDOM from "react-dom/client";

function Hello(props){
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.text}</div>
      <div>{props.author}</div>
      <div>{props.author1}</div>
    </div>
  )
}

const name = {
  name : "cheonseolhee",
  text : "hello",
  author : {
    name: "너무",
    name1 : "어려워여",
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello name={name.name} text={name.text} author={name.author.name} author1={name.author.name1} />);