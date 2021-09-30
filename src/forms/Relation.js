import React from 'react'
import SelectGroup from './SelectGroup'

function Relation(props){
    if(props.status){
        return(
            <div>
            <br/>
            <SelectGroup
                options={props.options}
                label={props.label}
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Relation"
            />
            <br/>
            </div>
            
        );
    }   
    else{
            return (<div></div>);
    }
}

export default Relation;