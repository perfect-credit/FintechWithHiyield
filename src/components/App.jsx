import * as React from "react";

import { Nav } from "./Nav";
import { Frontpage } from "./Frontpage.jsx";

import { groupCtx } from "../contexts/group.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);

    // TODO: REMOVE THIS
    const groups = [
        { name: "Group 1" },
        { name: "Group 2" },
    ]

    this.state = {
      groups: groups,
      activeGroup: groups[0],
    }

    this.changeGroup = this.changeGroup.bind(this);
  }

  changeGroup(group) {
    this.setState({
      ...this.state,
      activeGroup: this.state.groups.find(g => g.name == group),
    });
  }

  render() {
    return (
      <>
        <groupCtx.Provider value={this.state.activeGroup}>
          <Nav groups={this.state.groups} changeGroup={this.changeGroup} />
          <Frontpage />
        </groupCtx.Provider>
      </>
    );
  }
}
