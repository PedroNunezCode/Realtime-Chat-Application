import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import JoinChat from './components/JoinChat/JoinChat';
import Chat from './components/Chat/Chat';

const App = () => (
    <Router>
        <Route path="/" exact component={JoinChat} />
        <Route path="/chat" component={Chat} />
    </Router>
)

export default App;