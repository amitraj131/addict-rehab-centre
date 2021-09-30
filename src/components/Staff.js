import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import StaffNavbar from './StaffNavbar';
import Home from './Home';
import About from './About';
import PatientsView from './PatientsView';
import Footer from './Footer';
import UserForm from '../forms/UserForm';




function App(){
    return(
        <BrowserRouter>
            <StaffNavbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/register' component={UserForm} />
                <Route path='/patients' component={PatientsView}  />
                

            </Switch>
            <Footer />
        </BrowserRouter>
        
    );
}

export default App;