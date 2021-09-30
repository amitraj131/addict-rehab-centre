import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SimpleTextFeild from './SimpleTextFeild';
import DateFeild from './DateFeild';
import Legalities from './Legalities';
import SelectGroup from './SelectGroup';
import IfYesSpecify from './IfYesSpecify';
import 'date-fns';
import Axios from "axios";


export class Form11 extends Component {
  continue = e => {
    e.preventDefault();

    console.log(this.props.values.startingAgeOfWork,this.props.values.legalCases,this.props.values.numberOfTimesLegalities);

    Axios.post("https://addict-rehab-app.herokuapp.com/occupation_financial_legal_insert",{
      reg_no:this.props.values.reg,
      startingAgeOfWork:this.props.values.startingAgeOfWork,
      yearsOfWorking:this.props.values.yearsOfWorking,
      recongnition:this.props.values.recongnition,
      jobChangedDueToAddiction:this.props.values.jobChangedDueToAddiction,
      periodOfUnemployment:this.props.values.periodOfUnemployment,
      numberOfYearsOfUnemployment:this.props.values.numberOfYearsOfUnemployment,
      reasonOfUnemployed:this.props.values.reasonOfUnemployed,
      occupationalDamage:this.props.values.occupationalDamage,
      natureOfCurrentWork:this.props.values.natureOfCurrentWork,


      totalDebtAmount:this.props.values.totalDebtAmount,
      moneyBorrowedFrom:this.props.values.moneyBorrowedFrom,

      legalIssues:this.props.values.legalIssues,
      legalCases:this.props.values.legalCases,
      numberOfTimesLegalities:this.props.values.numberOfTimesLegalities,
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
            <h1>Occupation History</h1>
            <br/>
            <SimpleTextFeild
                values={values}
                handleChange={handleChange}
                label="startingAgeOfWork"
                type="number"
                placeholder="At what age did you start working"
            />
            <br/>
            <SimpleTextFeild
                values={values}
                handleChange={handleChange}
                placeholder="How long have you been working"
                label="yearsOfWorking"
                type="number"
            
            />
            <br/>
            <SelectGroup
                values={values}
                handleChange={handleChange}
                options={["Yes" , "No"]}
                label="recongnition"
                placeholder="Have you received any special award,recognition,merit certificate or promotions in past"
            />
            <br/>
            <SelectGroup
                values={values}
                handleChange={handleChange}
                options={["Yes" , "No"]}
                label="jobChangedDueToAddiction"
                placeholder="Did you change your job due to addiction"
            />
            <br/>
            <SelectGroup
                label="periodOfUnemployment"
                values={values}
                handleChange={handleChange}
                placeholder="Did you have any period of Unemployment"
                options={["Yes" , "No"]}
            />
            <br/>
            <IfYesSpecify
                label="numberOfYearsOfUnemployment"
                placeholder="Specify the number of years of unemployment"
                values={values}
                handleChange={handleChange}
                yes={values["periodOfUnemployment"]}
                type="number"
            />
            <br/>
            <IfYesSpecify
                label="reasonOfUnemployed"
                placeholder="Reason for Unemployment"
                values={values}
                handleChange={handleChange}
                yes={values["periodOfUnemployment"]}
                type="text"
            />
            <br/>

            <SelectGroup
                label="occupationalDamage"
                placeholder="Occupational Damage"
                options={["Absenteeism","Warning or memos" , "Suspension Order" , "Dismissal Order"
                    , "Transfer Order" , "Accidents on Job" , "Attend work under the influence of alcohol"]}
                values={values}
                handleChange={handleChange}
            
            />
            <br/>
            <SimpleTextFeild
                label="natureOfCurrentWork"
                placeholder="Nature of Current Work"
                values={values}
                handleChange={handleChange}
                type="text"
            />
            <br/>
            <h1>Financial History</h1>
            <br/>
            <SimpleTextFeild
                label="totalDebtAmount"
                placeholder="Details of debts to be cleared"
                type="text"
                values={values}
                handleChange={handleChange}            
            
            />
            <SimpleTextFeild
                label="totalDebtAmount"
                placeholder="Amount"
                type="number"
                values={values}
                handleChange={handleChange}            
            
            />
            <br/>

            <SelectGroup
                options={["Bank" , "Family and Friends" , "Place of Work" , "Money Lenders" , 
                    "SHG" , "Pawn Shops" , "Liquor Shop" , "Hand Loan" , "None"]}
                label="moneyBorrowedFrom"
                values={values}
                handleChange={handleChange}
                placeholder="Money Borrowed from"
            />
            <br/>
            <h1>Legal History</h1>
            <br/>
            <SelectGroup
                label="legalIssues"
                placeholder="Have you got into trouble with law"
                options={["Yes" , "No"]}
                values={values}
                handleChange={handleChange}
            />
            <br/>
            <Legalities
                yes={values["legalIssues"]}
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

export default Form11;
