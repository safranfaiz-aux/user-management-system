import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import UserLogin from '../login/UserLogin';
import Registration from '../registration/UserRegistration';

const Dashboard = () => {
    return (
        <Router>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/login" component={UserLogin} />
                    <Route path="/reg" component={Registration} />
                </Switch>

            </div>
        </Router>

    );
}

const Home = () => (
    <div>
        <h3>Welcome to the Home Page</h3>
    </div>
)

export default Dashboard;