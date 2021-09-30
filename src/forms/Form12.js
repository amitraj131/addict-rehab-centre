import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleTextFeild from './SimpleTextFeild';
import SelectGroup from './SelectGroup';
import 'date-fns';
import CheckboxLabels from './CheckboxLabels';
import Axios from 'axios';
export class Form12 extends Component {
  
  
  continue = e => {
    e.preventDefault();

    if(this.props.values.ace_poverty){
      this.props.values.ace_poverty="Poverty and severe debt. ";
    }
    if(this.props.values.ace_early_parental_loss){
      this.props.values.ace_early_parental_loss="Early Parental Loss. ";
    }
    if(this.props.values.ace_extra_marital_affairs_of_parents){
      this.props.values.ace_extra_marital_affairs_of_parents="Extra Marital Affairs Of Parents. ";
    }
    if(this.props.values.ace_broken_home){
      this.props.values.ace_broken_home="Broken Home. ";
    }
    if(this.props.values.ace_violence){
      this.props.values.ace_violence="Domestic Violence. ";
    }
    if(this.props.values.ace_none){
      this.props.values.ace_none="None. ";
    }
    if(this.props.values.ace_sexually_issue){
      this.props.values.ace_sexually_issue="Sexual Issues. ";
    }

    if(this.props.values.ace_running_away_from_home){
      this.props.values.ace_running_away_from_home="Running Away From Home. ";
    }
    if(this.props.values.ace_frequent_physical_fights){
      this.props.values.ace_frequent_physical_fights="Frequent Physical Fights. ";
    }
    if(this.props.values.ace_destruction_of_others_properties){
      this.props.values.ace_destruction_of_others_properties="Destruction Of Others Properties. ";
    }
    if(this.props.values.ace_stealing){
      this.props.values.ace_stealing="Stealing. ";
    }
    if(this.props.values.ace_scholastic_backwardness){
      this.props.values.ace_scholastic_backwardness="Scholastic Backwardness. ";
    }
    if(this.props.values.ace_experimenting_with_drugs){
      this.props.values.ace_experimenting_with_drugs="Experimenting With Drugs. ";
    }
    if(this.props.values.ace_alcohol){
      this.props.values.ace_alcohol="Alcohol. ";
    }
    if(this.props.values.ace_gambling){
      this.props.values.ace_gambling="Gambling. ";
    }
    if(this.props.values.ace_sexual_issues){
      this.props.values.ace_sexual_issues="Sexual Issues. ";
    }
    if(this.props.values.ace_others){
      this.props.values.ace_others="Others. ";
    }

    Axios.post("http://localhost:3002/sectionD_insert",{
      reg_no:this.props.values.reg,
      ace:this.props.values.ace_poverty+""+this.props.values.ace_early_parental_loss+""+this.props.values.ace_extra_marital_affairs_of_parents+""+this.props.values.ace_broken_home
               +""+this.props.values.ace_violence+""+this.props.values.ace_sexually_issue+""+this.props.values.ace_none,
      behaviour:this.props.values.ace_running_away_from_home+""+this.props.values.ace_frequent_physical_fights+""+this.props.values.ace_destruction_of_others_properties+""+this.props.values.ace_stealing
                +""+this.props.values.ace_scholastic_backwardness+""+this.props.values.ace_experimenting_with_drugs+""+this.props.values.ace_alcohol+""+this.props.values.ace_gambling+""+this.props.values.ace_sexual_issues+""+this.props.values.ace_others,
      achievementsInEducation:this.props.values.achievementsInEducation,
      noOfYearsOfEducation:this.props.values.noOfYearsOfEducation,
      achievementsInExtraCurricular:this.props.values.achievementsInExtraCurricular,
      areYouReligious:this.props.values.areYouReligious,
      pastTreatmentHistory:this.props.values.pastTreatmentHistory,
      maximum_period_of_abstenence:this.props.values.maximum_period_of_abstenence,
      possible_factors_for_abstinence:this.props.values.possible_factors_for_abstinence,
      significant_psychological_problems:this.props.values.significant_psychological_problems,


    })


    this.props.nextStep();
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
            <h1>Childhood and Adolescent History</h1>
            <br/>
            <h3>Did you experience the following in your childhood</h3>
            <br/>
            <CheckboxLabels
              label="ace_poverty"
              placeholder="Poverty and severe debt"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />

            <CheckboxLabels
              label="ace_early_parental_loss"
              placeholder="Early Parental Loss"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            
            <CheckboxLabels
              label="ace_extra_marital_affairs_of_parents"
              placeholder="Extra Marital Affairs Of Parents"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            
            <CheckboxLabels
              label="ace_broken_home"
              placeholder="Broken Home"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            
            <CheckboxLabels
              label="ace_violence"
              placeholder="Domestic Violence"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            
            <CheckboxLabels
              label="ace_sexually_issue"
              placeholder="Sexual Issue"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            
            <CheckboxLabels
              label="ace_none"
              placeholder="None"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <br/>
            <h3>Did you have any of these behaviours in childhood</h3>
            <br/>
            <CheckboxLabels
              label="ace_running_away_from_home"
              placeholder="Running Away From Home"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <CheckboxLabels
              label="ace_frequent_physical_fights"
              placeholder="Frequent Physical Fights"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <CheckboxLabels
              label="ace_destruction_of_others_properties"
              placeholder="Destruction Of Others Properties"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <CheckboxLabels
              label="ace_stealing"
              placeholder="Stealing"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <CheckboxLabels
              label="ace_scholastic_backwardness"
              placeholder="Scholastic Backwardness"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <CheckboxLabels
              label="ace_experimenting_with_drugs"
              placeholder="Experimenting With Drugs"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <CheckboxLabels
              label="ace_alcohol"
              placeholder="Alcohol"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <CheckboxLabels
              label="ace_gambling"
              placeholder="Gambling"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <CheckboxLabels
              label="ace_sexual_issues"
              placeholder="Sexual Issues"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <CheckboxLabels
              label="ace_others"
              placeholder="Others"
              handleCheckBoxChange={handleCheckBoxChange}
              values={values}
            />
            <br/>
            <h1>Education History</h1>
            <br/>
            <SimpleTextFeild
              label="achievementsInEducation"
              placeholder="Achievements in Education"
              values={values}
              handleChange={handleChange}
              type="text"
            />
            <br/>
            <SimpleTextFeild
              label="noOfYearsOfEducation"
              placeholder="Number of Years of Education"
              values={values}
              handleChange={handleChange}
              type="number"
            />
            <br/>
            <SimpleTextFeild
              label="achievementInExtraCurricular"
              placeholder="Achievements in Extra Curricular Activities"
              values={values}
              handleChange={handleChange}
              type="text"
            />
            <br/>

            <h1>Religious Beliefs and Behaviour</h1>
            <br/>
            <SelectGroup
              label="areYouReligious"
              values={values}
              handleChange={handleChange}
              placeholder="Are you a Religious Believer"
              options={["Believer" , "Non-Believer" , "In-different"]}
            />
            <br/>
            <SimpleTextFeild
              label="pastTreatmentHistory"
              type="text"
              placeholder="Past Treatment History"
              values={values}
              handleChange={handleChange}
            />
            <br/>
            <SimpleTextFeild
              label="maximum_period_of_abstenence"
              type="text"
              placeholder="Maximum Period Of Abstinence"
              values={values}
              handleChange={handleChange}
            />
            <br/>
            <SimpleTextFeild
              label="possible_factors_for_abstinence"
              type="text"
              placeholder="Possible Factors For Abstinence"
              values={values}
              handleChange={handleChange}
            />
            <br/>
            <SimpleTextFeild
              label="significant_psychological_problems"
              type="text"
              placeholder="Significant Psychological Problems"
              values={values}
              handleChange={handleChange}
            />
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
              >Continue</Button>
            
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Form12;
