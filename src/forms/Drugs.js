import React, { Component , useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AppBar from '@material-ui/core/AppBar';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Axios from 'axios'; 

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



function Drugs(props) {
  const classes = useStyles()
  const [inputFields, setInputFields] = useState([
    { id: uuidv4(), drugName: '', ageOfFirstUse: '' , yearOfUse : '',yearOfExcessiveUse: '',
        specificTypeOfDrug : '' , routeOfAdministration:'' , useInLast30days : '' , quantityInLast30Days: '' , pastUseIfAny : '' },
  ]);
  
  const [drugError,setError]=useState("");
  const [firstError,setfirstError]=useState("");
  const [yearsofuseError,setyearsofuseError]=useState("");
  const [execessiveError,setexecessiveError]=useState("");
  const [typeofdrugError,settypeofdrugError]=useState("");
  const [routeError,setrouteError]=useState("");
  const [freqlastError,setfreqlastError]=useState("");
  const [lastError,setlastError]=useState("");
  const [pastuseError,setpastuseError]=useState("");
  

  const handleSubmit = (e) => {
    let i=0;
    let isError=false;
    const alphabet=new RegExp('^[a-zA-Z]+$');
    const alphanumeric=new RegExp('^[a-zA-Z0-9]+$');
    e.preventDefault();
    console.log("InputFields", inputFields);
    for(i=0;i<inputFields.length;i++)
    {
    if(inputFields[i].drugName===""){
      isError = true;
      setError("Select Drug from dropdown");
    }else{
      setError("");
    }

    if(inputFields[i].ageOfFirstUse===""){
      isError = true;
      setfirstError("Age of first use field is required")
    }else{
      setfirstError("");
    }

    if(inputFields[i].yearOfUse===""){
      isError = true;
      setyearsofuseError("Number of Years use field is required")
    }else{
      setyearsofuseError("");
    }

    if(inputFields[i].yearOfExcessiveUse===""){
      isError = true;
      setexecessiveError("Number of Years of Exessive use field is required")
    }else{
      setexecessiveError("");
    }

    if(inputFields[i].specificTypeOfDrug===""){
      isError = true;
      settypeofdrugError("Specific type of drug field is required")
    }else if(!alphanumeric.test(inputFields[i].specificTypeOfDrug)){
      isError = true;
      settypeofdrugError("Do not include any special characters")
    }
    else{
      settypeofdrugError("");
    }

    if(inputFields[i].routeOfAdministration===""){
      isError = true;
      setrouteError("Select route of adminstration from dropdown")
    }else{
      setrouteError("");
    }

    if(inputFields[i].useInLast30days===""){
      isError = true;
      setfreqlastError("Frequency of use in last 30 days field is required")
    }else{
      setfreqlastError("");
    }

    if(inputFields[i].quantityInLast30Days===""){
      isError = true;
      setlastError("Quantity of use in last 30 days field is required")
    }else{
      setlastError("");
    }
    if(inputFields[i].pastUseIfAny!==""){
    if(!alphanumeric.test(inputFields[i].pastUseIfAny)){
      isError = true;
      setpastuseError("Don't include special characters")
    }else{
      setpastuseError("");
    }
  }

  }
 
  if(!isError){
    props.handleChange(inputFields);
    
    for(i=0;i<inputFields.length;i++)
    {
    Axios.post("https://addict-rehab-app.herokuapp.com/presenting_cmplnts_insert",{

     reg:props.values.reg,
     drugName:inputFields[i].drugName,
     ageOfFirstUse:inputFields[i].ageOfFirstUse,
     yearOfUse:inputFields[i].yearOfUse,
     yearOfExcessiveUse:inputFields[i].yearOfExcessiveUse,
     specificTypeOfDrug:inputFields[i].specificTypeOfDrug,
     routeOfAdministration:inputFields[i].routeOfAdministration,
     useInLast30Days:inputFields[i].useInLast30Days,
     quantityInLast30Days:inputFields[i].quantityInLast30Days,
     pastUseIfAny:inputFields[i].pastUseIfAny
  });
  console.log(inputFields[i].drugName);
  };
}
}

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
    setInputFields([...inputFields, { id: uuidv4(),drugName: '', ageOfFirstUse: '' , yearOfUse : '',yearOfExcessiveUse: '',
    specificTypeOfDrug : '' , routeOfAdministration:'' , useInLast30days : '' , quantityInLast30Days: '' , pastUseIfAny : '' }])
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
            <FormControl>
            <InputLabel htmlFor="drugName">Drug Names</InputLabel>
            <Select
            native
            name="drugName"
            label="Drug Name"
            value={inputField.drugName}
            onChange={event => handleChangeInput(inputField.id, event)}
            >
            <option aria-label="None" value="" hidden/>
            <optgroup label="Depressants">
          <option value="Alcohol">Alcohol</option>
          <option value="Tranquilizers">Tranquilizers</option>
          <option value="Sedatives/Hypnotics">Sedatives/Hypnotics</option>
		</optgroup>
		<optgroup label="Narcotic Analgesic">
			<option value="Opium">Opium</option>
          <option value="Heroin/Brown sugar">Heroin/Brown sugar</option>
          <option value="Morphine">Morphine</option>
          <option value="Codeine">Codeine</option>
          <option value="Pentazocine">Pentazocine</option>
          <option value="Buprenorphine">Buprenorphine</option>
		</optgroup>
		<optgroup label="Cannabis">
		<option value="Ganja/Charas/Hashish">Ganja/Charas/Hashish</option>
         <option value="Bhang">Bhang</option>
		</optgroup>
			<optgroup label="Stimulants">
			 <option value="Amphetamine">Amphetamine</option>
          <option value="Cocaine">Cocaine</option>
          <option value="Ecstasy">Ecstasy</option>
			</optgroup>
			<optgroup label="Hallucinogens">
			<option value="LSD">LSD</option>
          <option value="PCP">PCP</option>
			</optgroup>
			<optgroup label="Inhalants">
			<option value="Petrol">Petrol</option>
          <option value="Glue">Glue</option>
          <option value="Whitener">Whitener</option>
          <option value="Thinner">Thinner</option>
          <option value="Grease">Grease</option>
          <option value="Nail polish">Nail polish</option>
          <option value="Others">Others</option>
			</optgroup>
			<optgroup label="Substance not classified">
			<option value="Cough syrup">Cough syrup</option>
          <option value="Anti histamine">Anti histamine</option>
          <option value="Anti depressant">Anti depressant</option>
          <option value="Anti psychotic">Anti psychotic</option>
          <option value="Smoking and Chewing">Smoking and Chewing</option>
			</optgroup>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{drugError}</div>
            </FormControl>
            <br></br>
            <TextField
              name="ageOfFirstUse"
              label="Age of First Use"
              type="number"
              value={inputField.ageOfFirstUse}
              onChange={event => handleChangeInput(inputField.id, event)}
              error={firstError}
              helperText={firstError}
            />
            <br></br>
            <TextField
              name="yearOfUse"
              label="Number of Years of Use"
              type="number"
              value={inputField.yearOfUse}
              onChange={event => handleChangeInput(inputField.id, event)}
              error={yearsofuseError}
              helperText={yearsofuseError}
            />
            <br></br>
            <TextField
              name="yearOfExcessiveUse"
              label="Years of Excessive Use"
              type="number"
              value={inputField.yearOfExcessiveUse}
              onChange={event => handleChangeInput(inputField.id, event)}
              error={execessiveError}
              helperText={execessiveError}
           />
            <br></br>
            <TextField
              name="specificTypeOfDrug"
              label="Specific Type Of Drug"
              value={inputField.specificTypeOfDrug}
              onChange={event => handleChangeInput(inputField.id, event)}
              error={typeofdrugError}
              helperText={typeofdrugError}
            />
            <br></br>
            <FormControl>
            <InputLabel htmlFor="routeOfAdministration">Route of Administration</InputLabel>
            <Select
            native
            name="routeOfAdministration"
            label="Route Of Administation"
            value={inputField.routeOfAdministration}
            onChange={event => handleChangeInput(inputField.id, event)}
            >
            <option aria-label="None" value="" hidden/>
            <option value="Orally">Orally</option>
            <option value="Injected">Injected</option>
	          <option value="Others">Others</option>
            </Select>
            <div style={{fontSize:"13px",color:"red"}}>{routeError}</div>
            </FormControl>
            <br></br>
            <TextField
              name="useInLast30days"
              label="Freq. in Last one Month"
              value={inputField.useInLast30Days}
              onChange={event => handleChangeInput(inputField.id, event)}
              error={freqlastError}
              type="number"
              helperText={freqlastError}
            />
            <br></br>
            <TextField
              name="quantityInLast30Days"
              label="Avg Qty. in Last one Month(in ml)"
              value={inputField.quantityInLast30Days}
              onChange={event => handleChangeInput(inputField.id, event)}
              error={lastError}
              type="number"
              helperText={lastError}
            />
            <br></br>
            <TextField
              name="pastUseIfAny"
              label="Past Use If Any"
              value={inputField.pastUseIfAny}
              onChange={event => handleChangeInput(inputField.id, event)}
              error={pastuseError}
              type="number"
              helperText={pastuseError}
            />
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

export default Drugs;
