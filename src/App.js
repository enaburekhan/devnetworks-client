
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landing from './components/layouts/Landing';
import Navbar from './components/layouts/Navbar';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Route exact path="/" component={ Landing } />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={ Register } />
          <Route exact path="/login" component={ Login } />
        </Switch>
      </section>
      </Router>
    </>
  );
}

export default App;
