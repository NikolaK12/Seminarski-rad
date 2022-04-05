import { Navbar } from "react-bootstrap";

import React from "react";

export default function Nav(props) {
  const { value, open } = props;

  return (
    <Navbar style={{ backgroundColor: "#dcdde1" }}>
      <h1 className="mx-auto">React app</h1>
      <h5 onClick={open}>
        {value} users online
        <br />(click to show)
      </h5>
    </Navbar>
  );
}
