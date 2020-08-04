import React from "react";
import { MenuContainer } from "../components";
import { SignUpFormContainer } from "../components/sign-up-form/index";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export const SignUpScreen = () => (
  <>
    <MenuContainer />
    <Card>
      <Card.Text className="text-secondary font-weight-dark">
        Your favorite microblogging platform
      </Card.Text>
      <SignUpFormContainer />
      <Link to="/">
        <Button>
          <h6>Return home.</h6>
        </Button>
      </Link>
    </Card>
  </>
);
