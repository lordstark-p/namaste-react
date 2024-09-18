import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };

    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component Did Mount");

    const data = await fetch("https://api.github.com/users/lordstark-p");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  render() {
    // console.log(this.props.name + " Child Constructor");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @pranjalchandel98</h4>
      </div>
    );
  }
}

export default UserClass;
