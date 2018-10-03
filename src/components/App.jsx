import * as React from "react";

import { Nav } from "./Nav";
import { Frontpage } from "./Frontpage.jsx";

import { groupCtx } from "../contexts/group.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [],
      activeGroup: undefined,
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
  }

  render() {
    return (
      <groupCtx.Provider value={this.state.activeGroup}>
        <Nav groups={this.state.groups} changeGroup={this.changeGroup} />
        <Frontpage />
      </groupCtx.Provider>
    );
  }
}
