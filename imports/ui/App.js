// Library Imports
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
//Core Components loaded every time
import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
//Pages
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {NotFound} from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar user={this.props.user}/>
                    <div className={"content"}>
                        <Switch>
                            {this.props.user ?
                                <Route exact path={'/'} component={Dashboard}/>
                                : <Route exact path={'/'} component={Home}/>
                            }
                            <Route path={'/home'} component={Home}/>
                            <Route path={'/about'} component={About}/>
                            <Route path={'/dashboard'} component={Dashboard}/>
                            <Route path={'/login'} component={LogIn}/>
                            <Route path={'/profile'} component={Profile}/>
                            <Route component={NotFound}/>
                        </Switch>
                        <div className={"container"}>
                            <Footer/>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default withTracker(() => {
    return {
        user: Meteor.user(),
    }
})(App);


