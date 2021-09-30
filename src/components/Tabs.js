import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import { TabContext } from '@material-ui/lab';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import AddStaff from './AddStaff';
import Home from './Home';
import About from './About';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function LabTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={value} style={{maxHeight:"200px"}}>
        <AppBar position="static" >
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Home" value="1" />
            <Tab label="About Us" value="2" />
            <Tab label="Add User" value="3" />
            {/*<Tab label="Users" value="4" />*/}
          </TabList>
        </AppBar>

        <TabPanel value="1" style={{backgroundColor:'#d8f3ea'}}><Home /></TabPanel>
        <TabPanel value="2" style={{backgroundColor:'#d8f3ea'}}><About /></TabPanel>
        <TabPanel value="3"><AddStaff /></TabPanel>
        {/*<TabPanel value="4">Users </TabPanel>*/}
      </TabContext>
    </div>
  );
}