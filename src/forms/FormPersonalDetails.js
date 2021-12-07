import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// import SimpleTextFeild from './SimpleTextFeild';
import 'date-fns';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';
// import { DatePicker } from '@material-ui/pickers';

export class FormPersonalDetails extends Component {
  state={
    dorError: "",
      res_addrError: "",
      telError:"",
      religError:"",
      commError:"",
      eduError:"",
      referralError:"",
  }
  continue = e => {
    e.preventDefault();
    const alphabet=new RegExp('^[a-zA-Z]+$');
    const alphanumeric=new RegExp('^[a-zA-Z0-9]+$');

    let isError = false;
    const errors = {
      dorError: "",
      res_addrError: "",
      telError:"",
      religError:"",
      commError:"",
      eduError:"",
      referralError:"",
    };

    // if (this.props.values.dor==="") {
    //   isError = true;
    //   errors.dorError = "Date of Registration field is required ";
    // }
    // if (this.props.values.resadd==="") {
    //   isError = true;
    //   errors.res_addrError = "Residential Address field is required ";
    // }
    // if (this.props.values.telno==="") {
    //   isError = true;
    //   errors.telError = "Telephone Number field is required ";
    // }
    // else if(this.props.values.telno.length!==10)
    // {
    //   isError = true;
    //   errors.telError = "Enter only 10 digts don't include country code ";
    // }
    // if(this.props.values.religion===""){
    //   isError=true;
    //   errors.religError="Select the Religion from dropdown";
    // }

    // if (this.props.values.community==="") {
    //   isError = true;
    //   errors.commError = "Community field is required ";
    // }
    // else if(!alphabet.test(this.props.values.community) ){
    //   isError=true;
    //   errors.commError="Enter alphabet only";
    // }

    // if(this.props.values.education===""){
    //   isError=true;
    //   errors.eduError="Select the Education from dropdown";
    // }

    // if(this.props.values.refferal===""){
    //   isError=true;
    //   errors.referralError="Select the Refferal from dropdown";
    // }


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
  
            { <TextField
            id="datetime-local"
            label="Date of Registration"
            placeholder="dd-mm-yyyy"
            type="string"
            onChange={handleChange('dor')}
            defaultValue={values.dor}
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            error={this.state.dorError}
            helperText={this.state.dorError}
          /> }
             <br />
             <br />
            <TextField
              id="resarea"
              label="Residential Address"
              onChange={handleChange('resadd')}
              defaultValue={values.resadd}
              margin="normal"
              fullWidth
              error={this.state.res_addrError}
              helperText={this.state.res_addrError}
            />
            
            <br/>
            <TextField
              placeholder=""
              label="Telephone Number"
              type="number"
              onChange={handleChange('telno')}
              defaultValue={values.telno}
              margin="normal"
              fullWidth
              error={this.state.telError}
              helperText={this.state.telError}
            />
            <br />
            <FormControl>
            <InputLabel htmlFor="religion">Religion</InputLabel>
            <Select
            native
            value={values.religion}
            onChange={handleChange('religion')}
            inputProps={{
                name: '',
                id: 'religion',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Hinduism"}>Hinduism</option>
            <option value={"Islam"}>Islam</option>
            <option value={"Christianity"}>Christianity</option>
            <option value={"Jainism"}>Jainism</option>
            
            <option value={"Sikhism"}>Sikhis</option>
            <option value={"Buddhism"}>Buddhism</option>
            <option value={"Others"}>Others</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.religError}</div>
            </FormControl>
            <br />
            <TextField
              label="Community"
              onChange={handleChange('community')}
              defaultValue={values.community}
              margin="normal"
              fullWidth
              error={this.state.commError}
              helperText={this.state.commError}
            />
            <br />
            <FormControl>
            <InputLabel htmlFor="education">Education</InputLabel>
            <Select
            native
            value={values.education}
            onChange={handleChange('education')}
            inputProps={{
                name: '',
                id: 'education',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Pre-Primary Stage[LKG,UKG]"}>Pre-Primary Stage[LKG,UKG]</option>
            <option value={"Primary State[1-4]"}>Primary State[1-4]</option>
            <option value={"Middle Stage[5-7]"}>Middle Stage[5-7]</option>
            <option value={"Secondary Stage[8 - 10]"}>Secondary Stage[8 - 10]</option>
            <option value={"Senior Secondary[11 - 12]"}>Senior Secondary[11 - 12]</option>
            <option value={"Undergraduate Stage"}>Undergraduate Stage</option>
            <option value={"Post Graduate Stage"}>Post Graduate Stage</option>
            <option value={"Others"}>Others</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.eduError}</div>
            </FormControl>
            <br />
            <FormControl>
            <InputLabel htmlFor="Refferal">Referral</InputLabel>
            <Select
            native
            value={values.refferal}
            onChange={handleChange('refferal')}
            inputProps={{
                name: '',
                id: 'Refferal',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Self"}>Self</option>
            <option value={"Friends"}>Friends</option>
            <option value={"Family"}>Family</option>
            <option value={"Doctors"}>Doctors</option>
            <option value={"Media-Internet"}>Media-Internet</option>
            <option value={"Media-AyushTV"}>Media-AyushTV</option>
            <option value={"Media-Nirantara"}>Media-Nirantara</option>
            <option value={"Media-Manjuvani"}>Media-Manjuvani</option>
            <option value={"Employer"}>Employer</option>
            <option value={"Nava JeevanSamithi Member"}>Nava JeevanSamithi Member</option>
            <option value={"Through Awareness Program"}>Through Awareness Program</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.referralError}</div>
            </FormControl>
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

export default FormPersonalDetails;
