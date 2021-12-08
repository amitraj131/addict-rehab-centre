import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Axios from 'axios'; 

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
 
  };

  download = e =>{
    e.preventDefault();
    this.props.print();

    
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { brothers,children, lastName, dor, test ,drugs,hospitals ,reasonStart , check , untowardIncident,sexualProblems}
    } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='lg'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={brothers.length} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={console.log(sexualProblems)} />
              </ListItem>
              <ListItem>
                 <ListItemText primary="Date of Registration" secondary={dor} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={hospitals.length} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Drugs" secondary={console.log(children)}  />
              </ListItem>
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>          

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
