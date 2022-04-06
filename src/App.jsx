import React from "react";
import Input from "./Components/Input.jsx";
import MessageList from "./Components/MessageList.jsx";
import Nav from "./Components/Nav.jsx";
import Users from "./Components/Users.jsx";
import { Container } from "react-bootstrap";
import { randomColor } from "randomcolor";
import "./App.css";


function User() {

  var t = prompt("Please enter your username");
  return t;


}

export default class App extends React.Component {
  state = {
    users: [],
    messages: [],
    member: {
      username: User(),
      color: randomColor({
        luminosity: "light",
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
      member.id = this.drone.clientId;
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

  onSendMessage = (message) => {
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
          <MessageList
            messages={this.state.messages}
            currentMember={this.state.member}
          />
        </Container>

        <Container fluid="xxxl" className="input">
          <Input send={this.onSendMessage} />
        </Container>
      </Container>
    );
  }
}
