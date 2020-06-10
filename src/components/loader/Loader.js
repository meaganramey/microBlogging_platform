import React from "react";
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'


export const Loader = () => {
    return(
        <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    )}
