import React from 'react'
import TextField from '@material-ui/core/TextField';

function Brothers(props){
    if(props.status){
        return (
            <div>
            <TextField
                name="age"
                label="Brother's Age"
                onChange={e => props.change(e)}
                id={props.inputField.id}
                margin="normal"
                type="number"
                fullWidth
            
            />
            <br></br>
            <TextField
                name="health"
                label="Brother's Health"
                onChange={e => props.change(e)}
                id={props.inputField.id}
                margin="normal"
                fullWidth
            />
            </div>
        );
    }
    else{
        return (
            <div>
            <br></br>
            <TextField
                name="cod"
                onChange={e => props.change(e)}
                label="Brother's Cause of Death"
                id={props.inputField.id}
                margin="normal"
                fullWidth
            />
            <br/>
            <TextField
                name="aad"
                onChange={e => props.change(e)}
                id={props.inputField.id}
                label="Brothers's Age at Death"
                type="number"
                margin="normal"
                fullWidth
            />
            <br/>
            <TextField
                name="paad"
                onChange={e => props.change(e)}
                id={props.inputField.id}
                label="Patient's Age at Death"
                margin="normal"
                type="number"
                fullWidth
            />
            </div>
        );
    }
}

export default Brothers;