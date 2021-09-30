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
            <Grid item xs={6}>
              <div >
                <img src={p1} className={classes.img} style={{width:'1000px',height:'120px',paddingLeft:'60px',paddingTop:'15px',paddingBottom:'15px'}}/>
              </div>
            </Grid>
            <Grid item xs={6} style={{paddingTop:'20px',paddingLeft:'200px',maxWidth:'100%',paddingRight:'10px'}} >
            <div className={classes.img} >
          <Toolbar classname={classes.img} >
          
          <Button variant="contained" style={{backgroundColor:'MediumSpringGreen'}}><Link to="/"  className={classes.modtext}>Home</Link></Button>
          &nbsp;&nbsp;&nbsp;
          <Button variant="contained" style={{backgroundColor:'MediumSpringGreen'}}><Link to="/about" className={classes.modtext}>About Us</Link></Button>
          
          {/*<Button variant="contained" style={{backgroundColor:'MediumSpringGreen'}}><Link to="/register" className={classes.modtext}>Patient Registration</Link></Button> */}
        
        {/*  <Button variant="contained" style={{backgroundColor:'MediumSpringGreen'}}  ><Link to="/signup" className={classes.modtext}>sign up</Link></Button> */}
          &nbsp;&nbsp;&nbsp;
          <Button  variant="contained" style={{backgroundColor:'MediumSpringGreen'}}><a href="http://127.0.0.1:5000/risk" className={classes.modtext}>Risk Prediction</a></Button>
          &nbsp;&nbsp;&nbsp;
          <Button  variant="contained" style={{backgroundColor:'MediumSpringGreen'}}><a href="http://127.0.0.1:5000/aai" className={classes.modtext}>AAI Prediction</a></Button>
          &nbsp;&nbsp;&nbsp;
          <Button  variant="contained" style={{backgroundColor:'MediumSpringGreen'}} onClick={handleOpen} className={classes.modtext} >Sign in</Button>
            <div>
               <Modal
                  justify="center"
                  style={{display:'flex',alignItems:'center',justifyContent:'center'}}
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                {body}
              </Modal>
          </div>
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
