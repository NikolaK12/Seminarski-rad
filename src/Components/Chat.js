import React from "react";
import { Navs, Users, Messages, Input } from "../Components";
import { Container } from "react-bootstrap";
import "../Styles/Chat.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      messages: [],
      show: false,
      member: {
        username: props.user,
        color: props.color,
      },
    };

    this.drone = new window.Scaledrone("hZyfqTbK85kvD0RU", {
      data: this.state.member,
    });
    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
    });

    const room = this.drone.subscribe("observable-room");

    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({
        member,
        text: data,
        time: new Date().toLocaleTimeString(),
      });
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

  open = () => {
    this.setState({ show: true });
  };

  close = () => {
    this.setState({ show: false });
  };

  onSend = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };

  render() {
    return (
      <Container fluid="xxxl" className="ui">
        <Navs value={this.state.users.length} open={this.open} />
        <Users
          show={this.state.show}
          close={this.close}
          users={this.state.users}
        />

        <Container fluid="xxxl" className="messages">
          <Messages messages={this.state.messages} />
        </Container>

        <Container fluid="xxxl" className="input mx-auto">
          <Input send={this.onSend} />
        </Container>
      </Container>
    );
  }
}
