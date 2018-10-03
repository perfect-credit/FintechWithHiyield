import * as React from "react";

import { groupCtx } from "../contexts/group.jsx";

import { withStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';

import { List, ListItem, AppBar, Drawer, Toolbar, Typography, Button, IconButton, ListItemText } from "@material-ui/core";

const styles = {
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded: false,
        }

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.changeGroup = this.changeGroup.bind(this);
    }

    toggleDrawer() {
        this.setState({
          expanded: !this.state.expanded,
        })
    }

    changeGroup(group) {
      this.props.changeGroup(group);
      this.toggleDrawer();
    }

    render() {
        return (
            <>
              <Drawer anchor="left" open={this.state.expanded} onClose={this.toggleDrawer}>
                <div className={this.props.classes.list}>
                  <List>
                    {this.props.groups.map((group) => (
                      <ListItem button key={group.name}>
                        <ListItemText primary={group.name} onClick={() => this.changeGroup(group.name)} />
                      </ListItem>
                    ))}
                  </List>
                </div>
              </Drawer>
              <AppBar position="static">
                <Toolbar>
                  <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" className={this.props.classes.grow}>
                    <groupCtx.Consumer>
                      {group => group.name}
                    </groupCtx.Consumer>
                  </Typography>
                  <Button color="inherit">Sign out</Button>
                </Toolbar>
              </AppBar>
            </>
        );
    }
}

export const Nav = withStyles(styles)(NavbarContainer);
