import React, { Component } from 'react';
import menuIcon from './menu-icon.png';
import './App.css';
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMenu: true,
    }
    // bind toggleMenu (event)
    this.toggleMenu =this.toggleMenu.bind(this);
     // bind openNav
     this.openNav =this.openNav.bind(this);
      // bind closeNav
    this.closeNav =this.closeNav.bind(this);
  }

  // function openNav
  openNav(){
    document.getElementById("myNav").style.width = "100%";
  }
    // function closeNav
    closeNav(){
      document.getElementById("myNav").style.width = "0%";
    }

    toggleMenu(event) {
      this.setState((prevState) => ({
        toggleMenu: !prevState.toggleMenu
      }));
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={menuIcon}
            className={this.state.toggleMenu ? 'static-menu' : 'animated-menu'}
            alt="logo"
            onClick={this.openNav}
          />
          <Navigation closeNav={this.closeNav} />
        </header>
      </div>
    );
  }
}

export default App;
