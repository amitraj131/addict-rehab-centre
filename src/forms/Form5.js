import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import 'date-fns';
import CheckboxLabels from './CheckboxLabels';

export class Form5 extends Component {
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
            <h1>Withdrawal Symptoms</h1>

            <CheckboxLabels
                label="w_sweating"
                placeholder="Sweating"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
              
            />
            <CheckboxLabels
                label="w_palpitation"
                placeholder="Palpitation / Feeling of one's own heart beat with heart rate more than 100bpm "
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="w_tremors"
                placeholder="Tremors"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="w_insomnia"
                placeholder="Insomnia"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="w_fits"
                placeholder="Fits"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="w_nausea"
                placeholder="Nausea"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="w_achesandpains"
                placeholder="Aches and Pains"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="w_anxiety"
                placeholder="Anxiety"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="w_restlessness"
                placeholder="Restlessness"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="w_tactile"
                placeholder="Transient Visual / Tactile"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
            <CheckboxLabels
                label="w_illusions"
                placeholder="Auditory hallucinations / Illusion"
                values={values}
                handleCheckBoxChange={handleCheckBoxChange}
            />
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

export default Form5;
