import { Nav } from "react-bootstrap";

import React from "react";

export default function Navs(props) {
  const { value, open } = props;

  return (
    <Nav style={{ backgroundColor: "#dcdde1" }} className="justify-content-between" >
      <h1 >React App</h1>
      <h5 onClick={open}>
        {value} users online
        <br />(click to show)
      </h5>
    </Nav>
  );
}
