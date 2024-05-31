import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { Route, Router } from '@solidjs/router';

const Home: Component = () => <></>;

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
};

export default App;
