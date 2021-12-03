import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

export class FormUserDetails extends Component {
  
  state = {
    firstNameError: "",
    lastNameError: "",
    ageError:"",
    genderError:"",
    regError:"",
    campnoError:"",
    camplaceError:"",
  };
  
  continue = e => {
    e.preventDefault();
    const alphabet=new RegExp('^[a-zA-Z]+$');
    const alphanumeric=new RegExp('^[a-zA-Z0-9]+$');
    
    
      let isError = false;
      const errors = {
        firstNameError: "",
        lastNameError: "",
        ageError:"",
        genderError:"",
        regError:"",
        campnoError:"",
        camplaceError:"",
      };
  
      if (this.props.values.firstName==="") {
        isError = true;
        errors.firstNameError = "First name field is required ";
      }
      else if(!alphabet.test(this.props.values.firstName) ){
        isError=true;
        errors.firstNameError="Enter alphabet only";
      }
  
      if (this.props.values.lastName==="") {
        isError = true;
        errors.lastNameError = "Last name field is required";
      }
      else if(!alphabet.test(this.props.values.lastName) ){
        isError=true;
        errors.lastNameError="Enter alphabet only";
      }
        if(this.props.values.age!==""){
          if(this.props.values.age>=100 || this.props.values.age<18){
              isError = true;
                errors.ageError="Enter correct age(18 - 100)";
            }
          }
          else{
            isError = true;
                errors.ageError="Age field is required";
          }

          if(this.props.values.gender===""){
            isError=true;
            errors.genderError="Select the gender from dropdown";
          }

          if(this.props.values.reg===""){
            isError=true;
            errors.regError="Registration No. field is required";
          }
          else if(!alphanumeric.test(this.props.values.reg)){
            isError=true;
            errors.regError="Do not include any special characters";
          }

        if(this.props.values.campno===""){
          isError=true;
          errors.campnoError="Camp No. field is required";
        }

        if(this.props.values.camplace===""){
          isError=true;
          errors.camplaceError="Camp Place field is required";
        }
        else if(!alphabet.test(this.props.values.campplace) ){
          isError=true;
          errors.campplaceError="Enter alphabet only";
        }
      
    
  
      this.setState({
        ...this.state,
        ...errors
      });
      
      
      if(!isError){
        this.props.nextStep();  
      }

      return isError;
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
            
            <AppBar title="Enter User Details" />
            <TextField
              
              label="Camp Number"
              onChange={handleChange('campno')}
              defaultValue={values.campno}
              margin="normal"
              type="number"
              fullWidth
              error={this.state.campnoError}
              helperText={this.state.campnoError}
            />
            <br />
            <TextField
              
              required
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
              error={this.state.firstNameError}
              helperText={this.state.firstNameError}
                            
            />
            <br />
            <TextField
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
              error={this.state.lastNameError}
              helperText={this.state.lastNameError}
            />
            <br />
            <TextField
              label="Age"
              onChange={handleChange('age')}
              defaultValue={values.age}
              margin="normal"
              type="number"
              fullWidth
              error={this.state.ageError}
              helperText={this.state.ageError}
            />
            <br />
            <FormControl>
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select
            native
            value={values.gender}
            onChange={handleChange('gender')}
            inputProps={{
                name: '',
                id: 'gender',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Transgender"}>Transgender</option>
             </Select>
             <div style={{fontSize:"13px",color:"red"}}>{this.state.genderError}</div>
            </FormControl>
            <br />
            <TextField
              label="Registration Number"
              onChange={handleChange('reg')}
              defaultValue={values.reg}
              margin="normal"
              fullWidth
              error={this.state.regError}
              helperText={this.state.regError}
            />
            <br />
            <FormControl>
            <InputLabel htmlFor="camplace">Camp Place</InputLabel>
            <Select
            native
            value={values.camplace}
            onChange={handleChange('camplace')}
            inputProps={{
                name: '',
                id: 'camplace',
            }}
            >
            <option aria-label="None" value="" />
            <option value={"Jagruthi Sowdha"}>Jagruthi Sowdha</option>            
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{this.state.camplaceError}</div>
            </FormControl>
            <br/>
            <br />
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

export default FormUserDetails;
