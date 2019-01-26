import React from "react";

function Image(props) {
  return (
    <img id={props.id} src={props.src} alt={props.name} onClick={() => props.handleClick(props.id)} ></img>
  );
};

export default Image;
