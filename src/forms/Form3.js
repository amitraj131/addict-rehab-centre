import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import CheckboxLabels from './CheckboxLabels'
import FormControl from '@material-ui/core/FormControl';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import SelectGroup from './SelectGroup'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers'
import SimpleTextFeild from './SimpleTextFeild'
import Axios from 'axios';
import { CompareArrowsOutlined } from '@material-ui/icons';

export class Form3 extends Component {
  state={
    denialProblemsError:"",
    motivationFactorError:"",
    willingnessError:"",
    actionTakenError:"",
    nameCampOfficerError:"",
  }
  continue = e => {
    e.preventDefault();
    let isError=false;
    const alphabet=new RegExp('^[a-zA-Z]+$');
    const errors={ 
    denialProblemsError:"",
    motivationFactorError:"",
    willingnessError:"",
    actionTakenError:"",
    nameCampOfficerError:"",
  };

  if(this.props.values.denialProblems==="")
  {
    isError=true;
    errors.denialProblemsError="Select an option from dropdown";
  }

  if(this.props.values.motivationFactor==="")
  {
    isError=true;
    errors.motivationFactorError="Select an option from dropdown";
  }

  if(this.props.values.willingnessForTreatment==="")
  {
    isError=true;
    errors.willingnessError="Select an option from dropdown";
  }

  if(this.props.values.actionTaken==="")
  {
    isError=true;
    errors.actionTakenError="Select an option from dropdown";
  }

  if(this.props.values.nameCampOfficer!==""){
  // if(!alphabet.test(this.props.values.nameCampOfficer))
  // {
  //   isError=true;
  //   errors.nameCampOfficerError="Enter only letters"
  // }
}

  this.setState({
    ...this.state,
    ...errors
  });

    if(!isError)
    {
    this.props.nextStep();
    if(this.props.values.rs_totry){
      this.props.values.rs_totry="To Try - Someone in the Family/Friend were using. ";
    }else{
      this.props.values.rs_totry="";
    }
    if(this.props.values.rs_tofeelbetter){
      this.props.values.rs_tofeelbetter="To Feel Better and Confident or Happy. ";
    }else{
      this.props.values.rs_tofeelbetter="";
    }
    if(this.props.values.rs_toavoidproblems){
      this.props.values.rs_toavoidproblems="To Avoid Problems or Sadness. ";
    }else{
      this.props.values.rs_toavoidproblems="";
    }
    if(this.props.values.rs_other){
      this.props.values.rs_other="Others   ";
    }else{
      this.props.values.rs_other="";
    }

    if(this.props.values.rc_likedtheeffect){
      this.props.values.rc_likedtheeffect="Liked the effect and wanted more of it. ";
    }else{
      this.props.values.rc_likedtheeffect="";
    }
    if(this.props.values.rc_friendsforced){
      this.props.values.rc_friendsforced="Friends forced. ";
    }else{
      this.props.values.rc_friendsforced="";
    }
    if(this.props.values.rc_gaveconfidence){
      this.props.values.rc_gaveconfidence="Gave confidence. ";
    }else{
      this.props.values.rc_gaveconfidence="";
    }
    if(this.props.values.rc_craving){
      this.props.values.rc_craving="Craving. ";
    }else{
      this.props.values.rc_craving="";
    }
    if(this.props.values.rc_feltrelaxed){
      this.props.values.rc_feltrelaxed="Felt Relaxed. ";
    }else{
      this.props.values.rc_feltrelaxed="";
    }
    if(this.props.values.rc_others){
      this.props.values.rc_others="Others. ";
    }else{
      this.props.values.rc_others="";
    }

    if(this.props.values.s_familyissues){
      this.props.values.s_familyissues="Family or relationship issues. ";
    }else{
      this.props.values.s_familyissues="";
    }
    if(this.props.values.s_financialstress){
      this.props.values.s_financialstress="Financial Stress. ";
    }else{
      this.props.values.s_financialstress="";
    }
    if(this.props.values.s_workstree){
      this.props.values.s_workstree="Work Related Stress. ";
    }else{
      this.props.values.s_workstree="";
    }
    if(this.props.values.s_unknownstress){
      this.props.values.s_unknownstress="Reports Stressed but doesn't knows where or what. ";
    }else{
      this.props.values.s_unknownstress="";
    }
    
  
    //console.log(this.props.values.rs_totry+","+this.props.values.rs_tofeelbetter+","+this.props.values.rs_toavoidproblems+","+this.props.values.rs_other)
    //console.log(this.props.values.rs_other_stressor);
    Axios.post("https://addict-rehab-app.herokuapp.com/reasons_insert",{
      reg:this.props.values.reg,
      reason:this.props.values.rs_totry+" "+this.props.values.rs_tofeelbetter+" "+this.props.values.rs_toavoidproblems+" "+this.props.values.rs_other,
      reason_continued:this.props.values.rc_likedtheeffect+" "+this.props.values.rc_friendsforced+" "+this.props.values.rc_gaveconfidence+" "+this.props.values.rc_craving+" "+this.props.values.rc_feltrelaxed+" "+this.props.values.rc_others,
      stressor:this.props.values.s_familyissues+" "+this.props.values.s_financialstress+" "+this.props.values.s_workstree+" "+this.props.values.s_unknownstress+" "+this.props.values.rs_other_stressor,
      dol:this.props.values.dol,
      qtylast:this.props.values.qtylast,
      denialProblems:this.props.values.denialProblems,
      motivationFactor:this.props.values.motivationFactor,
      willingnessForTreatment:this.props.values.willingnessForTreatment,
      actionTaken:this.props.values.actionTaken,
      nameCampOfficer:this.props.values.nameCampOfficer
    });
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
            <h1>Impression Of Camp Officer about Patient</h1>
            <FormControl>
            <InputLabel htmlFor="denialProblems">Denial of Substance Use Problems</InputLabel>
            <Select
            native
            value={values.denialProblems}
            onChange={handleChange('denialProblems')}
            inputProps={{
                name: '',   
                id: 'denialProblems',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Mild"}>Mild</option>
            <option value={"Moderate"}>Moderate</option>
            <option value={"Severe"}>Servere</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.denialProblemsError}</div>
            </FormControl>
            

       
             <br />
             <br />
             <br />
             <FormControl>
            <InputLabel htmlFor="motivationFactor">Motivation Factor</InputLabel>
            <Select
            native
            value={values.motivationFactor}
            onChange={handleChange('motivationFactor')}
            inputProps={{
                name: '',
                id: 'motivationFactor',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Mild"}>Mild</option>
            <option value={"Moderate"}>Moderate</option>
            <option value={"Severe"}>Servere</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.motivationFactorError}</div>
            </FormControl>
            

             <br />
             <br />
             <br />
             <FormControl>
            <InputLabel htmlFor="willingnessForTreatment">Willingnessness for Treatment</InputLabel>
            <Select
            native
            value={values.willingnessForTreatment}
            onChange={handleChange('willingnessForTreatment')}
            inputProps={{
                name: '',
                id: 'willingnessForTreatment',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Unwilling"}>Unwilling</option>
            <option value={"Ambivalent"}>Ambivalent</option>
            <option value={"Willing"}>Willing</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.willingnessError}</div>
            </FormControl>
            <br />
            <br />
            <br />
            <FormControl>
            <InputLabel htmlFor="actionTaken">Action Taken</InputLabel>
            <Select
            native
            value={values.actionTaken}
            onChange={handleChange('actionTaken')}
            inputProps={{
                name: '',
                id: 'actionTaken',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Admitted"}>Admitted</option>
            <option value={"Referral"}>Referral</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.actionTakenError}</div>
            </FormControl>
            <br />
            <br />
            <br />
            <TextField
              label="Name of the Camp Officer/Administrative Officer" 
              type="string"
              onChange={handleChange('nameCampOfficer')}
              defaultValue={values.nameCampOfficer}
              margin="normal"
              fullWidth
              error={this.state.nameCampOfficerError}
              helperText={this.state.nameCampOfficerError}
            />
            <br />
            <br />
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
              >Save and Continue</Button>
            
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Form3;
