import React, { Component,useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import OtherSpecify from './OtherSpecify';
import CheckboxLabels from './CheckboxLabels';
import DateFeild from './DateFeild' ;
import SimpleTextFeild from './SimpleTextFeild';


export class Form2 extends Component {

  state={
    otherError:"",
    dolError:"",
    qtylastError:"",
  }

  continue = e => {
     e.preventDefault();
     const alphabet=new RegExp('^[a-zA-Z]+$');
     let isError = false;
    const errors = {
      otherError:"",
      dolError:"",
      qtylastError:"",
    };
/*
   if(this.props.values.s_others){
     if(this.props.values.rs_other_stressor===""){
       isError=true;
       errors.otherError="This field is required if Others selected"
     }
     else if(!alphabet.test(this.props.values.rs_other_stressor)){
       isError=true;
       errors.otherError="Only include characters";
     }
   }

   if(this.props.values.dol===""){
     isError=true;
     errors.dolError="Date of last drink field is required";
   }

   if(this.props.values.qtylast==="")
   {
     isError=true;
     errors.qtylastError="Quantity of last drink field is required"; 
   }
   */

    this.setState({
      ...this.state,
      ...errors
    });

    if(!isError){
      this.props.nextStep();
    }
    return isError;

  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange , handleCheckBoxChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='lg'
          >
            
            <AppBar title="Enter Personal Details" />
            <h1>Reasons to Start the Substance Use</h1>
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}

              placeholder="To Try - Someone in the Family/Friend were using"
              label="rs_totry"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="To Feel Better and Confident or Happy"
              label="rs_tofeelbetter"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder=" To Avoid Problems or Sadness"
              label="rs_toavoidproblems"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Others"
              label="rs_other"
            />
            <OtherSpecify
              otherSelected={values["rs_other"]}
              placeholder="Specify your reason for starting the substance use"
              type="text"
              values={values}
              handleChange={handleChange}
              label="rs_other_reasons"
              error={this.state.otherError}
              helperText={this.state.otherError}
            />
            

           
            <h1>Reason for Continued Use</h1>
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Liked the effect and wanted more of it."
              label="rc_likedtheeffect"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Friends forced"
              label="rc_friendsforced"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Gave confidence"
              label="rc_gaveconfidence"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Craving"
              label="rc_craving"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Felt Relaxed"
              label="rc_feltrelaxed"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Others"
              label="rc_others"
            />
            <OtherSpecify
              otherSelected={values["rc_others"]}
              placeholder="Specify your reason for continued use"
              type="text"
              values={values}
              handleChange={handleChange}
              label="rc_other_reasons"
              error={this.state.otherError}
              helperText={this.state.otherError}
            />
            
            <h1>Stressors</h1>
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Family or relationship issues"
              label="s_familyissues"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Financial Stress"
              label="s_financialstress"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Work Related Stress"
              label="s_workstree"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Reports Stressed but doesn't knows where or what."
              label="s_unknownstress"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Others"
              label="s_others"
            />
             <OtherSpecify
              otherSelected={values["s_others"]}
              placeholder="Specify your reason for stress"
              type="text"
              values={values}
              handleChange={handleChange}
              label="rs_other_stressor"
              error={this.state.otherError}
              helperText={this.state.otherError}
            />
            <br />

            <DateFeild
              values={values}
              handleChange={handleChange}
              label="dol"
              placeholder="Date of Last Drink"
              error={this.state.dolError}
              helperText={this.state.dolError}
            />

            <br />

            <SimpleTextFeild
              values={values}
              handleChange={handleChange}
              type="number"
              label="qtylast"
              placeholder="Quantity Of Last Drink(in ml)"
              type="number"
              error={this.state.qtylastError}
              helperText={this.state.qtylastError}
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

export default Form2;
