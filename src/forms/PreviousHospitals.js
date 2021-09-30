import React, { Component , useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AppBar from '@material-ui/core/AppBar';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(5),
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}))



function PreviousHospitals(props) {
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(),hospital : '' , yearOfTreatment : '',period : '', soberPeriod : '',remarks : '' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("InputFields", inputFields);
    props.handleChange(inputFields);

    let i=0;
    for(i=0;i<inputFields.length;i++)
    {
    Axios.post("https://addict-rehab-app.herokuapp.com/other_hospitals_insert",{

     reg:props.values.reg,
     hospital:inputFields[i].hospital,
     yearOfTreatment:inputFields[i].yearOfTreatment,
     period:inputFields[i].period,
     soberPeriod:inputFields[i].soberPeriod,
     remarks:inputFields[i].remarks,
  });
  console.log(inputFields[i].hospital);
  };

  };

  const handleChangeInput = (id, event) => {
    const newInputFields = inputFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setInputFields(newInputFields);
  }

  const handleAddFields = () => {
    setInputFields([...inputFields, { id: uuidv4(),hospital : '' , yearOfTreatment : '',period : '', soberPeriod : '',remarks : ''}])
  }

  const handleRemoveFields = id => {
    const values  = [...inputFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setInputFields(values);
  }
  const continue1 = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <Container>
        
      
      <form className={classes.root} onSubmit={handleSubmit}>
        { inputFields.map(inputField => (
                
          <div key={inputField.id}>
            <MuiThemeProvider>
            <>
              <Dialog
                open
                fullWidth
                maxWidth='lg'
              >
            
        
            
            <AppBar title="Enter User Details" /> 
            <h1>Treatment received in other centers</h1>
            <br/>
            <TextField
              name="hospital"
              label="Hospital or Deaddiction Name"
              
              value={inputField.hospital}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <br></br>
            <TextField
              name="yearOfTreatment"
              label="Year Of Treatment (YYYY)"
              type="number"
              value={inputField.yearOfTreatment}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <br></br>
            <TextField
              name="period"
              label="Period Of Treatment (In months/weeks/year)"
              
              value={inputField.period}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <br></br>
            <TextField
              name="soberPeriod"
              label="Period Of Sober  (In months/weeks/year)"
              
              value={inputField.soberPeriod}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <br></br>
            <TextField
              name="remarks"
              label="Remarks"
              
              value={inputField.remarks}
              onChange={event => handleChangeInput(inputField.id, event)}
            />
            <br></br>
            
            <br></br>
            <IconButton disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={handleAddFields}
            >
            <AddIcon />
            </IconButton>
            <Button
            className={classes.button}
            fullWidth
            variant="contained" 
            color="primary" 
            type="submit" 
            
            onClick={handleSubmit}
        >Send</Button>
            <Button
              
              color="secondary"
              variant="contained"
              onClick={event => back( event)}
              >Back</Button>

            <Button
              
              color="primary"
              variant="contained"
              onClick={event => continue1(event)}
              >Continue</Button>
            </Dialog>
        </>
      </MuiThemeProvider>
              
        
      

          </div>
          
        )) }
        
      </form>
    </Container>
  );
}

export default PreviousHospitals;
