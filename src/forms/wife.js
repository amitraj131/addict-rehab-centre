import React , {Compo} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Brothers from './Brothers';
import Button from '@material-ui/core/Button';
import { render } from 'react-dom';
function WifeDetails(props){
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
              onClick={props.addWife}
              >+</Button>
              <br/>
        <Button
         
         color="primary"
         variant="contained"
         onClick={event => props.handleWife(event)}
         >Send</Button>
       

        </div>
    );
}
export default BrotherDetails;