import { ListGroup } from "react-bootstrap";
import { nanoid } from "nanoid";
import React from "react";
import MessageItem from "./MessageItem";

export default function MessageList(props) {


  const { messages, currentMember } = props;

  return (
    <ListGroup className="mb-4">
      {messages.map((message) => (
        <MessageItem
          message={message}
          key={nanoid()}
          currentMember={currentMember}
        />
      ))}
    </ListGroup>
  );
}
