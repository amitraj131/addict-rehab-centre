import React from "react";
import SelectGroup from './SelectGroup';
import SimpleTextFeild from "./SimpleTextFeild";


function UntowardExplain(props){
    const {values , handleChange , status} = props;

    if(status === "Yes"){
        return(
            <div>
                <SimpleTextFeild
                    handleChange={handleChange}
                    values={values}
                    label="describeUntoward"
                    placeholder="Describe the incident"
                    type="text"
                />
                <br/>
                <SimpleTextFeild
                    handleChange={handleChange}
                    values={values}
                    label="untowardActionTaken"
                    placeholder="Action Taken"
                    type="text"
                />
            </div>
        );
    }
    else{
        return(null);
    }
}

export default UntowardExplain;