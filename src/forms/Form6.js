import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import OtherSpecify from './OtherSpecify';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SimpleTextFeild from './SimpleTextFeild';
import DateFeild from './DateFeild';
import SelectGroup from './SelectGroup';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { DatePicker } from '@material-ui/pickers'
import CheckboxLabels from './CheckboxLabels';

export class Form6 extends Component {
  continue = e => {
    e.preventDefault();
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
            <h1>Medical Complication in Past</h1>

            <CheckboxLabels
                label="mppast_Haematemesis"
                placeholder="Haematemesis"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="mppast_jaundice"
                placeholder="Jaundice"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="mppast_headinjury"
                placeholder="Head Injury"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="mppast_siezure"
                placeholder="Seizure"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="mppast_accidents"
                placeholder="Accidents"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="mppast_abscesses"
                placeholder="Abscesses"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="mppast_bleedingpiles"
                placeholder="Bleeding Piles"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="mppast_skin_problems"
                placeholder="Skin Problems"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="mppast_nervepains"
                placeholder="Nerve Related Pains in Extremities"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="mppast_other"
                placeholder="Other"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
             <OtherSpecify
              otherSelected={values["mppast_other"]}
              placeholder="Specify your Medical Complications"
              type="text"
              values={values}
              handleChange={handleChange}
              label="pcpast_others_specify"
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
              >Continue</Button>
            
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Form6;
