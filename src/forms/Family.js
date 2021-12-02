import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import RenderBrothers from './RenderBrothers';
import RenderSisters from './RenderSisters' ;
import RenderChildren from './RenderChildren';
import 'date-fns';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FatherDetails from './FatherDetails';
import MotherDetails from './MotherDetails';
import WifeDetails from './WifeDetails';
import FamilyHealthStatus from './FamilyHealthStatus';
import Axios from 'axios';


export class Family extends Component {

  
  state = {
      Living : true,
      Mother : true,
      Wife : true,
      
  }
  
  continue = e => {
    e.preventDefault();
    const { values } = this.props;
    console.log(values.f_father_age , values.f_father_health)

    
if(values.f_year_of_death!=="" || values.f_father_age!==""){
    if(values["f_alive"] === "true"){
      // f_year_of_death , f_cause_of_death , f_patient_age_at_death ,f_father_age , f_father_health
      console.log(values.f_father_age , values.f_father_health)
      Axios.post("https://addict-rehab-app.herokuapp.com/father_insert",{
        reg_no:values.reg,
        f_year_of_death: values.f_year_of_death,
        f_cause_of_death:values.f_cause_of_death,
        f_patient_age_at_death: values.f_patient_age_at_death,
        f_father_age:values.f_father_age,
        f_father_health : values.f_father_health,
        alive:true,
        dead :false,
        
      })

    }
    else{
       // f_year_of_death , f_cause_of_death , f_patient_age_at_death ,f_father_age , f_father_health
      // alive = false
      // dead = true
      console.log(values.f_year_of_death)
      Axios.post("https://addict-rehab-app.herokuapp.com/father_insert",{
        reg_no:values.reg,
        f_year_of_death:values.f_year_of_death,
        f_cause_of_death:values.f_cause_of_death,
        f_patient_age_at_death: values.f_patient_age_at_death,
        f_father_age:values.f_father_age,
        f_father_health : values.f_father_health,
        alive:false,
        dead:true,
        
      })

    }
  }
    
  if(values.f_wife_year_of_death!=="" || values.f_wife_age!==""){
    if(values["w_alive"] === "true"){
      // 
      console.log(values.f_father_age , values.f_father_health)
      Axios.post("https://addict-rehab-app.herokuapp.com/wife_insert",{
        reg_no:values.reg,
        f_wife_age:values.f_wife_age,
        f_wife_health:values.f_wife_health,
        f_wife_year_of_death:values.f_wife_year_of_death,
        f_wife_cause_of_death:values.f_wife_cause_of_death,
        f_wife_patient_age_at_death:values.f_wife_patient_age_at_death,
        alive:true,
        dead :false,
        
      })

    }
    else{
       // f_year_of_death , f_cause_of_death , f_patient_age_at_death ,f_father_age , f_father_health
      // alive = false
      // dead = true
      console.log(values.f_year_of_death)
      Axios.post("https://addict-rehab-app.herokuapp.com/wife_insert",{
        reg_no:values.reg,
        f_wife_age:values.f_wife_age,
        f_wife_health:values.f_wife_health,
        f_wife_year_of_death:values.f_wife_year_of_death,
        f_wife_cause_of_death:values.f_wife_cause_of_death,
        f_wife_patient_age_at_death:values.f_wife_patient_age_at_death,
        alive:false,
        dead :true,
        
      })

    }
  }

  if(values.f_mother_year_of_death!=="" || values.f_mother_age!==""){
    if(values["m_alive"] === "true"){
      // 
      console.log(values.f_mother_age , values.f_mother_health)
      Axios.post("https://addict-rehab-app.herokuapp.com/mother_insert",{
        reg_no:values.reg,
        f_mother_age:values.f_mother_age,
        f_mother_health:values.f_mother_health,
        f_mother_year_of_death:values.f_mother_year_of_death,
        f_mother_cause_of_death:values.f_mother_cause_of_death,
        f_mother_patient_age_at_death:values.f_mother_patient_age_at_death,
        alive:true,
        dead :false,
        
      })

    }
    else{
       // f_year_of_death , f_cause_of_death , f_patient_age_at_death ,f_father_age , f_father_health
      // alive = false
      // dead = true
      console.log(values.f_mother_year_of_death)
      Axios.post("https://addict-rehab-app.herokuapp.com/mother_insert",{
        reg_no:values.reg,
        f_mother_age:values.f_mother_age,
        f_mother_health:values.f_mother_health,
        f_mother_year_of_death:values.f_mother_year_of_death,
        f_mother_cause_of_death:values.f_mother_cause_of_death,
        f_mother_patient_age_at_death:values.f_mother_patient_age_at_death,
        alive:false,
        dead :true,
        
      })

    }
  }
    
    const {brothers , sisters , children} = values
    console.log(brothers,"bro");
    var bro;
    for(let item of brothers){
     if(item.age!=="" || item.cod!==""){

    Axios.post("https://addict-rehab-app.herokuapp.com/brother_insert",{
          reg_no:values.reg,
          brothers : brothers,
    });
  }
}
  for(let item of sisters){
    if(item.age!=="" || item.cod!==""){
    Axios.post("https://addict-rehab-app.herokuapp.com/sister_insert",{
          reg_no:values.reg,
          sisters : sisters,
    });
  }
}

for(let item of children){
  if(item.age!=="" || item.cod!==""){
    Axios.post("https://addict-rehab-app.herokuapp.com/children_insert",{
          reg_no:values.reg,
          children : children,
    });
  }
}

    console.log(values.f_majorDepression,values.f_suicide);

    if(values.f_majorDepression){
      Axios.post("https://addict-rehab-app.herokuapp.com/health_status_insert",{
       reg_no:values.reg,
        prblm:"Major Depression",
        relation:values.f_majorDepression
      })
    }
    if(values.f_suicide){
      Axios.post("https://addict-rehab-app.herokuapp.com/health_status_insert",{
        reg_no:values.reg,
         prblm:"Suicide/Attempted Suicide",
         relation:values.f_suicide
       })
    }
    if(values.f_psychiatric){
      Axios.post("https://addict-rehab-app.herokuapp.com/health_status_insert",{
        reg_no:values.reg,
         prblm:"Psychiatric Illness",
         relation:values.f_psychiatric
       })
    }
    if(values.f_alcoholdependence){
      Axios.post("https://addict-rehab-app.herokuapp.com/health_status_insert",{
        reg_no:values.reg,
         prblm:"Alcohol Dependence",
         relation:values.f_alcoholdependence
       })
    }
    if(values.f_drugdependence){
      Axios.post("https://addict-rehab-app.herokuapp.com/health_status_insert",{
        reg_no:values.reg,
         prblm:"Drug Dependence",
         relation:values.f_drugdependence
       })
    }
    if(values.f_otherss){
      Axios.post("https://addict-rehab-app.herokuapp.com/health_status_insert",{
        reg_no:values.reg,
         prblm:"Others",
         relation:values.f_otherss
       })
    }

    this.props.nextStep();

  };

  

  back = e => {
    e.preventDefault();
    const {Brothers} = this.state;
    console.log(Brothers)
    this.props.prevStep();
    
  };

  checkalive = e => {
      e.preventDefault();
      if(e.target.checked){
          if(e.target.name === "Father")
                {this.setState({Living : true});}
          else if(e.target.name === "Mother")  
                {this.setState({Mother : true});}
          else
                {this.setState({Wife : true})}
      }
      else{
          if(e.target.name === "Father")
          {this.setState({Living : false});}
          else if(e.target.name === "Mother"){
              this.setState({Mother : false})
          }
          else
              {this.setState({Wife : false})}
      }
      this.props.handleCheckBoxChange("f_father_alive");
      console.log(this.state)
  }

  render() {
    const { values, handleChange ,handleCheckBoxChange , handleBrothers ,handleSisters , handleChildren} = this.props;
    const {Living , Mother , Wife } = this.state;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='lg'
          >
            <AppBar title="Enter Personal Details" />
            

            <h1>Family History</h1>

            <h3>1. Father</h3>
            <br></br>
            <FormControlLabel
            control={
            <FormControl>
          <Checkbox
            native
            defaultChecked={Living}
            onChange={event => this.checkalive(event)}
            name="Father"
            color="primary"
            
        />
            
          </FormControl>
        }
        label="Alive"
        />
        <FatherDetails
            status={Living}
            handleChange={handleChange}
            values={values}    

        />
        <br />
        <br />
        <h3>2. Mother</h3>
            <br></br>

            <FormControlLabel
            control={
            <FormControl>
          <Checkbox
            native
            defaultChecked={Mother}
            onChange={event => this.checkalive(event)}
            name="Mother"
            color="primary"
            
        />
            
          </FormControl>
        }
        label="Alive"
        />
        <MotherDetails
            status={Mother}
            handleChange={handleChange}
            values={values}    

        />

        <br />
        <br />
            <h3>3. Spouse</h3>
            <br></br>
            <FormControlLabel
            control={
            <FormControl>
          <Checkbox
            native
            defaultChecked={Wife}
            onChange={event => this.checkalive(event)}
            name="Wife"
            color="primary"
            
        />
            
          </FormControl>
        }
        label="Alive"
        />

        <WifeDetails
            status={Wife}
            handleChange={handleChange}
            values={values}    

        />

        <br />
        




            <br />


            <h3>4. Brothers</h3>
            <RenderBrothers
              handleChange={handleChange}
              handleBrothers={handleBrothers}  
            
            />
            <br/>

            <h3>6. Sisters</h3>
            <RenderSisters
              handleChange={handleChange}
              handleSisters={handleSisters}  
            
            />
            <br/>
            <h3>7. Children</h3>
            <RenderChildren
                handleChange={handleChange}
                handleChildren={handleChildren}
            />

            <h1>Family Health Status</h1>

            <FamilyHealthStatus
              values={values}
              handleChange={handleChange}

            />

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

export default Family;
