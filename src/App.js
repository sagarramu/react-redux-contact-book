import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Contacts from './components/contact/Contacts';
import AddContact from './components/contact/AddContact';
import EditContact from './components/contact/EditContact';
import { Container } from 'react-bootstrap';
import Header from './layout/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route exact path="/contacts/add" component={AddContact} />
            <Route exact path="/contact/edit/:id" component={EditContact} />
          </Switch>
        </Router>
      </Container>
    </Provider>
  );
}

export default App;
