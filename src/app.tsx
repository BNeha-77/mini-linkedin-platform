import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import PostFeed from './components/Feed/PostFeed';
import ProfilePage from './components/Profile/ProfilePage';
import Home from './pages/index';
import Feed from './pages/feed';
import UserProfile from './pages/profile';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/feed" component={Feed} />
                <Route path="/profile/:userId" component={UserProfile} />
            </Switch>
        </Router>
    );
};

export default App;