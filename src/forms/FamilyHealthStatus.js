import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Relation from './Relation';

function FamilyHealthStatus(props){
    const [state,setState] = React.useState([{
        f_majorDepression : false,
        f_suicide : false,
        f_psychiatric : false,
        f_alcoholdependence : false,
        f_drugdependence : false,
        f_other : false,
    }]);


    const checkBox = (e) => {
        setState({[e.target.name] : e.target.checked})
    }
    return (
        <div>
            <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={state.f_majorDepression}
            onChange={event => checkBox(event)}
            name="f_majorDepression"
            color="primary"
        />
          </FormControl>
        }
        label="Major Depression"
        />
        <br/>
        <Relation
            status={state.f_majorDepression}
            options={["Parents" , "Siblings" , "Wife" , "Children"]}
            values={props.values}
            handleChange={props.handleChange}
            label="f_majorDepression"
        
        />
        <br/>
        <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={state.f_suicide}
            onChange={event => checkBox(event)}
            name="f_suicide"
            color="primary"
        />
          </FormControl>
        }
        label="Suicide"
        />
        <br/>
        <Relation
            status={state.f_suicide}
            options={["Parents" , "Siblings" , "Wife" , "Children"]}
            values={props.values}
            handleChange={props.handleChange}
            label="f_suicide"
        />
        <br/>
        <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={state.f_psychiatric}
            onChange={event => checkBox(event)}
            name="f_psychiatric"
            color="primary"
        />
          </FormControl>
        }
        label="Psychiatric Problems"
        />
        <br/>
        <Relation
            status={state.f_psychiatric}
            options={["Parents" , "Siblings" , "Wife" , "Children"]}
            values={props.values}
            handleChange={props.handleChange}
            label="f_psychiatric"
        />
        <br/>
        <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={state.f_alcoholdependence}
            onChange={event => checkBox(event)}
            name="f_alcoholdependence"
            color="primary"
        />
          </FormControl>
        }
        label="Alcohol Dependence"
        />
        <br/>
        <Relation
            status={state.f_alcoholdependence}
            options={["Parents" , "Siblings" , "Wife" , "Children"]}
            values={props.values}
            handleChange={props.handleChange}
            label="f_alcoholdependence"

        />
        <br/>
        <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={state.f_drugdependence}
            onChange={event => checkBox(event)}
            name="f_drugdependence"
            color="primary"
        />
          </FormControl>
        }
        label="Drug Dependence"
        />
        <br/>
        <Relation
            status={state.f_drugdependence}
            options={["Parents" , "Siblings" , "Wife" , "Children"]}
            values={props.values}
            handleChange={props.handleChange}
            label="f_drugdependence"
        />
        <br/>
        <FormControlLabel
            control={
            <FormControl>
            <Checkbox
            native
            defaultChecked={state.f_otherss}
            onChange={event => checkBox(event)}
            name="f_otherss"
            color="primary"
        />
          </FormControl>
        }
        label="Others"
        />
        <br/>
        <Relation
            status={state.f_otherss}
            options={["Parents" , "Siblings" , "Wife" , "Children"]}
            values={props.values}
            handleChange={props.handleChange}
            label="f_otherss"
        />
        <br/>
        
        </div>
    );
}

export default FamilyHealthStatus;