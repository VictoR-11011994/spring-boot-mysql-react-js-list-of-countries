import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import ListCountries from './components/main/countries/ListCountries';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <main className="animate__animated animate__fadeIn animate__slower">
          <Switch>
            <Route path="/" exact component = { ListCountries }></Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
