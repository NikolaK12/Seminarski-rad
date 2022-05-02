import { ListGroup } from "react-bootstrap";
import { nanoid } from "nanoid";
import "../Styles/Messages.css";

export default function Messages({ messages }) {
  return (
    <ListGroup className="mb-4">
      {messages.map((message) => (
        <ListGroup.Item
          className="mt-2 ms-3 mx-3 rounded-3 shadow-lg p-4"
          key={nanoid()}
        >
          <p
            className="username"
            style={{
              color: message.member.clientData.color,
            }}
          >
            {message.member.clientData.username}
          </p>
          <p className="mx-0 text-break">{message.text}</p>
          <p className="mb-0 time ">{message.time}</p>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
