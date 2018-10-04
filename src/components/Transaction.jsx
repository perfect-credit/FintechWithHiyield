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
    if (this.props.type == "manual") {
      return (
      <Card>
        <CardActions onClick={this.expandToggle} disableActionSpacing className="transaction-actions">
          <Button
            aria-expanded={this.state.expanded}
            aria-label="Show create new group payment dialog"
            color={this.state.expanded ? "secondary" : "primary"}
            style={{ margin: "auto" }}
          >
            { this.state.expanded ? "Avbryt" : "Opprett manuell gruppebetaling" }
          </Button>
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

    return (
      <Card className="transaction-elem">
        <CardContent>
          <div className="transaction">
            <div>
              <Typography variant="display1">{this.props.name}</Typography>
              <Typography variant="caption">{this.props.date}</Typography>
            </div>
            {
              this.props.type == "group" ?
              <div className="group-money">
                <Typography variant="display1">100,00kr</Typography>
                <Typography variant="caption">Totalt 300,00kr</Typography>
              </div> :
              <div className="own-money">
                <Typography variant="subheading" style={{ color: "#bbb" }}>{this.props.currencyCode}&nbsp;</Typography>
                <Typography variant="display1">{this.props.amount.toFixed(2)}</Typography>
              </div>
            }
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
