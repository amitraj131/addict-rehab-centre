import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SimpleTextFeild from './SimpleTextFeild';
import Checkbox from '@material-ui/core/Checkbox';
import DateFeild from './DateFeild';
import SelectGroup from './SelectGroup';
import 'date-fns';
import Axios from 'axios';

export class Form9 extends Component {
  
    state = {
        id : "oioi332",
        difficultyInOrgasm : '',
        reducedLibido : '',
        prematureEjaculation : '',
        impotency : '',
        excessiveSexualSurge : '',
        completeAbstinence : '',
        
    }

    add = (e) => {
        
        this.setState({[e.target.name] : e.target.checked});
        const {difficultyInOrgasm} = this.state;
        console.log(difficultyInOrgasm , typeof(difficultyInOrgasm))
        
    }

    continue = e => {
    e.preventDefault();
    this.props.nextStep();
    console.log(this.state);
    const abc = new Array();
    abc.push(this.state)
    console.log(abc);
    this.props.setSexualProblems(abc);
    console.log(abc);

    if(this.state.difficultyInOrgasm){
      this.state.difficultyInOrgasm="Difficulty In Orgasm. ";
    }else{
      this.state.difficultyInOrgasm="";
    }
    if(this.state.reducedLibido){
      this.state.reducedLibido="Reduced Libido. ";
    }else{
      this.state.reducedLibido="";
    }
    if(this.state.prematureEjaculation){
      this.state.prematureEjaculation="Premature Ejaculation. ";
    }else{
      this.state.prematureEjaculation="";
    }
    if(this.state.impotency){
      this.state.impotency="Impotency. ";
    }else{
      this.state.impotency="";
    }
    if(this.state.excessiveSexualSurge){
      this.state.excessiveSexualSurge="Excessive Sexual Surge. ";
    }else{
      this.state.excessiveSexualSurge="";
    }
    if(this.state.completeAbstinence){
      this.state.completeAbstinence="Complete Abstinence. ";
    }else{
      this.state.completeAbstinence="";
    }
    console.log(this.props.difficultyInOrgasm);

    Axios.post("https://addict-rehab-app.herokuapp.com/sexual_hist_insert",{
      reg_no:this.props.values.reg,
      extra_marital:this.props.values.extra_marital,
      pre_marital:this.props.values.pre_marital,
      high_risk_sexual:this.props.values.high_risk_sexual,
      sexual_prblms:this.state.difficultyInOrgasm+""+this.state.reducedLibido+""+this.state.prematureEjaculation+""+this.state.impotency+""+this.state.excessiveSexualSurge+""+this.state.completeAbstinence,
    });

  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange , handleCheckBoxChange} = this.props;
    const {difficultyInOrgasm , reducedLibido , prematureEjaculation , impotency,
        excessiveSexualSurge , completeAbstinence } = this.state;

    return (


      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='lg'
          >
            
            <AppBar title="Enter Personal Details" />
            <h1>Sexual History</h1>
            <br/>
            <SelectGroup
                placeholder="Record extra marital experiences"
                label="extra_marital"
                options={["Yes" , "No"]}
                values={values}
                handleChange={handleChange}
            /><br/>
           <SelectGroup
                placeholder="If un-married,pre marital sexual encounters"
                label="pre_marital"
                options={["Yes" , "No"]}
                values={values}
                handleChange={handleChange}
            />
            <br/>
            <SelectGroup
                placeholder="Have you been involoved in high risk Sexual Activities"
                label="high_risk_sexual"
                options={["Yes" , "No"]}
                values={values}
                handleChange={handleChange}
            /><br/>

            <h3>Sexual Problems</h3>
            <br/>

            <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={difficultyInOrgasm}
            onChange={e => this.add(e)}
            name="difficultyInOrgasm"
            color="primary"
            
            
            />
            </FormControl>
            }
            label="Difficulty In Orgasm"
            />
            <br/>
            <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={reducedLibido}
            onChange={e => this.add(e)}
            name="reducedLibido"
            color="primary"
            
            
            />
            </FormControl>
            }
            label="Reduced Libido"
            />
            <br/>
            <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={prematureEjaculation}
            onChange={e => this.add(e)}
            name="prematureEjaculation"
            color="primary"
            
            
            />
            </FormControl>
            }
            label="Premature Ejaculation"
            />
            <br/>
            <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={impotency}
            onChange={e => this.add(e)}
            name="impotency"
            color="primary"
            
            
            />
            </FormControl>
            }
            label="Impotency"
            />
            <br/>
            <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={excessiveSexualSurge}
            onChange={e => this.add(e)}
            name="excessiveSexualSurge"
            color="primary"
            
            
            />
            </FormControl>
            }
            label="Excessive Sexual Surge"
            />
            <br/>
            
            <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={completeAbstinence}
            onChange={e => this.add(e)}
            name="completeAbstinence"
            color="primary"
            
            
            />
            </FormControl>
            }
            label="Complete Abstinence"
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
      </MuiThemeProvider> );
}
}

export default Form9;
