import { ListGroup } from "react-bootstrap";
import { nanoid } from "nanoid";
import React from "react";

export default function Messages(props) {
  const { messages } = props;

  return (
    <ListGroup className="mb-4">
      {messages.map((message) => (
        <ListGroup.Item
          className="mt-2 ms-2 mx-2 rounded-3 shadow-lg p-4"
          key={nanoid()}
        >
          <p style={{ color: message.member.clientData.color, fontWeight: 'bold' }}>
            {message.member.clientData.username}
          </p>
          <p className="text-break">{message.text}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
