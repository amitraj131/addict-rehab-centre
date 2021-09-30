import React from 'react'
import SimpleTextFeild from './SimpleTextFeild';

function FatherDetails(props){
    const {values} = props;
    if(props.status){

        
        
        values.f_alive = "true";
        values.f_dead = "false";

        return (
            <div>
            <SimpleTextFeild
                label="f_father_age"
                type="number"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Father's Age"
            />
            <br></br>
            <SimpleTextFeild
                label="f_father_health"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Father's health description"
            />
            </div>
        );
    }
    else{
        
        values.f_alive = "false";
        values.f_dead = "true";

        return (
            <div>
            <SimpleTextFeild
                label="f_year_of_death"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Father's Year Of Death"
            />
            <br></br>
            <SimpleTextFeild
                label="f_cause_of_death"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Father's Cause Of Death"
            />
            <SimpleTextFeild
                label="f_patient_age_at_death"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Patient's Age at death"
                type="number"
            />
            </div>
        );
    }
}

export default FatherDetails;