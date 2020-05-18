import React, { useReducer } from 'react';
import './App.scss';

import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import history from './history';

import Navbar from './components/navbar';
import Hamburger from './components/hamburger';
import Footer from './components/footer';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Media from './pages/media';
import Events from './pages/events';

const LanguageSetStore = React.createContext({});
const LanguageStore = React.createContext({});

function languageReducer(
  state: {lang: string}, 
  action: {type: string, lang: string}
) {
  switch (action.type) {
    case 'update':
      return {lang: action.lang};
    default:
      return {lang: action.lang}
  }
}

history.listen((location, action) => {
    window.scrollTo(0, 0)
})

export default function App() {
  let [state, dispatch] = useReducer(languageReducer, {lang: 'EN'});

  return (
    <div className="app">
      <Router basename="">
        <LanguageStore.Provider value={state.lang}>
          <LanguageSetStore.Provider value={dispatch}>
            <Navbar />
            <Hamburger />
          </LanguageSetStore.Provider>
              <Switch>
                <Route path="/events">
                  <Events />
                </Route>
                <Route path="/contact">
                  {Contact({lang: state.lang})}
                </Route>
                <Route path="/media">
                  {Media()}
                </Route>
                <Route path="/about">
                  {About({lang: state.lang})}
                </Route>
                <Route path="/">
                  {Home({lang: state.lang})}
                </Route>
              </Switch>
          {Footer()}
        </LanguageStore.Provider>
      </Router>
    </div>
  );
}

export {LanguageSetStore, LanguageStore, App};
