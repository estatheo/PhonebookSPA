import React, { Component } from 'react';
import MainContainer from './components/container/MainContainer';
import {Header} from 'semantic-ui-react';
import logo from './content/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header size='huge' inverted>Phonebook </Header>
        </header>
        <MainContainer />
      </div>;
  }
}

export default App;
