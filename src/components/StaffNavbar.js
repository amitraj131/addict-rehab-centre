import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link, NavLink, withRouter} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import p1 from '../images/sdm-logo.jpg';
import SignIn from './SignIn';
import Container from '@material-ui/core/Container';
import Carousell from '../components/Carousell';
import Grid from '@material-ui/core/Grid';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  

  return {
   top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    justifyContent:'center',
    alignItems:'center',
    width:'500px'
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize:25
  },
  paper: {
    position: 'absolute',
    width: 450,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    
  },
  paper2: {
    justifyContent:'center',
    alignItems:'center',
    width:'420px'
  },
  modtext:{
    color: 'darkblue',
    textDecoration:'none',
    fontWeight:'bold',
    fontSize:'14px',
    
  },

  img:{
    maxWidth:'100%',  
    maxHeight:'auto'
  }

  
}));

function LoggedOut(){
    document.location="/";
}

function ButtonAppBar() {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div >
    <div style={modalStyle} className={classes.paper}>
     <SignIn n1={modalStyle} n2={classes.paper2}/>
    </div>
  </div>
  );

  return (
    <div >
      
    <div style={{paddingRight:'8px',paddingLeft:'8px',maxWidth:'100%',allignItems:'right'}}  className={classes.root} >
      <AppBar style={{backgroundColor:'white',position:'relative'}} className={classes.img} >
        
          <Grid container >
            <Grid item xs={5}>
              <div >
                <img src={p1} className={classes.img} style={{width:'100%',height:'120px',paddingLeft:'15px',paddingTop:'15px',paddingBottom:'15px'}}/>
              </div>
            </Grid>
            <Grid item xs={7} style={{paddingTop:'20px',paddingLeft:'150px',maxWidth:'100%',paddingRight:'20px'}} >
            <div className={classes.img} >
          <Toolbar classname={classes.img} >
          
          <Button variant="contained" style={{backgroundColor:'MediumSpringGreen'}}><Link to="/"  className={classes.modtext}>Home</Link></Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="contained" style={{backgroundColor:'MediumSpringGreen'}}><Link to="/about" className={classes.modtext}>About Us</Link></Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="contained" style={{backgroundColor:'MediumSpringGreen'}}><Link to="/register" className={classes.modtext}>Patient Registration</Link></Button> 
          &nbsp;&nbsp;&nbsp;
          <Button variant="contained" style={{backgroundColor:'MediumSpringGreen'}}><Link to="/patients" className={classes.modtext}>Patients</Link></Button> 
          &nbsp;&nbsp;&nbsp;
          <Button variant="contained" style={{backgroundColor:'MediumSpringGreen'}} onClick={LoggedOut} >Sign Out</Button> 
          </Toolbar>
          </div>
            </Grid>
          </Grid>
          
         
        
      </AppBar> 
    </div>
    <div>
        <Carousell />
        </div>
    </div>
  );
}

export default withRouter(ButtonAppBar);
