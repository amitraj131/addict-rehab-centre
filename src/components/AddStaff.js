import React,{useState,useEffect} from 'react';
import Axios from 'axios'; 
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    table: {
        minWidth: 650,
      },
  }));

function AddStaff(){
    const [staffUname,setStaffUname]=useState("");
    const [staffPass,setStaffPass]=useState("");
    const [role,setRole]=useState("");
    const [userList,setUserList]=useState([]);
    const classes = useStyles();

    useEffect(()=>{
        Axios.get("https://addict-rehab-app.herokuapp.com/read").then((response)=>{
            setUserList(response.data);
            
        });
    },[]);


    const addToUser=()=>{
        Axios.post("https://addict-rehab-app.herokuapp.com/insert",{
            staffUname:staffUname,
            staffPass:staffPass,
            role:role
        });
        console.log(staffUname+staffPass+role);
        alert("User added successfully");
      
    };

    

    return(
        <div>
            <Grid container className={classes.root} spacing={3}>
                
                <Grid item xs={4} >
                <Paper elevation={20} >
                    <div style={{backgroundColor:'#d6d6c2'}}>
                    <center><br/><br/>
                        
                        <TextField style={{minWidth:300,backgroundColor:'white'}}
                            id="outlined-basic" 
                            label="User Name" 
                            variant="outlined" 
                            onChange={(event)=>{setStaffUname(event.target.value);}}  
                            /><br/><br/>
                        <TextField style={{minWidth:300,backgroundColor:'white'}}
                            type="password"
                            id="outlined-basic" 
                            label="Password" 
                            variant="outlined" 
                            onChange={(event)=>{setStaffPass(event.target.value);}} 
                            /><br/><br/>

                        <FormControl variant="outlined" style={{minWidth:300,backgroundColor:'white'}}>
                            <InputLabel >User Role</InputLabel>
                                <Select
                                    native
                                //value={state.age}
                                //onChange={handleChange}
                                    label="User Role"
                                    onChange={(event)=>{
                                    setRole(event.target.value);
                                    }}
                                    >
                                    <option value="" />     
                                    <option value="Admin">Admin</option>
                                    <option value="Staff">Staff</option>
                                    </Select>
                            </FormControl><br/><br/>
                            <Button 
                                variant="contained"
                                color="primary"
                                size="small"
                                style={{height:'50px',minWidth:200}}
                                startIcon={<SaveIcon />}
                                onClick={addToUser}
                               
                                >
                                Save
                            </Button>
                        <br/><br /><br/>
                    </center>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={6} >
                <Paper elevation={20} >
                    <div >
                        <TableContainer component={Paper} style={{backgroundColor:'#d6d6c2'}}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                              <TableHead>
                                <TableRow>
                                    <TableCell align="center"><h4>User Name</h4></TableCell>
                                    <TableCell align="center"><h4>Password</h4></TableCell>
                                    <TableCell align="center"><h4>Role</h4></TableCell>
                                    <TableCell align="center"><h4>Action</h4></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody >
                            {userList.map((val,key)=>{
                                return(
                                <TableRow>
                                    <TableCell align="center"><h5>{val.uname}</h5></TableCell>
                                    <TableCell align="center"><h5>{val.pass}</h5></TableCell>
                                    <TableCell align="center"><h5>{val.role}</h5></TableCell>
                                    <TableCell align="center"><h5><DeleteIcon/></h5></TableCell>
                                </TableRow>
                                );
                            })
                            }       
                            </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={1}></Grid>
         </Grid>
     </div>

        /*<div>
        <br/><br/><center>
        Username :  <input type="text" 
        onChange={(event)=>{setStaffUname(event.target.value);}} /><br /><br />
        Password :  <input type="password" 
        onChange={(event)=>{
            setStaffPass(event.target.value);
        }} /><br /><br />
        Role :  <input type="text" 
        onChange={(event)=>{
            setRole(event.target.value);
        }} /><br /><br />
        <input type="button" onClick={addToUser} value="Add" />
        <br/><br />
       {/* <h1>User List</h1>
         userList.map((val,key)=>{
            return(
                 <div key={key}>
                     <h3>{val.uname}</h3>
                     <h3>{val.pass}</h3>
                     <h3>{val.role}</h3>
                </div>
            );
        }) *//*}
        </center>
        </div>*/
    );
}

export default AddStaff;