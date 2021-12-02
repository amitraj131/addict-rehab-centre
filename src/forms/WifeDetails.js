import React from 'react'
import SimpleTextFeild from './SimpleTextFeild';

function WifeDetails(props){

    const {values} = props;

    if(props.status){
        values.m_alive = "true"
        values.m_dead = "false"
        return (
            <div>
            <SimpleTextFeild
                label="f_wife_age"
                type="number"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Spouse's Age"
            />
            <br></br>
            <SimpleTextFeild
                label="f_wife_health"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Spouse's health description"
            />
            </div>
        );
    }
    else{
        values.m_alive = "false"
        values.m_dead = "true"
        return (
            <div>
            <SimpleTextFeild
                label="f_wife_year_of_death"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Wife's Year Of Death"
            />
            <br></br>
            <SimpleTextFeild
                label="f_wife_cause_of_death"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Wife's Cause Of Death"
            />
            <SimpleTextFeild
                label="f_wife_patient_age_at_death"
                handleChange={props.handleChange}
                values={props.values}
                placeholder="Patient's age at death"
            
            />
            </div>
        );
    }
}

export default WifeDetails;