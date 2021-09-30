import React from 'react'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

//<SelectGroup
//values={values}
//handleChange={handleChange}
//label="test"
//options={["One" , "Two" , "Three"]}
//placeholder="This is the test value"
///>

function SelectGroup(props){
    let label = props.label;
    let options = props.options;
    return (<FormControl style={{minWidth:"100%"}}>
        <InputLabel htmlFor={label}>{props.placeholder}</InputLabel>
        <Select
        native
        fullWidth
        value={props.values[label]}
        onChange={props.handleChange(label)}
        inputProps={{
            name: '',
            id: {label},
        }}
        error={props.error}
       
        >
        <option aria-label="None" value="" />
        {options.map(option =>(
            <option value={option} >{option}</option>
        ))}       
        </Select>
        <div style={{fontSize:"13px",color:"red"}}>{props.helperText}</div>
        </FormControl>)
}

export default SelectGroup;