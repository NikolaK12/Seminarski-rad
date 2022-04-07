import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

export default function Input(props) {
  const [text, setText] = useState("");

  const { send } = props;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    send(text);
  };

  return (
    <Form className="d-flex " onSubmit={handleSubmit}>
      <FormControl
        name="text"
        className="w-60"
        type="text"
        value={text}
        onChange={handleChange}
        autoComplete="off"
        placeholder="Enter message"
      />
      <Button className=" mx-2" variant="dark" type="submit">
        Click
      </Button>
    </Form>
  );
}
