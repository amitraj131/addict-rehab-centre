import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControl from '@material-ui/core/FormControl';
function CheckboxLabels(props) {

      let label = props.label;
      

      return (<FormControlLabel
        control={
            <FormControl>
          <Checkbox
            native
            defaultChecked={props.values[label]}
            onChange={props.handleCheckBoxChange(props.label)}
            name={label}
            color="primary"
            
            
          />
          </FormControl>
        }
        label={props.placeholder}
      />)
}


export default CheckboxLabels;