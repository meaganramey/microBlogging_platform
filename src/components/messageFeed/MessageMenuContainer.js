import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import './MessageMenuContainer.css';

export const DisplayMessageMenu = ({ logout }) => {   
    return (
        <div id="menu">
            <h1>Kwitter</h1>            
                <div id="menu-links">
                    <Link to="/profiles/:username">Profile</Link>
                    <Link to="/" onClick={logout}>
                        Logout
                    </Link>
                </div>            
        </div>
    );   
}

DisplayMessageMenu.defaultProps = {    
    logout: () => {}
  };
  
DisplayMessageMenu.propTypes = {    
    logout: ProptTypes.func.isRequired
  };
  

