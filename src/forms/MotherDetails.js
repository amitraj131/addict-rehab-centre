import React from 'react'
import SimpleTextFeild from './SimpleTextFeild';

function MotherDetails(props){
    const {values} = props;
    if(props.status){

        values.m_alive = "true";
        values.m_dead = "false";
        return (
            <div>
            <SimpleTextFeild
                label="f_mother_age"
                type="number"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Mother's Age"
            />
            <br></br>
            <SimpleTextFeild
                label="f_mother_health"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Mother's health description"
            />
            </div>
        );
    }
    else{

        values.m_alive = "false";
        values.m_dead = "true";
        return (
            <div>
            <SimpleTextFeild
                label="f_mother_year_of_death"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Mother's Year Of Death"
            />
            <br></br>
            <SimpleTextFeild
                label="f_mother_cause_of_death"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Mother's Cause Of Death"
            />
            <SimpleTextFeild
                label="f_mother_patient_age_at_death"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Patient's Age at death"
            
            />
            </div>
        );
    }
}

export default MotherDetails;