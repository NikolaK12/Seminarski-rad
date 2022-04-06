import React from "react";
import { ListGroup } from "react-bootstrap";
import "./MessageItem.css";

export default function MessageItem(props) {
  const { message, currentMember } = props;
  const messageFromMe = message.member.id === currentMember.id;
  const id = messageFromMe ? "currentMember" : "Member";

  return (
    <ListGroup.Item className="mt-2 ms-2 mx-2 rounded-3 shadow-lg p-4" id={id}>
      <p
        className="user"
        style={{
          color: message.member.clientData.color,
        }}
      >
        {message.member.clientData.username}
      </p>
      <p className="text-break">{message.text}</p>
    </ListGroup.Item>
  );
}
