import React from "react";
import { LoginFormContainer, MenuContainer } from "../components";
import { Link } from "react-router-dom";
import "./Home.css";
import { Card, Button } from "react-bootstrap";

export const HomeScreen = () => (
  <div className="HomeScreen">
    <MenuContainer />
    <Card>
      <Card.Text className="text-secondary font-weight-dark">
        Your favorite microblogging platform
      </Card.Text>
      <LoginFormContainer />
      <Link to="/signup">
        <Button className='mt-3'>New user? Sign up here.</Button>
      </Link>
    </Card>
  </div>
);
