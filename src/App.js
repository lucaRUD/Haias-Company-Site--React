import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';



import Tinting from './components/pages/Tinting';
import Wrapping from './components/pages/Wrapping';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Branding from './components/pages/Branding';
import Buycar from './components/pages/Buycar';
import Footer from './components/Footer';
import ScrollToTop from './components/scrollToTop';




function App() {
  return (
    <Router >
      <ScrollToTop />
      <Navbar />

      <Switch>

        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Buycar} />
        <Route path='/tinting' exact component={Tinting} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/wrapping' exact component={Wrapping} />
        <Route path='/branding' exact component={Branding} />
        <Route path='/buycar' exact component={Buycar} />

      </Switch>
      <Footer />
    </Router >
  );
}

export default App;
