
import React from 'react';
import reactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import p1 from '../images/banner1.jpg';
import p7 from '../images/banner2.jpg'
import p8 from '../images/banner4.jpg'
import p2 from '../images/image.png';
import p3 from '../images/banner3.jpg';
import Carousell from '../components/Carousell';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.min.css';


const contentStyle = {
    height: '160px',
    color: 'blue',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      
      alignItems:'left',
      textAlign:'left',
      color: theme.palette.text.secondary,
      fontSize:19,
      },
      root1: {
        
        alignItems:'center',
        justifyContent:'center',
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(4),
          width: theme.spacing(50),
          height: theme.spacing(50),
        },
      },
  }));


  var sectionStyle = {
    alignItems:'left',
    justifyContent:'left',
    width:'100vw',
    height: "100vh",
    //backgroundImage: `url(${p6})`,
    backgroundColor:'#ffe6ff',
    margin: 0
  };
  


function About(){
   
    const classes = useStyles();
    return(
        <div className={classes.root} style={{backgroundColor:'#d8f3ea'}} >
          
            <br/><br/>
            <div style={{paddingLeft:'30px',paddingRight:'30px'}}>
            <Paper style={sectionStyle} elevation={15}>
            <div ><br/>
              <center>
              <Grid  container spacing={6}>
               
                <Grid item xs className={classes.paper} style={{paddingRight:'20px'}}>
                  
                    <p className={classes.paper} style={{paddingLeft:'20px',paddingRight:'10px',paddingTop:'50px',textAlign:'justify',fontSize:'18px',color:'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Jana JagruthiVedike, a forum creating awareness against bad habits, 
                        is a precious of ShriKshetra Dharmasthala Dharmadhikari 
                        Dr. D. Veerendra Heggade. Realizing the hazards caused by 
                        alcohol addiction venerable Dr. D. Veerendra Heggade discussed 
                        the matter with the renowned personalities of the society. 
                        The collective opinion is the result of shaping a peoples’ 
                        forum to eradicate alcoholism. The social agitation to create 
                        a society free from all bad habits started in 1991. In this 
                        direction ‘Jana JagruthiVedike’ was born in 1992. Now, the forum 
                        has spread its programmes throughout the Karnataka State prompting 
                        various institutions, self-help groups to raise their voice against 
                        alcoholism and related habits.<br/>
                      </p>

                    <p className={classes.paper} style={{paddingLeft:'20px',paddingRight:'10px',paddingTop:'50px',textAlign:'justify',fontSize:'18px',color:'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        The forum has embraced all communities without discriminating 
                        caste and creeds. It has been working in tune with its key-slogan 
                        ‘creation of habit free society is our responsibility’ since 
                        25 years. There are many programmes under this forum and they 
                        have received immense response and the forum has been recognized 
                        as a model in its pursuit.
                      </p>

                    
                    <p className={classes.paper} style={{paddingLeft:'20px',paddingRight:'10px',paddingTop:'50px',textAlign:'justify',fontSize:'18px',color:'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        The de-addiction camp is our founder plan to wean away the 
                        liquor addicts from alcohol at their doorsteps. Started in
                        1997, this has become one of the most demanded programmes 
                        through the co-operation of the community. For its success, 
                        an organizing committee consisting of respectable persons of 
                        the locality in constituted and the camp is run by the active 
                        co-operation of the community.On 2012, for people those who 
                        doesn’t want to get de-addicted in the community camp and keep 
                        that in confidentially, a special camp is going on continuously 
                        i.e., 2 camps in every month in ‘JagruthiSowdha’, Ujire.</p>

                  <p className={classes.paper} style={{paddingLeft:'20px',paddingRight:'10px',paddingTop:'50px',textAlign:'justify',fontSize:'18px',color:'black'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        A camp is of 8 days’ duration and a team of experts’ does 
                        individual and family counseling in order to bring a change
                        of mind in the addict. The entire expenses of the community 
                        camps are borne by the community and follow up programmes are
                        organized and in special camp a small amount of Rs.4000/- is 
                        taken as fee from the inmates. Nava JeevanSamithi of the 
                        de-addicted are formed to help them lead a permanently -addiction 
                        -free life</p>
                      
                    
                  </Grid>
                
                  <Grid item xs className={classes.paper}>
                    
                     <center> <img src={p2} style={{paddingRight:'2px',paddingTop:'80px',height:'100%',maxWidth:'100%'}}  /></center>
                    
                  </Grid>
              </Grid>
              </center>
            </div>
            </Paper>
            <br/><br/>

            <div ><br/>

              <Grid container spacing={6}>
              <Grid item xs className={classes.paper}>
                <img src={p3} style={{width:'100%',height:'550px',paddingTop:'60px',paddingLeft:'40px'}} />
              </Grid>
                <Grid item xs className={classes.paper}>
                <Typography style={{textAlign:'center',fontFamily:'sans-serif',fontSize:'30px'}}><b>Objectives of Forum</b></Typography><br/>
                  <ul style={{alignContent:'justify',textAlign:'justify',paddingRight:'40px',fontSize:'18px',color:'black'}}>
                    <li>People participation programme for the formation of a virtuous society.</li>
                    <li>To create an awareness against the hazards of bad habits.</li>
                    <li>To conduct health awareness programmes regarding the problems of bad habits among youth and student community.</li>
                    <li>Conducting general treatment camps to the addicts.</li>
                    <li>To pressurize for legal action against the anit-social activities like cock-fighting, gambling.</li>
                    <li>To insist upon legal action and fight against and fight against illegal liquor trading and illegal arrack production.</li>
                    <li>Welfare activities through NavajeevanaSamiti (new life) programmes.</li>
                    <li>Envisaging programmes for peaceful family and persistent progress of women and children.</li>
                    <li>Campaigning for the formation of necessary law for the construction of a healthy society.</li>
                    <li>To establish clean and healthy villages through GramaSwasthya (healthy village).</li>
                </ul>
                <br/>
                </Grid>
              </Grid>

            </div>
            
            </div>
            <br/><br/>
        </div>
    )
}

export default About;