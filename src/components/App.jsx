import * as React from "react";

import { Nav } from "./Nav";
import { Frontpage } from "./Frontpage.jsx";

import { groupCtx } from "../contexts/group.jsx";
import { userCtx } from "../contexts/user.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      activeGroup: undefined,
      activeUser: undefined,
    }

    this.changeGroup = this.changeGroup.bind(this);
  }

  changeGroup(group) {
    this.setState({
      ...this.state,
      activeGroup: this.state.groups.find(g => g.name == group),
    });
  }

  componentDidMount() {
    fetch("http://localhost:8080/group")
      .then(res => res.json())
      .then(groups => this.setState({ activeGroup: (groups[0] || undefined), groups }));

    fetch("http://localhost:8080/user/user2")
      .then(res => res.json())
      .then(user => this.setState({ ...this.state, activeUser: user }))
  }

  render() {
    return (
      <groupCtx.Provider value={this.state.activeGroup}>
        <userCtx.Provider value={this.state.activeUser}>
          <Nav groups={this.state.groups} changeGroup={this.changeGroup} />
          <Frontpage />
        </userCtx.Provider>
      </groupCtx.Provider>
    );
  }
}
