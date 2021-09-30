import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SimpleTextFeild from './SimpleTextFeild';
import 'date-fns';


export class Form4 extends Component {
  state={
    pulseError:"",
    bpError:"",
    weightError:"",
    heightError:"",
    sugarError:"",
    otherError:"",
  }
  continue = e => {
    e.preventDefault();
    let isError=false;
    const alphanumeric=new RegExp('^[a-zA-Z0-9]+$');
    const errors={
      pulseError:"",
      bpError:"",
      weightError:"",
      heightError:"",
      sugarError:"",
      otherError:"",
    }
/*
    if(this.props.values.pulseRate==="")
    {
      isError=true;
      errors.pulseError="This field is required";
    }

    if(this.props.values.bloodPressure==="")
    {
      isError=true;
      errors.bpError="This field is required";
    }

    if(this.props.values.weight==="")
    {
      isError=true;
      errors.weightError="This field is required";
    }

    if(this.props.values.sugar==="")
    {
      isError=true;
      errors.sugarError="This field is required";
    }

    if(this.props.values.otherdetails!=="")
    {
      if(!alphanumeric.test(this.props.values.otherdetails))
      {
        isError=true;
        errors.otherError="Don't include special characters";
      }
    }

    if(this.props.values.height==="")
    {
      isError=true;
      errors.heightError="This field is required";
    }
*/
    this.setState({
      ...this.state,
      ...errors
    });

    if(!isError)
    {
      this.props.nextStep();
    }
    
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='lg'
          >
            
            <AppBar title="Enter Personal Details" />
            <h1>Physical Condition at the time of Admission</h1>
             

             <SimpleTextFeild
                label="pulseRate"
                placeholder="Pulse Rate(in BPM)"
                values={values}
                handleChange={handleChange}
                type="number"
                error={this.state.pulseError}
                helperText={this.state.pulseError}
             />
             <br />
             <SimpleTextFeild
                label="bloodPressure"
                placeholder="Blood Pressure(in mm Hg)"
                values={values}
                handleChange={handleChange}
                type="number"
                error={this.state.bpError}
                helperText={this.state.bpError}
             />
            <br/>
            <SimpleTextFeild
                label="weight"
                placeholder="Weight(in KG)"
                values={values}
                handleChange={handleChange}
                type="number"
                error={this.state.weightError}
                helperText={this.state.weightError}
             />
            <br />
            <SimpleTextFeild
                label="height"
                placeholder="Height(in cms)"
                values={values}
                handleChange={handleChange}
                type="number"
                error={this.state.heightError}
                helperText={this.state.heightError}
             />
            <br />
            <SimpleTextFeild
                label="sugar"
                placeholder="Sugar"
                values={values}
                handleChange={handleChange}
                type="number"
                error={this.state.sugarError}
                helperText={this.state.sugarError}
             />
            <br />
            <SimpleTextFeild
                label="otherdetails"
                placeholder="Other Details"
                values={values}
                handleChange={handleChange}
                error={this.state.otherError}
                helperText={this.state.otherError}
             />
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
              >Continue</Button>
            
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Form4;
