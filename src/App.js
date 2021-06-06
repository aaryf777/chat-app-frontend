import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import Chat from './Chat';
import Join from './Join';
export default function App() {
    return (
        <Router>
            <Route exact path = '/' component = {Join}/>
            <Route path = '/chat' component = {Chat}/>
        </Router>
    );
}
