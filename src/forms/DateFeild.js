import React from 'react'
import TextField from '@material-ui/core/TextField';


//<DateFeild
//             handleChange={handleChange}
//             values={values}
//             label="test"
//             placeholder={"Date"}
      
// />



function DateFeild(props)
{   
    let label = props.label;
    return (<TextField
        id="datetime-local"
        label={props.placeholder}
        type="date"
        onChange={props.handleChange(label)}
        defaultValue={props.values[label]}
        sx={{ width: 250 }}
        InputLabelProps={{
          shrink: true,
        }}
        error={props.error}
        helperText={props.helperText}
      />)
}

export default DateFeild;