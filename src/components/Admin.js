import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import SignUp from './SignOut';
import Footer from './Footer';
import UserForm from '../forms/UserForm';
import AddStaff from './AddStaff'



function App(){
    return(
        <BrowserRouter>
            <AdminNavbar />
           {/* <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/adduser' component={AddStaff} />
           </Switch>*/}
            <Footer />
        </BrowserRouter>
        
    );
}

export default App;