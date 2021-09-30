import React from 'react';
import BrotherDetails from './BrotherDetails';
import { v4 as uuidv4 } from 'uuid';


function RenderBrothers(props){
    const [inputFields, setInputFields] = React.useState([{id : uuidv4() ,alive : true, age : '' , health : '' , aad : '' , cod : '' , paad : ''}]);
    
    const addBrother = () => {
        
        console.log("Already Added" , inputFields)
        setInputFields([...inputFields , {id : uuidv4() ,alive : true, age : '' , health : '' , aad : '' , cod : '' , paad : ''}]);
    }
    
    

    const change = e => {
        
        const newInputFields = inputFields.map(inputField => {
            if(inputField.id === e.target.id)
            {
                inputField[e.target.name] = e.target.value;
            }
            return inputField;
        });
        setInputFields(newInputFields);

    }
    const changeCheck = ( e, id) => {
        console.log(e.target.checked);

        const newInputFields = inputFields.map(inputField => {
                if(inputField.id === id)
                {
                    inputField[e.target.name] = e.target.checked;
                }
                return inputField;
        });
        setInputFields(newInputFields);
        console.log(inputFields);
    }

    const sendBrothers = (e) => {
        props.handleBrothers(inputFields)
    }

    

    return(
        <ul>
            {inputFields.map((inputField,index) =>
            {
                    return <div key={index}>
                        <h4>Brother {index+1}</h4>
                        <BrotherDetails
                            inputField={inputField}
                            change={change}
                            changeCheck={changeCheck}
                            addBrother={addBrother}
                            handleBrothers={sendBrothers}


                    />

                    </div>
            })}
        </ul>
    );
}

export default RenderBrothers;