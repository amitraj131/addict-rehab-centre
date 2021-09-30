import React from "react"
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Axios from 'axios';
function DSM(props){
   
    const {values} = props;

    const [state , setState] = React.useState({
            1 : Number,
            2 : Number,
            3 : Number,
            4 : Number,
            5 : Number,
            6 : Number,
            7 : Number,
            8 : Number,
            9 : Number,
            10 : Number,
            11 : Number,
            12 : Number,
            13 : Number,
            14 : Number,
            15 : Number,
            16 : Number,
            17 : Number,
            18 : Number,
            19 : Number,
            20 : Number,
            21 : Number,
            22 : Number,
            23 : Number,
    });

    let input;
    const handle = (e , input) => {
            const score = Number(e.target.value);
            setState({
                    ...state , [input] : score
            })
        
            console.log(state["1"])
            console.log(typeof(state["1"]))
    }

    const max = (a , b) => {
            if(a > b){
                return a;
            }
            else{
                return b;
            }
    }
    const continue1 = e => {
        e.preventDefault();
        props.nextStep();
        var sec1 = max(state["1"] , state["2"]);
        var sec2 = state["3"];
        var sec3 = max(state["4"] , state["5"]);
        var sec4 = max(state["6"] , state["7"]);
        sec4 = max(state["8"] , sec4);
        var sec5 = max(state["9"] , state["10"]);
        var sec6 = state["11"];
        var sec7 = max(state["12"] , state["13"]);
        var sec8 = state["14"];
        var sec9 =  state["15"];
        var sec10 = max(state["16"] , state["17"]); 
        var sec11 = state["18"];
        var sec12 = max(state["19"] , state["20"]);
        var sec13 = max(state["21"] , state["22"]);
        sec13 = max(state["23"] , sec13);
        Axios.post("https://addict-rehab-app.herokuapp.com/dsm_insert",{
            reg_no:values.reg,
            sec1 : sec1,
            sec2 : sec2,
            sec3 : sec3,
            sec4 : sec4,
            sec5 : sec5,
            sec6 : sec6,
            sec7 : sec7 ,
            sec8 : sec8 ,
            sec9 : sec9 ,
            sec10 : sec10 ,
            sec11  : sec11 ,
            sec12 : sec12 ,
            sec13 : sec13
            
          })
        
      };
    
    const back = e => {
        e.preventDefault();
        console.log(state);
        props.prevStep();
      };

    return(
        <MuiThemeProvider>

        <>
          <Dialog
            open
            fullWidth
            maxWidth='lg'
          >
        <h3>DSM-5 Questionnaire</h3>
        <br/>
        <br/>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"1"}>{"Little Interest or Pleasure in Doing things?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["1"]}
        onChange={e=>handle(e , "1")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"2"}>{"Feeling Down , Depressed or Hopeless ?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["2"]}
        onChange={e=>handle(e , "2")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"3"}>{"Feeling More Irritated , grouchy or Angry than usual?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["3"]}
        onChange={e=>handle(e , "3")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"4"}>{"Sleeping Less than usual , but still have a lot of energy? "}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["4"]}
        onChange={e=>handle(e , "4")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"5"}>{"Starting lots more projects than usual or doing more risky things than usual?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["5"]}
        onChange={e=>handle(e , "5")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"6"}>{"Feeling Nervous , Anxious , Frightened ,  worried , or on edge?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["6"]}
        onChange={e=>handle(e , "6")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"7"}>{"Feeling Panic or Being Frightened?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["7"]}
        onChange={e=>handle(e , "7")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"8"}>{"Avoiding Situations that makes you anxious?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["8"]}
        onChange={e=>handle(e , "8")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"9"}>{"Unexplained aches and pains(eg : head , back , joints , abdomen , legs.)?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["9"]}
        onChange={e=>handle(e , "9")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"10"}>{"Feeling that your illnesses are not being taken seriously enough?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["10"]}
        onChange={e=>handle(e , "10")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"11"}>{"Thoughts of actually hurting yourself?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["11"]}
        onChange={e=>handle(e , "11")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"12"}>{"Hearing things other people couldn't hear , such as voices when no one was around?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["12"]}
        onChange={e=>handle(e , "12")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"13"}>{"Feeling that someone could hear your thoughts , or that you could hear what another person was thinking?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["13"]}
        onChange={e=>handle(e , "13")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"14"}>{"Problems with sleep that affected your sleep quality overall?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["14"]}
        onChange={e=>handle(e , "14")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"15"}>{"Problems with memories (eg : learning new information) or location (eg : finding your way home)?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["15"]}
        onChange={e=>handle(e , "15")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"16"}>{"Unpleasant thoughts , urges , or images that repeatedly enter your mind?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["16"]}
        onChange={e=>handle(e , "16")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"17"}>{"Feeling Driven to perform certain behaviours or mental acts over and over again?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["17"]}
        onChange={e=>handle(e , "17")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"18"}>{"Feeling Detached or distant from yourself,your body,your physical surroundings, or your memories?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["18"]}
        onChange={e=>handle(e , "18")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>

        <FormControl>
        <InputLabel htmlFor={"19"}>{"Not knowing who you really are or what you want out of life?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["19"]}
        onChange={e=>handle(e , "19")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"20"}>{"Not Feeling close to other people or enjoying your relationship with them?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["20"]}
        onChange={e=>handle(e , "20")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"21"}>{"Drinking atleast 4 drinks of any kind of alcohol per day?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["21"]}
        onChange={e=>handle(e , "21")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"22"}>{"Smoking Cigarettes , a cigar , or a pipe , snuff or chewing tobacco?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["22"]}
        onChange={e=>handle(e , "22")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <FormControl>
        <InputLabel htmlFor={"23"}>{"Using PainKillers , Sedatives with Doctor's Prescription?"}</InputLabel>
        <Select
        native
        fullWidth
          
        value={state["23"]}
        onChange={e=>handle(e , "23")}
        inputProps={{
            name : '',
            
        }}
        >
        <option aria-label="None" value="" />
        <option aria-label="None" value="0">0</option>
        <option aria-label="None" value="1">1</option>
        <option aria-label="None" value="2">2</option>
        <option aria-label="None" value="3">3</option>
        <option aria-label="None" value="4">4</option>  

        </Select>
        </FormControl>
        <br/>
        <Button
        color="secondary"
        variant="contained"
        onClick={back}
        >Back</Button>

        <Button

        color="primary"
        variant="contained"
        onClick={continue1}
        >Continue</Button>
         </Dialog>
        </>
      </MuiThemeProvider>
    );

}

export default DSM;