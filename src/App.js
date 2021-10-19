
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layouts/Alert';
import Landing from './components/layouts/Landing';
import Navbar from './components/layouts/Navbar';
import store from './store';



function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
        <Navbar />
        <Route exact path="/" component={ Landing } />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
          </Switch>
        </section>
        </Router>
      </Provider>
    </>
  );
}

export default App;
