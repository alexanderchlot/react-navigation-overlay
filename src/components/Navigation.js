import React from 'react';
import './Navigation.css';

const Navigation = (props) => (
    <div id="myNav" className="overlay">
        <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
        <div className="overlay-content">
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
        </div>
    </div>
);

export default Navigation;