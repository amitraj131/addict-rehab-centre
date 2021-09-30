import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IfYesSpecify from './IfYesSpecify';
import SimpleTextFeild from './SimpleTextFeild';
import SelectGroup from './SelectGroup';
import 'date-fns';
import Axios from "axios";


export class Form10 extends Component {
  continue = e => {
    e.preventDefault();
    
    Axios.post("http://localhost:3002/marital_hist_insert",{
        reg_no:this.props.values.reg,
        wifeName:this.props.values.wifeName,
        wifeAge:this.props.values.wifeAge,
        wifeReligion:this.props.values.wifeReligion,
        wifeEducation:this.props.values.wifeEducation,
        wifeOccupation:this.props.values.wifeOccupation,
        wifeMonIncome:this.props.values.wifeMonIncome,
        wifeOther:this.props.values.wifeOther,
        yearsOfMarriage:this.props.values.yearsOfMarriage,
        typeOfMarriage:this.props.values.typeOfMarriage,
        subsequentMarriages:this.props.values.subsequentMarriages,
        seperateDueToAddiction:this.props.values.seperateDueToAddiction,
        periodOfSep:this.props.values.periodOfSeparationFromWife,
        suspicious:this.props.values.suspiciousOfWife,
        famVio:this.props.values.familyViolence,

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
            <h1>Marital History</h1>
            <br/>
            <SimpleTextFeild
                values={values}
                handleChange={handleChange}
                label="wifeName"
                type="text"
                placeholder="Spouse's Name"
            />
            <br/>
            <SimpleTextFeild
                values={values}
                handleChange={handleChange}
                placeholder="Spouse's Age"
                label="wifeAge"
                type="number"
            
            />
            <br/>
            <SelectGroup
                values={values}
                handleChange={handleChange}
                options={["Hinduism" , "Islam" , "Christianity" , "Jainism" , "Sikkhism" ,
                            "Buddhism" , "Others"]}
                label="wifeReligion"
                placeholder="Spouse's Religion"
            />
            <br/>
            <SelectGroup
                values={values}
                handleChange={handleChange}
                options={["Pre-Primary Stage[LKG,UKG]" , "Primary State[1-4]",
                "Middle Stage[5-7]","Secondary Stage[8 - 10]","Senior Secondary[11 - 12]",
                "Undergraduate Stage", "Post Graduate Stage","Others"]}
                label="wifeEducation"
                placeholder="Spouse's Education"
            />
            <br/>
            <SimpleTextFeild
                values={values}
                handleChange={handleChange}
                placeholder="Spouse's Occupaiton"
                label="wifeOccupation"
                type="text"
            />
            <br/>
            <SelectGroup
                label="wifeMonIncome"
                values={values}
                handleChange={handleChange}
                placeholder="Spouse's Monthly Income"
                options={["0-10000","10000-20000","20000-30000",
                    "30000-40000","40000-50000","50000-60000","60000-70000",
                    "70000-80000" , "80000-90000","90000-100000"]}
            />
            <br/>
            <SimpleTextFeild
                label="wifeOther"
                placeholder="Any Other Information"
                values={values}
                type="text"
                handleChange={handleChange}

            />
            <br/>

            <SimpleTextFeild
                label="yearsOfMarraige"
                placeholder="Number of Years of Marriage"
                type="number"
                values={values}
                handleChange={handleChange}
            />
            <br/>
            <SelectGroup
                label="typeOfMarraige"
                placeholder="Type Of Marriage"
                options={["Arranged" , "Love"]}
                values={values}
                handleChange={handleChange}
            
            />
            <br/>
            <SelectGroup
                label="subsequentMarraiges"
                options={["Yes" , "No"]}
                handleChange={handleChange}
                values={values}
                placeholder="Previous / Subsequent Marriages"
            />


            <br/>
            <SelectGroup
                label="separatedDueToAddiction"
                options={["Yes" , "No"]}
                handleChange={handleChange}
                values={values}
                placeholder="Separated from spouse due to addiction"
            />
            <br/>
            <IfYesSpecify
                yes={values["separatedDueToAddiction"]}
                placeholder="Period Of Longest Separation"
                values={values}
                handleChange={handleChange}
                type="number"
                label="periodOfSeparationFromWife"
            
            />

            <br/>
            <SelectGroup
                label="suspiciousOfWife"
                options={["Yes" , "No"]}
                handleChange={handleChange}
                values={values}
                placeholder="Are you Suspicious about your spouse"
            />
            <br/>
            <SelectGroup
                label="familyViolence"
                options={["Yes" , "No"]}
                handleChange={handleChange}
                values={values}
                placeholder="Any Instance of Family Violence"
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

export default Form10;
