import React from 'react';
import SimpleTextFeild from './SimpleTextFeild';
import SelectGroup from './SelectGroup';
function Legalities(props){
    const {values,handleChange,yes} = props;
    if(yes=="Yes"){
        return(
            <div>
                <SelectGroup
                    options={["Arrested for being drunk/drug" , "Fined for Drunk and Driving"
                , "Met with an accident while drunk driving" , "Assault" , "Other"]}
                    values={values}
                    label="legalCases"
                    placeholder="Type of Legal Issue"
                    handleChange={handleChange}
                />
                <SimpleTextFeild
                    label="numberOfTimesLegalities"
                    values={values}
                    handleChange={handleChange}
                    placeholder="Number of times"
                    type="number"
                />
            </div>
        );
    }
    else{
        return null;
    }
}
export default Legalities;