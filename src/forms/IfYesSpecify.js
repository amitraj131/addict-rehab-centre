import React from 'react';
import TextField from '@material-ui/core/TextField';
import ReactDOM from 'react-dom';
function IfYesSpecify(props){
    const {yes , label ,type , placeholder , values , handleChange } = props;
    if(yes == "Yes"){
        
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
        />
        <br/>
        </div>
    );
    }
    else{
        return null;
    }


}

export default IfYesSpecify;