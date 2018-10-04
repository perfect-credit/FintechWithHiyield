import * as React from "react";

import { withStyles } from '@material-ui/core/styles';

import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import "../stylesheets/navbar.scss";

import { Divider, List, ListItem, AppBar, Drawer, Toolbar, Typography, ListItemIcon, Button, IconButton, ListItemText } from "@material-ui/core";

const styles = {
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    list: {
        width: 350,
        overflowX: "hidden"
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
                <div className={this.props.classes.list} style={{ height: "100%" }}>
                  <List style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                    {
                      this.props.groups.length === 0 ?
                      <ListItem>
                        <ListItemText primary="Ingen grupper tilgjengelige" />
                      </ListItem> :
                      this.props.groups.map((group) => (
                        <div key={group.id} onClick={() => this.changeGroup(group.name)}>
                          <ListItem button>
                            <ListItemText primary={group.name} />
                          </ListItem>
                          {group.users.map(u => <ListItem key={u.id} className="nav-name"><ListItemText primary={u.name} /></ListItem>)}
                          <Divider />
                        </div>
                      ))
                    }
                    <ListItem button style={{ marginTop: "auto" }}>
                      <ListItemIcon>
                        <AddCircleOutlineIcon />
                      </ListItemIcon>
                      <ListItemText primary="Add group" />
                    </ListItem> 
                  </List>
                </div>
              </Drawer>
              <AppBar position="static">
                <Toolbar>
                  <IconButton className={this.props.classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer}>
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="title" color="inherit" className={this.props.classes.grow}>Kollect</Typography>
                  <div>
										<IconButton aria-label="Setting">
											<SettingsIcon style={{ color: "white" }} />
										</IconButton>
                    <Button color="inherit">Sign out</Button>
                  </div>
                </Toolbar>
              </AppBar>
            </>
        );
    }
}

export const Nav = withStyles(styles)(NavbarContainer);
