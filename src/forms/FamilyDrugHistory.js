import React from "react"
import SimpleTextFeild from './SimpleTextFeild';
import SelectGroup from './SelectGroup';


function FamilyDrugHistory(props){
    const {values , handleChange , status} = props;

    if(status==="Yes"){
        return(
            <div>

            <SimpleTextFeild
                handleChange={handleChange}
                values={values}
                label="whoInFamily"
                placeholder="Who in the Family"
                type="text"
                />
                <div style={{minWidth:"100%"}}>
            <SelectGroup
                
                values={values}
                handleChange={handleChange}
                label="drugFamily"
                options={["Alcohol" , "Tranquilizers" , "Sedative/Hypnotics" , "Opium"
                    , "Heroin/Brown sugar" , "Morphine" , "Codeine" , "Pentazocine" , "Buprenorphine"
                    , "Ganja/Charas/Hashish" , "Bhang" , "Amphetamine" , "Cocaine" , "Ecstasy" , 
                    , "LSD" ]}
                placeholder="Type Of Drug"
                /></div>
            <SimpleTextFeild
                values={values}
                handleChange={handleChange}
                label="familyPsychiatric"
                placeholder="If any psychiatric illness in Family [who]"
            />
        </div>
        );
    }
    else{
        return (null);
    }
}

export default FamilyDrugHistory;