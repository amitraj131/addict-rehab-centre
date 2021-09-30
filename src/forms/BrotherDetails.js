import React , {Compo} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Brothers from './Brothers';
import Button from '@material-ui/core/Button';
import { render } from 'react-dom';
function BrotherDetails(props){
    const i = props.inputField;
    
    return(
        <div>
        <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={i.alive}
            onChange={event => props.changeCheck(event , i.id)}
            name="alive"
            id={i.id}
            color="primary"
        />
          </FormControl>
        }
        label="Alive"
        />
        <br/>
        <Brothers
            status={i.alive}
            inputField={i}
            change={props.change}
            
            


        />
        <br/>
        <Button
         
              color="secondary"
              variant="contained"
              onClick={props.addBrother}
              >+</Button>
              <br/>
        <Button
         
         color="primary"
         variant="contained"
         onClick={event => props.handleBrothers(event)}
         >Send</Button>
       

        </div>
    );
}
export default BrotherDetails;