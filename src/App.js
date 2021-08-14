import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/index';


function App() {
  return (
    <Router>      
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>      
    </Router>
  );
}

export default App;

// HOSTING: https://www.youtube.com/watch?v=XSTU2w5RRwY
