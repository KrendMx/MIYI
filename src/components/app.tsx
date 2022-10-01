import Router, { Route } from 'preact-router';
import { h } from 'preact';
import Home from '../routes/Home';
import Header from '../routes/Home/Header';

const App = () => {
    return (
        <div className='app'>
           <Router>
            <Route path='/' component={Home} />
           </Router>
        </div>
    );
};

export default App;
