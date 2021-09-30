import React from 'react'
import TextField from '@material-ui/core/TextField';

function Children(props){
    if(props.status){
        return (
            <div>
            <TextField
                name="age"
                label="Childs's Age"
                onChange={e => props.change(e)}
                id={props.inputField.id}
                margin="normal"
                type="number"
                fullWidth
            
            />
            <br></br>
            <TextField
                name="health"
                label="Childs's Health"
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
                label="Childs's Cause of Death"
                id={props.inputField.id}
                margin="normal"
                fullWidth
            />
            <br/>
            <TextField
                name="aad"
                onChange={e => props.change(e)}
                id={props.inputField.id}
                label="Child's Age at Death"
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

export default Children;