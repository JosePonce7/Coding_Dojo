import React, { Component } from 'react';
import NewComponent from './components';

class Header extends Component {
    render() {
        const {title} = this.props;
        return (
            <div className='header'>
                <h1>Hello Dojo!</h1>
                <h2>Things I need to do:</h2>
                <li>
                  React
                </li>
                <li>
                  Mongo
                </li>
                <li>
                  Surf
                </li>
                <li>
                  Work
                </li>
                <NewComponent/>
            </div>
        );
    }
}

export default Header;
