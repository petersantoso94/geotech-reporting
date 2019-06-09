import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.css';
import App from './App';
import GridReports from './GridReports';
import Notfound from './NotFound';
import registerServiceWorker from './registerServiceWorker';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/report" component={GridReports} />
            <Route component={Notfound} />
        </Switch>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));
registerServiceWorker();
