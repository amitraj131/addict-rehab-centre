import React from 'react';
import ReactDOM from 'react-dom'
import TextField from '@material-ui/core/TextField';
// <SimpleTextFeild
  //                  handleChange={handleChange}
    //                values={values}
      //              label="test"
        //            placeholder={"This is a test feild"}
 //           /> 
function SimpleTextFeild(props){
    let label = props.label;
    
    return (<TextField
    
    label={props.placeholder}
    onChange={props.handleChange(label)}
    defaultValue={props.values[label]}
    margin="normal"
    fullWidth
    required
    type={(props.type === "number")?props.type:""}
    error={props.error}
    helperText={props.helperText}
  />
  )

}

export default SimpleTextFeild;