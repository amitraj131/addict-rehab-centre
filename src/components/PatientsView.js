import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useState,useEffect} from 'react';
import Axios from 'axios'; 
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function PatientsView(){
    const classes = useStyles();
    const [userList,setUserList]=useState([]);

    useEffect(()=>{
        Axios.get("https://addict-rehab-app.herokuapp.com/read_patient").then((response)=>{
            setUserList(response.data);
            
        });
    },[]);

    return (
      <div>
          <br /><br/><br/>
          <center><h2>Patients Data</h2></center>
          <br/><br/>
          
            <Grid container spacing={3}>
              <Grid item xs={8}></Grid>
            <Grid item xs={6}>
            <Paper elevation={100}>
        <TableContainer style={{paddingRight:'130px',paddingLeft:'130px',backgroundColor:'#d6d6c2'}} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><h4>Name</h4></TableCell>
              <TableCell align="center" ><h4>Registration Number</h4></TableCell>
              <TableCell align="center" ><h4>Camp Number</h4></TableCell>
              <TableCell align="center" ><h4>Age</h4></TableCell>
              <TableCell align="center" ><h4>Gender</h4></TableCell>
              <TableCell align="center" ><h4>Date of Registartion</h4></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {/* userList.map((val,key)=>{
            return(
                 <div key={key}>
                     <h3>{val.uname}</h3>
                     <h3>{val.pass}</h3>
                     <h3>{val.role}</h3>
                </div>
            );
        }) */}
            {userList.map((val,key)=>{
            return(
              <TableRow key={key}>
                <TableCell align="center" component="th" scope="row"><h5>
                  {val.fname}&nbsp;&nbsp;{val.lname}</h5>
                </TableCell>
                <TableCell align="center" ><h5>{val.reg_no}</h5></TableCell>
                <TableCell align="center" ><h5>{val.camp_no}</h5></TableCell>
                <TableCell align="center" ><h5>{val.age}</h5></TableCell>
                <TableCell align="center" ><h5>{val.gender}</h5></TableCell>
                <TableCell align="center" ><h5>{val.dor}</h5></TableCell>
              </TableRow>
              );
            }) 
        }
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
      </Grid>
      <Grid item xs={2}></Grid>
      </Grid>
      
      <br/><br/><br/><br/><br/>
      </div>
    );
}