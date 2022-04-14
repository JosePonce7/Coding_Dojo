import React from 'react';
import './App.css';
import PersonCard from './components';

class Header extends PersonCard {
  render() {
      return (
          <div className='header'>
              <h1>dd</h1>
              <PersonCard />
          </div>
      );
  }
}

export default Header;
