import { Navbar } from "react-bootstrap";
import "../Styles/Navs.css";

export default function Navs({ value, open }) {
  return (
    <Navbar bg="light" className="nav justify-content-between">
      <h1>React App</h1>
      <h5 className="users" onClick={open}>
        {value} users online
        <br />
        (click to show)
      </h5>
    </Navbar>
  );
}
