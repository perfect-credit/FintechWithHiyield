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
      expanded: false,
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
      <Card style={{ border: "3px solid #e3f2fd", transition: "height 0.5s" }}>
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
      <Card className="transaction-elem" style={this.props.type == "own" ? { backgroundColor: "#e3f2fd", paddingTop: ".7em" } : (this.props.transaction.requestUserId == this.props.user.id ? { border: "2px solid rgb(227, 242, 253)" } : (this.props.transaction.resolved ? {} : { border: "2px solid #ffe0b2" }))}>
        <CardContent style={{paddingBottom: "2em"}}>
          <div className="transaction">
            <div>
              <Typography variant="display1">{this.props.type == "own" ? this.props.transaction.creditorName : this.props.transaction.name}</Typography>
              <Typography variant="caption">{this.props.type == "own" ? this.props.transaction.transactionDate : (`Opprettet ${this.props.transaction.date} av ${(this.props.group.users.find(u => u.id == this.props.transaction.requestUserId) || {name: ''}).name}`)}</Typography>
            </div>
            {
              this.props.type == "group" ?
              <div className="group-money">
                <div className="own-money">
                  <Typography variant="subheading" style={{ color: "#bbb" }}>NOK&nbsp;</Typography>
                  <Typography variant="display1">{(this.props.transaction.amount / this.props.group.users.length).toFixed(2)}</Typography>
                </div>
                <Typography variant="caption">NOK {this.props.transaction.amount.toFixed(2)}</Typography>
              </div> :
              <div className="own-money">
                <Typography variant="subheading" style={{ color: "#bbb" }}>{this.props.transaction.localAmount.currencyCode}&nbsp;</Typography>
                <Typography variant="display1">{this.props.transaction.localAmount.amount.toFixed(2)}</Typography>
              </div>
            }
          </div>
        </CardContent>
        <Divider/>
        <CardActions disableActionSpacing className="transaction-actions">
          {
            this.props.type == "group" ? 
              <>
                { this.props.user.id == this.props.transaction.requestUserId || this.props.transaction.resolved ? "" :
                  <>
                    <IconButton aria-label="Accept" onClick={() => this.props.popElem(this.props.transaction.id)}>
                      <CheckIcon style={{color: Green[500]}} />
                    </IconButton>
                    <IconButton aria-label="Decline">
                      <CloseIcon  color="error" />
                    </IconButton>
                  </>
                }
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
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit style={this.props.type == "own" ? { backgroundColor: "#FBFFFF" } : {}}>
          <CardContent>
            {this.props.children}
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}
