import React from "react";
import { Link } from "react-router-dom";
import errPage from '../images/errPage.jpeg'
import './NotFound.css'


const NotFound = ({ location }) => (
  <div className='error'>
    <img src={errPage} width={1000} alt='errorPage'></img>
    <h3>No page found for "{location.pathname}". <Link to="/">Go Home</Link></h3>
  </div>
);

export const NotFoundScreen = NotFound;
