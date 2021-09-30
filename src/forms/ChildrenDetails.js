import React , {Component} from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Children from './Children';
import Button from '@material-ui/core/Button';
import { render } from 'react-dom';
function ChildrenDetails(props){
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
        <Children
            status={i.alive}
            inputField={i}
            change={props.change}
            
            


        />
        <br/>
        <Button
         
              color="secondary"
              variant="contained"
              onClick={props.addChild}
              >+</Button>
              <br/>
        <Button
         
         color="primary"
         variant="contained"
         onClick={event => props.handleChildren(event)}
         >Send</Button>
       

        </div>
    );
}
export default ChildrenDetails;