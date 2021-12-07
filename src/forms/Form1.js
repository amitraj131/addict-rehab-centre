import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SelectGroup from './SelectGroup';
import Axios from 'axios';

export class Form1 extends Component {

  state={
    occupationError:"",
    incomeError:"",
    maritalError:"",
    livingError:"",
    supportError:"",
    supportRelationError:"",
    supportAddressError:"",
    telError:"",
  }

  continue = e => {
    e.preventDefault();

    const alphabet=new RegExp('^[a-zA-Z]+$');
    const alphanumeric=new RegExp('^[a-zA-Z0-9]+$');

    let isError = false;
    const errors = {
      occupationError:"",
      incomeError:"",
      maritalError:"",
      livingError:"",
      supportError:"",
      supportRelationError:"",
      supportAddressError:"",
      telError:"",
    };

    // if (this.props.values.occupation==="") {
    //   isError = true;
    //   errors.occupationError = "Occupation field is required ";
    // }
    // else if(!alphabet.test(this.props.values.occupation))
    // {
    //   isError = true;
    //   errors.occupationError = "Enter only characters";
    // }

    // if(this.props.values.income===""){
    //   isError=true;
    //   errors.incomeError="Select the Income from dropdown";
    // }

    // if(this.props.values.marital===""){
    //   isError=true;
    //   errors.maritalError="Select the Marital Status from dropdown";
    // }

    // if(this.props.values.living===""){
    //   isError=true;
    //   errors.livingError="Select the Living Arrangement from dropdown";
    // }
    
    // if (this.props.values.support==="") {
    //   isError = true;
    //   errors.supportError = "Support Person Name field is required ";
    // }
    // else if(!alphabet.test(this.props.values.support))
    // {
    //   isError = true;
    //   errors.supportError = "Enter only characters";
    // }

    // if (this.props.values.supportrelation==="") {
    //   isError = true;
    //   errors.supportRelationError = "Support Person Relation field is required ";
    // }
    // else if(!alphabet.test(this.props.values.supportrelation))
    // {
    //   isError = true;
    //   errors.supportRelationError = "Enter only characters";
    // }

    // if (this.props.values.supportaddress==="") {
    //   isError = true;
    //   errors.supportAddressError = "Support Person Address field is required ";
    // }
    // else if(!alphabet.test(this.props.values.supportaddress))
    // {
    //   isError = true;
    //   errors.supportAddressError = "Enter only characters";
    // }


  this.setState({
    ...this.state,
    ...errors
  });
  

  if(!isError){
    Axios.post("https://addict-rehab-app.herokuapp.com/demographic_insert",{
     
     firstName:this.props.values.firstName,
     lastName:this.props.values.lastName,
     age:this.props.values.age,
     gender:this.props.values.gender,
     reg:this.props.values.reg,
     campno:this.props.values.campno,
     camplace:this.props.values.camplace,
     dor:this.props.values.dor,
     resadd:this.props.values.resadd,
     telno:this.props.values.telno,
     religion:this.props.values.religion,
     community:this.props.values.community,
     education:this.props.values.education,
     refferal:this.props.values.refferal,
     occupation:this.props.values.occupation,
     income:this.props.values.income,
     marital:this.props.values.marital,
     living:this.props.values.living,
     support:this.props.values.support,
     supportrelation:this.props.values.supportrelation,
     supportaddress:this.props.values.supportaddress,
     telno:this.props.values.telno,
  });
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
            <TextField
              label="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
              margin="normal"
              fullWidth
              error={this.state.occupationError}
              helperText={this.state.occupationError}
            />
            <br />
            {/*<TextField
              
              label="Annual Income"
              onChange={handleChange('income')}
              defaultValue={values.income}
              margin="normal"
              fullWidth
              type="number"
            />*/}
            <SelectGroup
                label="income"
                values={values}
                //onChange={handleChange('income')}
                handleChange={handleChange}
                placeholder="Annual Income"
                options={["0-10000","10000-50000","50000-100000",
                    "100000-150000","150000-200000","200000-250000","250000-300000",
                    "300000-350000" , "350000-400000","400000-500000","500000-600000"]}
            />
            <div style={{fontSize:"13px",color:"red"}}>{this.state.incomeError}</div>
            <br />
            <FormControl>
            <InputLabel htmlFor="age-native-simple">Martial Status</InputLabel>
            <Select
            native
            value={values.marital}
            onChange={handleChange('marital')}
            inputProps={{
                name: '',
                id: 'age-native-simple',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Married"}>Married</option>
            <option value={"Un-Married"}>Un-married</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.maritalError}</div>
            </FormControl>
            <br />
            <FormControl>
            <InputLabel htmlFor="LivingArrangement">Living Arrangement</InputLabel>
            <Select
            native
            value={values.living}
            onChange={handleChange('living')}
            inputProps={{
                name: '',
                id: 'LivingArrangement',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Family"}>Family</option>
            <option value={"Friends"}>Friends</option>
            <option value={"Relatives"}>Relatives</option>
            <option value={"Alone"}>Alone</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.livingError}</div>
            </FormControl>
            <br />
            
            <TextField
              label="Name of the Support Person Acompanied"
              onChange={handleChange('support')}
              defaultValue={values.support}
              margin="normal"
              fullWidth
              error={this.state.supportError}
              helperText={this.state.supportError}
            />
            <br />
            <TextField
          
              label="Relation with the patient(For Support-Person)"
              onChange={handleChange('supportrelation')}
              defaultValue={values.supportrelation}
              margin="normal"
              fullWidth
              error={this.state.supportRelationError}
              helperText={this.state.supportRelationError}
            />
            <br />
            <TextField
              label="Address (Support-Person)"
              onChange={handleChange('supportaddress')}
              defaultValue={values.supportaddress}
              margin="normal"
              fullWidth
              error={this.state.supportAddressError}
              helperText={this.state.supportAddressError}
            />
            <br />
            <br />
            <TextField
              placeholder=""
              label="Telephone Number of Support person"
              type="number"
              onChange={handleChange('telno')}
              defaultValue={values.telno}
              margin="normal"
              fullWidth
              error={this.state.telError}
              helperText={this.state.telError}
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
              >Save and Continue</Button>
            
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Form1;
