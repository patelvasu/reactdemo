import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertComponents = (props) => {    
  return (
    props.alert && <div className="container my-2">
      <Alert variant={props.alert.variant} dismissible>        
        <p>{props.alert.message}</p>
      </Alert>
    </div>
  );
};
export default AlertComponents;
