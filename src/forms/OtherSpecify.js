import React from 'react';
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom';
function OtherSpecify(props){
    const {otherSelected,label ,type , placeholder , values , handleChange,error,helperText } = props;
    if(otherSelected){
        
    return(
        <div>
            <TextField
                defaultValue={values[label]}
                onChange={handleChange(label)}
                type={type}
                label={placeholder}
                margin="normal"
                fullWidth
                required
                error={error}
                helperText={helperText}
        />
        <br/>
        </div>
    );
    }
    else{
        return null;
    }


}

export default OtherSpecify;