import {
  Button,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Divider,
  IconButton,
  Typography
} from "@material-ui/core";

import Green from "@material-ui/core/colors/green";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


import "../stylesheets/transaction.scss";

export class Transaction extends React.Component { 
  constructor(props) {
    super(props);

    this.state = {
      expanded: false
    };

    this.expandToggle = this.expandToggle.bind(this);
  }

  expandToggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  render() {
    return (
      <Card style={{ height: "100%" }}>
        <CardContent>
          <div className="transaction">
            <div>
              <Typography variant="display1">Mat</Typography>
              <Typography variant="subheading">02/10-2018</Typography>
            </div>
            <div>
              <Typography variant="display1">300,00kr</Typography>
            </div>
          </div>
        </CardContent>
        <CardActions disableActionSpacing className="transaction-actions">
          {
            this.props.type == "group" ? 
              <>
                <IconButton aria-label="Accept">
                  <CheckIcon style={{color: Green[500]}} />
                </IconButton>
                <IconButton aria-label="Decline">
                  <CloseIcon  color="error" />
                </IconButton>
                <IconButton aria-label="Show more" onClick={this.expandToggle} aria-expanded={this.state.expanded} className={this.state.expanded ? "button-expanded" : ""}>
                  <ExpandMoreIcon />
                </IconButton>
              </> :
              <Button onClick={this.expandToggle} aria-expanded={this.state.expanded} aria-label="Show create new group payment dialog" color={this.state.expanded ? "secondary" : "primary"}>
                { this.state.expanded ? "Avbryt" : "Opprett gruppebetaling" }
              </Button>
            }
        </CardActions>
        <Divider/>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {this.props.children}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
