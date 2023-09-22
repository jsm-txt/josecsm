import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header';
import Body from './Body';

function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Body />
      </div>

    </Router>
  );
}

export default App;
