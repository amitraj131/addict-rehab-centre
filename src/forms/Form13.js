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
export class Form13 extends Component {

  state={
    pcpast_otherError:"",
    pcpresent_otherError:"",
  }

  continue = e => {
    e.preventDefault();
    let isError=false;
    const alphabet=new RegExp('^[a-zA-Z]+$');
    const errors={
      pcpast_otherError:"",
      pcpresent_otherError:"",
    }
/*
    if(this.props.values.pcpast_others){
      if(this.props.values.pcpast_others_specify===""){
        isError=true;
        errors.pcpast_otherError="This field is required if Others selected"
      }
      else if(!alphabet.test(this.props.values.pcpast_others_specify)){
        isError=true;
        errors.pcpast_otherError="Only include characters";
      }
    }

    if(this.props.values.pcpresent_others){
      if(this.props.values.pcpresent_others_specify===""){
        isError=true;
        errors.pcpresent_otherError="This field is required if Others selected"
      }
      else if(!alphabet.test(this.props.values.pcpresent_others_specify)){
        isError=true;
        errors.pcpresent_otherError="Only include characters";
      }
    }
*/
    this.setState({
      ...this.state,
      ...errors
    });

    if(!isError){
    this.props.nextStep();

    //Chronic health problems
    if(this.props.values.chp_diabetes){
      this.props.values.chp_diabetes="Diabetes. ";
    }else{
      this.props.values.chp_diabetes="";
    }
    if(this.props.values.chp_liver_disorders){
      this.props.values.chp_liver_disorders="Liver Disorders. ";
    }else{
      this.props.values.chp_liver_disorders="";
    }
    if(this.props.values.chp_epilespy){
      this.props.values.chp_epilespy="Epilepsy. ";
    }else{
      this.props.values.chp_epilespy="";
    }
    if(this.props.values.chp_respiratory_problem){
      this.props.values.chp_respiratory_problem="Respiratory Problem. ";
    }else{
      this.props.values.chp_respiratory_problem="";
    }
    if(this.props.values.chp_pulmonary_TB){
      this.props.values.chp_pulmonary_TB="Pulmonary Tuberculosis. ";
    }else{
      this.props.values.chp_pulmonary_TB="";
    }
    if(this.props.values.chp_chronic_bronchitis){
      this.props.values.chp_chronic_bronchitis="Chronic Bronchitis. ";
    }else{
      this.props.values.chp_chronic_bronchitis="";
    }
    if(this.props.values.chp_bronchial_asthama){
      this.props.values.chp_bronchial_asthama="Bronchial Asthama. ";
    }else{
      this.props.values.chp_bronchial_asthama="";
    }
    if(this.props.values.chp_cardiac_problems){
      this.props.values.chp_cardiac_problems="Cardiac Problems. ";
    }else{
      this.props.values.chp_cardiac_problems="";
    }
    if(this.props.values.chp_infections){
      this.props.values.chp_infections="Infections. ";
    }else{
      this.props.values.chp_infections="";
    }
    if(this.props.values.chp_none){
      this.props.values.chp_none="None ";
    }else{
      this.props.values.chp_none="";
    }
    if(this.props.values.chp_others){
      this.props.values.chp_others="Others ";
    }else{
      this.props.values.chp_others="";
    }


    //Psychiatric Complications Past
    
     if(this.props.values.pcpast_consfusion){
      this.props.values.pcpast_consfusion="Confusion. ";
    }else{
      this.props.values.pcpast_consfusion="";
    }
     if(this.props.values.pcpast_seizure){
      this.props.values.pcpast_seizure="Seizure during withdrawal. ";
    }else{
      this.props.values.pcpast_seizure="";
    }
    if(this.props.values.pcpast_depression){
      this.props.values.pcpast_depression="Depression. ";
    }else{
      this.props.values.pcpast_depression="";
    }
     if(this.props.values.pcpast_suicidal_ideation){
      this.props.values.pcpast_suicidal_ideation="Suicidal Ideation. ";
    }else{
      this.props.values.pcpast_suicidal_ideation="";
    }
    if(this.props.values.pcpast_aggressive_outburst){
      this.props.values.pcpast_aggressive_outburst="Aggressive Outburst. ";
    }else{
      this.props.values.pcpast_aggressive_outburst="";
    }
     if(this.props.values.pcpast_hallucination){
      this.props.values.pcpast_hallucination="Hallucinaiton. ";
    }else{
      this.props.values.pcpast_hallucination="";
    }
    if(this.props.values.pcpast_paranoid_ideas){
      this.props.values.pcpast_paranoid_ideas="Paranoid Ideas. ";
    }else{
      this.props.values.pcpast_paranoid_ideas="";
    }
    if(this.props.values.pcpast_none){
      this.props.values.pcpast_none="None ";
    }else{
      this.props.values.pcpast_none="";
    }
    
    //Psychiatric Complications Present

    if(this.props.values.pcpresent_consfusion){
      this.props.values.pcpresent_consfusion="Confusion. ";
    }else{
      this.props.values.pcpresent_consfusion="";
    }
     if(this.props.values.pcpresent_seizure){
      this.props.values.pcpresent_seizure="Seizure during withdrawal. ";
    }else{
      this.props.values.pcpresent_seizure="";
    }
    if(this.props.values.pcpresent_depression){
      this.props.values.pcpresent_depression="Depression. ";
    }else{
      this.props.values.pcpresent_depression="";
    }
     if(this.props.values.pcpresent_suicidal_ideation){
      this.props.values.pcpresent_suicidal_ideation="Suicidal Ideation. ";
    }else{
      this.props.values.pcpresent_suicidal_ideation="";
    }
    if(this.props.values.pcpresent_aggressive_outburst){
      this.props.values.pcpresent_aggressive_outburst="Aggressive Outburst. ";
    }else{
      this.props.values.pcpresent_aggressive_outburst="";
    }
     if(this.props.values.pcpresent_hallucination){
      this.props.values.pcpresent_hallucination="Hallucinaiton. ";
    }else{
      this.props.values.pcpresent_hallucination="";
    }
    if(this.props.values.pcpresent_paranoid_ideas){
      this.props.values.pcpresent_paranoid_ideas="Paranoid Ideas. ";
    }else{
      this.props.values.pcpresent_paranoid_ideas="";
    }
    if(this.props.values.pcpresent_none){
      this.props.values.pcpresent_none="None ";
    }else{
      this.props.values.pcpresent_none="";
    }
    
  }

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
            <h1>Chronic Health Problems</h1>
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Diabetes"
              label="chp_diabetes"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Liver Disorders"
              label="chp_liver_disorders"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Epilepsy"
              label="chp_epilespy"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Respiratory Problem"
              label="chp_respiratory_problem"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Pulmonary Tuberculosis"
              label="chp_pulmonary_TB"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Chronic Bronchitis"
              label="chp_chronic_bronchitis"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Bronchial Asthama"
              label="chp_bronchial_asthama"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Cardiac Problems"
              label="chp_cardiac_problems"
            />
            
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Infections"
              label="chp_infections"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="None"
              label="chp_none"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Others"
              label="chp_others"
            />
            <OtherSpecify
              otherSelected={values["chp_others"]}
              placeholder="Specify your chronic health problems"
              type="text"
              values={values}
              handleChange={handleChange}
              label="pcpast_others_specify"
              error={this.state.pcpast_otherError}
              helperText={this.state.pcpast_otherError}
            />
            

           
            <h1>Psychiatric Complications (Past)</h1>
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Confusion"
              label="pcpast_consfusion"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Seizure during withdrawal"
              label="pcpast_seizure"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Depression"
              label="pcpast_depression"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Suicidal Ideation or attempts"
              label="pcpast_suicidal_ideation"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Aggressive Outburst"
              label="pcpast_aggressive_outburst"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Hallucinaiton"
              label="pcpast_hallucination"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Paranoid Ideas"
              label="pcpast_paranoid_ideas"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="None"
              label="pcpast_none"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Others"
              label="pcpast_others"
            />
            
            <OtherSpecify
              otherSelected={values["pcpast_others"]}
              placeholder="Specify your past psychiatric complication"
              type="text"
              values={values}
              handleChange={handleChange}
              label="pcpast_others_specify"
              error={this.state.pcpast_otherError}
              helperText={this.state.pcpast_otherError}
            />
            <h1>Psychiatric Complications (Present)</h1>
            <br/>
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Confusion"
              label="pcpresent_consfusion"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Seizure during withdrawal"
              label="pcpresent_seizure"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Depression"
              label="pcpresent_depression"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Suicidal Ideation or attempts"
              label="pcpresent_suicidal_ideation"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Aggressive Outburst"
              label="pcpresent_aggressive_outburst"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Hallucinaiton"
              label="pcpresent_hallucination"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Paranoid Ideas"
              label="pcpresent_paranoid_ideas"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="None"
              label="pcpresent_none"
            />
            <CheckboxLabels
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
              placeholder="Others"
              label="pcpresent_others"
            />
            <OtherSpecify
              otherSelected={values["pcpresent_others"]}
              placeholder="Specify your Present psychiatric complication"
              type="text"
              values={values}
              handleChange={handleChange}
              label="pcpresent_others_specify"
              error={this.state.pcpresent_otherError}
              helperText={this.state.pcpresent_otherError}
            />
            
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

export default Form13;
