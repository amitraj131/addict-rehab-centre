import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import p1 from "../images/banner1.jpg";
import p2 from "../images/navjeevan_samithi.jpg";
import p3 from "../images/banner3.jpg";
import p4 from "../images/Treatment-Camps.jpg";
import p5 from "../images/household-visits.jpg";
import p6 from "../images/banner6.jpg";
import Typography from "@material-ui/core/Typography";
import Carousel from "react-bootstrap/Carousel";
import Carousell from "./Carousell";
import { CardContent, CardHeader, CardMedia } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	paper: {
		color: theme.palette.text.secondary,
		fontSize: 19,
	},
}));

var sectionStyle = {
	backgroundColor: "#ffe6ff",
};

export default function AutoGrid() {
	const classes = useStyles();

	return (
		<div style={{ backgroundColor: "#d8f3ea" }}>
			<div>
				<br />
				<br />
				<br />
				<Card elevation={5} style={sectionStyle}>
					<CardContent>
						<Grid container spacing={6}>
							<Grid item xs={12} md={6} className={classes.paper}>
								<CardMedia component="img" height="350" src={p1} />
							</Grid>
							<Grid item xs={12} md={6} className={classes.paper}>
								<Typography
									variant="p"
									component="p"
									style={{ color: "black" }}
								>
									Jana JagruthiVedike, a forum creating awareness against bad
									habits, is a precious of ShriKshetra Dharmasthala
									Dharmadhikari Dr. D. Veerendra Heggade. Realizing the hazards
									caused by alcohol addiction venerable Dr. D. Veerendra Heggade
									discussed the matter with the renowned personalities of the
									society. The collective opinion is the result of shaping a
									peoples’ forum to eradicate alcoholism. The social agitation
									to create a society free from all bad habits started in 1991.
									In this direction ‘Jana JagruthiVedike’ was born in 1992. Now,
									the forum has spread its programmes throughout the Karnataka
									State prompting various institutions, self-help groups to
									raise their voice against alcoholism and related habits.
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
				<br />
				<br />
				<br />
				<br />

				<div>
					<Card elevation={10} style={sectionStyle}>
						<CardHeader
							title={
								<Typography
									style={{
										textAlign: "center",
										fontFamily: "sans-serif",
										fontSize: "30px",
									}}
								>
									<b>Programs</b>
								</Typography>
							}
						/>
						<CardContent>
							<Grid container spacing={6}>
								<Grid item xs={12} md={4}>
									<Paper elevation={20}>
										<div>
											<img src={p3} width="100%" height="220px" />
										</div>
										<div>
											<Typography
												style={{
													textAlign: "center",
													fontFamily: "sans-serif",
													color: "blue",
													fontSize: "25px",
												}}
											>
												<b>Awareness</b>
											</Typography>
											<p
												style={{
													textAlign: "center",
													fontSize: "16px",
													fontFamily: "calibri",
													padding: "8px",
													textAlign: "justify",
												}}
											>
												Massive village level camps are regularly held which
												consist of addresses by the spiritual leaders, doctors
												and former addicts. The main aim of the programme is to
												create better awareness on the evils alcoholic abuse,
												prevent youngsters in the village from talking to
												alcohol and bring harmony within the village. During the
												current year 283 awareness programme were conducted
												benefiting 51,000 families.
											</p>
										</div>
									</Paper>
								</Grid>
								<Grid item xs={12} md={4}>
									<Paper elevation={20}>
										<div>
											<img src={p2} width="100%" height="220px" />
										</div>
										<div>
											<Typography
												style={{
													textAlign: "center",
													fontFamily: "sans-serif",
													color: "blue",
													fontSize: "25px",
												}}
											>
												<b>Navajeevan Samiti</b>
											</Typography>
											<p
												style={{
													textAlign: "center",
													fontSize: "16px",
													fontFamily: "calibri",
													padding: "8px",
													textAlign: "justify",
												}}
											>
												After the camp, New life Committees are formed in the
												villages bringing together the de-addicted people of the
												respective villages. Members of the New Life Committees
												meet periodically, share their experiences, sing bhajans
												and spend time in good company. They discuss their
												individual problems as well as the problems of the
												village. They start the habit of saving. They talk about
												the de-addiction camp too.
											</p>
										</div>
									</Paper>
								</Grid>
								<Grid item xs={12} md={4}>
									<Paper elevation={20}>
										<div>
											<img src={p4} width="100%" height="220px" />
										</div>
										<div>
											<Typography
												style={{
													textAlign: "center",
													fontFamily: "sans-serif",
													color: "blue",
													fontSize: "25px",
												}}
											>
												<b>Deaddiction Camps</b>
											</Typography>
											<p
												style={{
													textAlign: "center",
													fontSize: "16px",
													fontFamily: "calibri",
													padding: "8px",
													textAlign: "justify",
												}}
											>
												Deaddiction camps are conducted in different villages
												based on the demands raised by the district and taluk
												level committees for conduct of such a camp. Wide
												publicity is given to organize the camps. So that
												addicts can directly join the camps. Many times the
												family members, friends, local community will bring
												theaddicts to the camps. For managing the camps local
												level committee is organized who scout for the premises
												and other local facilities.
											</p>
										</div>
									</Paper>
								</Grid>
								<Grid item xs={12} md={4}>
									<Paper elevation={20}>
										<div>
											<img src={p5} width="100%" height="220px" />
										</div>
										<div>
											<Typography
												style={{
													textAlign: "center",
													fontFamily: "sans-serif",
													color: "blue",
													fontSize: "25px",
												}}
											>
												<b>Household Visits</b>
											</Typography>
											<p
												style={{
													textAlign: "center",
													fontSize: "16px",
													fontFamily: "calibri",
													padding: "8px",
													textAlign: "justify",
												}}
											>
												Volunteers of the Janajagrugthi forum make regular house
												visits of the poor people to enquire whether the require
												assistance ofJanajagruthifor treating the addicts in the
												family if any. House visits are also made to meet the
												deaddicted members. The volunteers consist all village
												members,field staff of SKDRDP and deaddicted themselves.
												During the current year a total of 25,850 house visits
												were made.
											</p>
										</div>
									</Paper>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</div>
				<br />
				<br />
				<br />
			</div>
		</div>
	);
}

/*
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import p1 from '../images/banner1.jpg';
import p2 from '../images/navjeevan_samithi.jpg';
import p3 from '../images/banner3.jpg';
import p4 from '../images/Treatment-Camps.jpg';
import p5 from '../images/household-visits.jpg';
import p6 from '../images/banner6.jpg';
import Typography from '@material-ui/core/Typography';
import Carousel from 'react-bootstrap/Carousel';
import Carousell from '../components/Carousell';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    
    alignItems:'center',
    textAlign:'center',
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
        width: theme.spacing(40),
        height: theme.spacing(67),
      },
    },
    img:{
      width:'100%',  
      maxHeight:'auto'
    }
  
}));

var sectionStyle = {
  alignItems:'center',
  justifyContent:'center',
  width:'100%',
  height: "100%",
  //backgroundImage: `url(${p6})`,
  backgroundColor:'#ffe6ff'
  
};


export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div style={{backgroundColor:'#d8f3ea'}}>
    
    <div style={{paddingLeft:'40px',paddingRight:'40px'}} className={classes.root,classes.img}>
      <br/><br/><br/>
      <Paper elevation={5} style={sectionStyle} >
      <Grid container  spacing={6} >
        <Grid item xs  className={classes.paper}>
            <img  src={p1} style={{flex:'1',maxWidth:'100%',maxHeight:'100%',height:'450px',
            paddingLeft:'25px',paddingRight:'25px',paddingTop:'25px',position:'inherit',
            paddingBottom:'25px'}}></img>
         </Grid>
        <Grid item xs className={classes.paper}>
              <p className={classes.paper} style={{paddingLeft:'30px',paddingRight:'50px',paddingTop:'50px',
              textAlign:'justify',color:'black'}}>Jana JagruthiVedike, a forum creating awareness against 
              bad habits, is a precious of ShriKshetra Dharmasthala Dharmadhikari 
              Dr. D. Veerendra Heggade. Realizing the hazards caused by alcohol 
              addiction venerable Dr. D. Veerendra Heggade discussed the matter 
              with the renowned personalities of the society. The collective 
              opinion is the result of shaping a peoples’ forum to eradicate 
              alcoholism. The social agitation to create a society free from all 
              bad habits started in 1991. In this direction ‘Jana JagruthiVedike’ 
              was born in 1992. Now, the forum has spread its programmes throughout 
              the Karnataka State prompting various institutions, self-help groups to 
              raise their voice against alcoholism and related habits.</p>
        </Grid>
        
      </Grid>
      </Paper>
      <br/><br/>
      <br/><br/>        
        
      <div >
      <Paper elevation={10} style={sectionStyle} ><br/>
      <Typography style={{textAlign:'center',fontFamily:'sans-serif',fontSize:'30px'}}><b>Programs</b></Typography>
      <div   className={classes.root1} >
      
      
        <Paper elevation={20} >
          <div>
            <img src={p3}  width="100%" height="220px"/>
          </div>
          <div >
            <Typography style={{textAlign:'center',fontFamily:'sans-serif',color:'blue',fontSize:'25px',}}>
                <b>Awareness</b></Typography>
              <p style={{textAlign:'center',fontSize:'16px',fontFamily:'calibri',padding:'8px',textAlign:'justify'}}>
              Massive village level camps are regularly held which consist of   addresses by the spiritual 
              leaders, doctors and former addicts.   The main aim of the programme is to create better 
              awareness on the evils alcoholic abuse, prevent youngsters in the village from talking to 
              alcohol and bring harmony within the village.  During the current year 283 awareness programme 
              were conducted benefiting 51,000 families.
            </p>
          </div>
        </Paper>
        <Paper elevation={20}>
        <div>
            <img src={p2}   width="100%" height="220px"/>
          </div>
          <div>
            <Typography style={{textAlign:'center',fontFamily:'sans-serif',color:'blue',fontSize:'25px'}}>
                <b>Navajeevan Samiti</b></Typography>
              <p style={{textAlign:'center',fontSize:'16px',fontFamily:'calibri',padding:'8px',textAlign:'justify'}}>
              After the camp, New life Committees are formed in the villages bringing together the 
              de-addicted people of the respective villages. Members of the New Life Committees meet 
              periodically, share their experiences, sing bhajans and spend time in good company. 
              They discuss their individual problems as well as the problems of the village. They 
              start the habit of saving. They talk about the de-addiction camp too.
            </p>
          </div>
        </Paper>
        <Paper elevation={20}>
        <div>
            <img src={p4}   width="100%" height="220px"/>
          </div>
          <div>
            <Typography style={{textAlign:'center',fontFamily:'sans-serif',color:'blue',fontSize:'25px'}}>
                <b>Deaddiction Camps</b></Typography>
              <p style={{textAlign:'center',fontSize:'16px',fontFamily:'calibri',padding:'8px',textAlign:'justify'}}>
                Deaddiction camps are conducted in different villages based on the demands raised by 
                the district and taluk level committees for conduct of such a camp.  Wide publicity 
                is given to organize the camps. So that addicts can directly join the camps.  Many times 
                the family members, friends, local community will bring theaddicts to the camps.  
                For managing the camps local level committee is organized who scout for the premises and 
                other local facilities. 
            </p>
          </div>
        </Paper>
        <Paper elevation={20}>
        <div>
            <img src={p5}   width="100%" height="220px"/>
          </div>
          <div>
            <Typography style={{textAlign:'center',fontFamily:'sans-serif',color:'blue',fontSize:'25px'}}>
                <b>Household Visits</b></Typography>
              <p style={{textAlign:'center',fontSize:'16px',fontFamily:'calibri',padding:'8px',textAlign:'justify'}}>
              Volunteers of the Janajagrugthi forum make regular house visits of the poor people to enquire 
              whether the  require assistance ofJanajagruthifor treating the addicts in the family if any.  
              House visits are also made to meet the deaddicted members.  The volunteers consist all village
              members,field staff of SKDRDP and deaddicted themselves.  During the current year a total of 
              25,850 house visits were made.
            </p>
          </div>
        </Paper>
        </div><br/>
        </Paper>
      </div>
      <br/><br/><br/>
      
      
    </div>
  </div>  
    
  );
}
*/
