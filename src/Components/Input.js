import { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Input({ send }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() != "" || text.trim().length != 0) {
      setText("");
      send(text);
    } else {
      alert("Input cannot be empty");
    }
  };

  return (
    <Form className="d-flex m-4" onSubmit={handleSubmit}>
      <FormControl
        name="text"
        type="text"
        value={text}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Enter message"
      />
      <Button className=" mx-2" variant="dark" type="submit">
        Send
      </Button>
    </Form>
  );
}
