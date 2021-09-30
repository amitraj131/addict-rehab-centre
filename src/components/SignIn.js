
import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography';
import Admin from './Admin';
import Staff from './Staff';


const useStyles = makeStyles((theme) => ({
TextField:{
  width:420,
  
}
}))

function SignIn(props){
  const styl=useStyles();
  const [userList,setUserList]=useState([]);
  const [uname,setname]=useState("");
  const [pass,setpass]=useState("");
  const [check,setCheck]=useState(false);
  const [err,seterr]=useState("");

  useEffect(()=>{
    Axios.get("https://addict-rehab-app.herokuapp.com/read").then((response)=>{
        setUserList(response.data);
        
    });
},[]);

const checkLogin=()=>{
  const isError=false;
  console.log(userList);
  { userList.map((val,key)=>{
    if(val.uname==uname && val.pass==pass){
      if(val.role=="Staff"){
        
        return(ReactDOM.render(
          <Staff />,
          document.getElementById('root')
      ))
      }
      else{
        
        return(ReactDOM.render(
          <Admin />,
          document.getElementById('root')
      ))
      }
    }
    else
    { 
      seterr("Check Username or Password and try again");
    }
     
})
}



}
  
  return(
    <div  >
       
      <Typography variant="h4"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sign In      </Typography><br/>
      <TextField className={props.n1} style={{width:'425px'}} id="outlined-basic" label="Username" variant="outlined" onChange={(event)=>{setname(event.target.value);}} /><br /><br/>
      <TextField className={props.n1} style={{width:'425px'}} id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" onChange={(event)=>{setpass(event.target.value);}} /><br /><br />
      <Button  className={props.n1} style={{width:'425px',height:'50px'}}  type="submit" onClick={checkLogin} variant="contained" color="primary">Sign In</Button>
      <br/><center><div style={{fontSize:"18px",color:"red"}}>{err}</div></center>
    </div>
  )
  
}
export default SignIn;