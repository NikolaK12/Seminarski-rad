import React from "react";
import { Nav, Users, Messages, Input } from "./Components";
import { Container } from "react-bootstrap";
import { randomColor } from "randomcolor";
import "./App.css";

function User() {
  return prompt("Please enter username");
}

export default class App extends React.Component {
  state = {
    users: [],
    messages: [],
    member: {
      username: User(),
      color: randomColor({
        luminosity: "bright",
      }),
    },
    show: false,
  };

  Open = () => {
    this.setState({ show: true });
  };

  Close = () => {
    this.setState({ show: false });
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone("hZyfqTbK85kvD0RU", {
      data: this.state.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      this.setState({ member });
    });

    const room = this.drone.subscribe("observable-room");

    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });

    room.on("members", (members) => {
      this.setState({ users: [...members] });
    });

    room.on("member_join", (member) => {
      this.setState({ users: [...this.state.users, member] });
    });

    room.on("member_leave", (member) => {
      var newusers = this.state.users.filter(function (user) {
        return user.id !== member.id;
      });
      this.setState({ users: newusers });
    });
  }

  onSend = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };

  render() {
    return (
      <Container fluid="xxxl" className="ui">
        <Nav value={this.state.users.length} open={this.Open} />

        <Users
          users={this.state.users}
          show={this.state.show}
          close={this.Close}
        />

        <Container fluid="xxxl" className="messages">
          <Messages messages={this.state.messages} />
        </Container>

        <Container fluid="xxxl" className="input">
          <Input send={this.onSend} />
        </Container>
      </Container>
    );
  }
}
