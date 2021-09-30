import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
   backgroundColor:'steelblue',
    //backgroundColor:'#4d88ff',
    position:'static',
    bottom:5,
    left:8,
    right:8,
    textAlign:'center',
    width:'auto',
    fontFamily:'calibri',
    fontSize:'22px',
  },
});

function Footer(){
    const styl=useStyles();
    
    return(
        <div >
            <Grid container >
            {/* <Grid item xs={1} className={styl.root}></Grid> */}
              <Grid item xs={12} className={styl.root} style={{textAlign:'center'}} >
                <br/>
                <Typography style={{fontSize:'22px'}}><b>Address</b></Typography>
                <p style={{fontSize:'18px'}}>Akhila Karnataka Jana Jagruthi Vedike,<br/>
                Sri Kshethra Dharmastala Complex
                Belthangady Taluk,<br/>
                Dakshina Kannada District, Pin Code : 574214</p>
            
            </Grid>
            
            
            </Grid>
        </div>
    )

}

export default Footer;