import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import './MessageFeed.css';

export const MessageFeed = ({ logout }) => {   
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

MessageFeed.defaultProps = {    
    logout: () => {}
  };
  
MessageFeed.propTypes = {    
    logout: ProptTypes.func.isRequired
  };
  

export default MessageFeed;