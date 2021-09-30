import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleTextFeild from './SimpleTextFeild';
import SelectGroup from './SelectGroup';
import FamilyDrugHistory from './FamilyDrugHistory';
import UntowardExplain from './UntowardExplain';
import Axios from 'axios';

export class Form7 extends Component {
  state={
    untowardError:"",
    famhistError:"",
  }
  continue = e => {
    e.preventDefault();
    let isError=false;
    const errors={
      untowardError:"",
      famhistError:"",
    }

    if(this.props.values.familyHistory==="")
    {
      isError=true;
      errors.famhistError="Select an option from dropdown"
    }

    if(this.props.values.untowardIncident==="")
    {
      isError=true;
      errors.untowardError="Select an option from dropdown"
    }

    this.setState({
      ...this.state,
      ...errors
    });

if(!isError)
{
    this.props.nextStep();

      //Withdrawal Symptoms
      if(this.props.values.w_sweating){
        this.props.values.w_sweating="Sweating. ";
      }else{
        this.props.values.w_sweating="";
      }
      if(this.props.values.w_palpitation){
        this.props.values.w_palpitation="Palpitation. ";
      }else{
        this.props.values.w_palpitation="";
      }
      if(this.props.values.w_tremors){
        this.props.values.w_tremors="Tremors. ";
      }else{
        this.props.values.w_tremors="";
      }
      if(this.props.values.w_insomnia){
        this.props.values.w_insomnia="Insomnia. ";
      }else{
        this.props.values.w_insomnia="";
      }
      if(this.props.values.w_fits){
        this.props.values.w_fits="Fits. ";
      }else{
        this.props.values.w_fits="";
      }
      if(this.props.values.w_nausea){
        this.props.values.w_nausea="Nausea. ";
      }else{
        this.props.values.w_nausea="";
      }
      if(this.props.values.w_achesandpains){
        this.props.values.w_achesandpains="Aches and Pains. ";
      }else{
        this.props.values.w_achesandpains="";
      }
      if(this.props.values.w_anxiety){
        this.props.values.w_anxiety="Anxiety. ";
      }else{
        this.props.values.w_anxiety="";
      }
      if(this.props.values.w_restlessness){
        this.props.values.w_restlessness="Restlessness. ";
      }else{
        this.props.values.w_restlessness="";
      }
      if(this.props.values.w_tactile){
        this.props.values.w_tactile="Tactile. ";
      }else{
        this.props.values.w_tactile="";
      }
      if(this.props.values.w_illusions){
        this.props.values.w_illusions="Illusions. ";
      }else{
        this.props.values.w_illusions="";
      }

      if(this.props.values.mppast_Haematemesis){
        this.props.values.mppast_Haematemesis="Haematemesis. ";
      }else{
        this.props.values.mppast_Haematemesis="";
      }
      if(this.props.values.mppast_jaundice){
        this.props.values.mppast_jaundice="Jaundice. ";
      }else{
        this.props.values.mppast_jaundice="";
      }
      if(this.props.values.mppast_headinjury){
        this.props.values.mppast_headinjury="Head Injury. ";
      }else{
        this.props.values.mppast_headinjury="";
      }
      if(this.props.values.mppast_siezure){
        this.props.values.mppast_siezure="Seizure. ";
      }else{
        this.props.values.mppast_siezure="";
      }
      if(this.props.values.mppast_accidents){
        this.props.values.mppast_accidents="Accidents. ";
      }else{
        this.props.values.mppast_accidents="";
      }
      if(this.props.values.mppast_abscesses){
        this.props.values.mppast_abscesses="Abscesses. ";
      }else{
        this.props.values.mppast_abscesses="";
      }
      if(this.props.values.mppast_bleedingpiles){
        this.props.values.mppast_bleedingpiles="Bleeding Piles. ";
      }else{
        this.props.values.mppast_bleedingpiles="";
      }
      if(this.props.values.mppast_skin_problems){
        this.props.values.mppast_skin_problems="Skin Problems. ";
      }else{
        this.props.values.mppast_skin_problems="";
      }
      if(this.props.values.mppast_nervepains){
        this.props.values.mppast_nervepains="Nerve Pains. ";
      }else{
        this.props.values.mppast_nervepains="";
      }
      if(this.props.values.mppast_other){
        this.props.values.mppast_other="Other. ";
      }else{
        this.props.values.mppast_other="";
      }


      if(this.props.values.mppresent_Haematemesis){
        this.props.values.mppresent_Haematemesis="Haematemesis. ";
      }else{
        this.props.values.mppresent_Haematemesis="";
      }
      if(this.props.values.mppresent_jaundice){
        this.props.values.mppresent_jaundice="Jaundice. ";
      }else{
        this.props.values.mppresent_jaundice="";
      }
      if(this.props.values.mppresent_headinjury){
        this.props.values.mppresent_headinjury="Head Injury. ";
      }else{
        this.props.values.mppresent_headinjury="";
      }
      if(this.props.values.mppresent_siezure){
        this.props.values.mppresent_siezure="Seizure. ";
      }else{
        this.props.values.mppresent_siezure="";
      }
      if(this.props.values.mppresent_accidents){
        this.props.values.mppresent_accidents="Accidents. ";
      }else{
        this.props.values.mppresent_accidents="";
      }
      if(this.props.values.mppresent_abscesses){
        this.props.values.mppresent_abscesses="Abscesses. ";
      }else{
        this.props.values.mppresent_abscesses="";
      }
      if(this.props.values.mppresent_bleedingpiles){
        this.props.values.mppresent_bleedingpiles="Bleeding Piles. ";
      }else{
        this.props.values.mppresent_bleedingpiles="";
      }
      if(this.props.values.mppresent_skin_problems){
        this.props.values.mppresent_skin_problems="Skin Problems. ";
      }else{
        this.props.values.mppresent_skin_problems="";
      }
      if(this.props.values.mppresent_nervepains){
        this.props.values.mppresent_nervepains="Nerve Pains. ";
      }else{
        this.props.values.mppresent_nervepains="";
      }
      if(this.props.values.mppresent_other){
        this.props.values.mppresent_other="Other. ";
      }else{
        this.props.values.mppresent_other="";
      }

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

    Axios.post("http://localhost:3002/section_b_insert",{
      reg:this.props.values.reg,  
      pulseRate:this.props.values.pulseRate,
      bloodPressure:this.props.values.bloodPressure,
      weight:this.props.values.weight,
      height:this.props.values.height,
      sugar:this.props.values.sugar,
      otherdetails:this.props.values.otherDetails,
      aws:this.props.values.w_sweating+""+this.props.values.w_palpitation+""+this.props.values.w_tremors+""+this.props.values.w_insomnia+""+this.props.values.w_fits+""+this.props.values.w_nausea+""+this.props.values.w_achesandpains+""+this.props.values.w_anxiety+""+this.props.values.w_restlessness+""+this.props.values.w_tactile+""+this.props.values.w_illusions,
      mc_past:this.props.values.mppast_Haematemesis+""+this.props.values.mppast_jaundice+""+this.props.values.mppast_headinjury+""+this.props.values.mppast_siezure+""+this.props.values.mppast_accidents+""+this.props.values.mppast_abscesses+""+this.props.values.mppast_bleedingpiles+""+this.props.values.mppast_skin_problems+""+this.props.values.mppast_nervepains+""+this.props.values.mppast_other,
      mc_present:this.props.values.mppresent_Haematemesis+""+this.props.values.mppresent_jaundice+""+this.props.values.mppresent_headinjury+""+this.props.values.mppresent_siezure+""+this.props.values.mppresent_accidents+""+this.props.values.mppresent_abscesses+""+this.props.values.mppresent_bleedingpiles+""+this.props.values.mppresent_skin_problems+""+this.props.values.mppresent_nervepains+""+this.props.values.mppresent_other,
      ch_health_prblms:this.props.values.chp_diabetes+""+this.props.values.chp_liver_disorders+""+this.props.values.chp_epilespy+""+this.props.values.chp_respiratory_problem+""+this.props.values.chp_pulmonary_TB+""+this.props.values.chp_chronic_bronchitis+""+this.props.values.chp_bronchial_asthama+""+this.props.values.chp_cardiac_problems+""+this.props.values.chp_infections+""+this.props.values.chp_others,
      psy_compl_past:this.props.values.pcpast_consfusion+""+this.props.values.pcpast_seizure+""+this.props.values.pcpast_depression+""+this.props.values.pcpast_suicidal_ideation+""+this.props.values.pcpast_aggressive_outburst+""+this.props.values.pcpast_hallucination+""+this.props.values.pcpast_paranoid_ideas+""+this.props.values.pcpast_others_specify,
      psy_compl_present:this.props.values.pcpresent_consfusion+""+this.props.values.pcpresent_seizure+""+this.props.values.pcpresent_depression+""+this.props.values.pcpresent_suicidal_ideation+""+this.props.values.pcpresent_aggressive_outburst+""+this.props.values.pcpresent_hallucination+""+this.props.values.pcpresent_paranoid_ideas+""+this.props.values.pcpresent_others_specify,
      headInjury:this.props.values.headInjury,
      allergy:this.props.values.allergy,
      familyHistory:this.props.values.familyHistory,
      whoInfam:this.props.values.whoInFamily,
      drugFamily:this.props.values.drugFamily,
      familyPsychiatric:this.props.values.familyPsychiatric,
      untowardIncident:this.props.values.untowardIncident,
      describeUntoward:this.props.values.describeUntoward,
      untowardActionTaken:this.props.values.untowardActionTaken,

    });
  }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange , handleCheckBoxChange} = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='lg'
          >
            
            <AppBar title="Enter Personal Details" />
            <h1>Other Information</h1>
            <br/>
            <SimpleTextFeild
                values={values}
                handleChange={handleChange}
                label="headInjury"
                placeholder="History of previous head injuries, (if any)"
            />
            <br/>
            <SimpleTextFeild
                values={values}
                handleChange={handleChange}
                placeholder="Knowledge of allergy to specific drugs, (if known)"
                label="allergy"
            
            />
            <br/>
            <SelectGroup
                values={values}
                handleChange={handleChange}
                options={["Yes" , "No"]}
                label="familyHistory"
                placeholder="Family Histoy of Alcoholism/Drug Abuse/Psychiatric Illness"
                error={this.state.famhistError}
                helperText={this.state.famhistError}
            />
            <br/>
            <FamilyDrugHistory
                values={values}
                handleChange={handleChange}
                status={values.familyHistory}
            />
            <br/>
            <SelectGroup
                values={values}
                handleChange={handleChange}
                options={["Yes" , "No"]}
                label="untowardIncident"
                placeholder="Any untoward incident occured during treatment"
                error={this.state.untowardError}
                helperText={this.state.untowardError}
            />
            <br/>
            <UntowardExplain
                values={values}
                handleChange={handleChange}
                status={values.untowardIncident}
            />
            <br/>
            <br/>
            <br/>
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

export default Form7;
