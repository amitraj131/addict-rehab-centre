import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import SignIn from './components/SignIn';
import SignUp from './components/SignOut';
import Footer from './components/Footer';
import UserForm from './forms/UserForm';




function App(){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/register' component={UserForm} />
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
            </Switch>
            <Footer />
        </BrowserRouter>
        
    );
}

export default App;