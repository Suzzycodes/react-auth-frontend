import React, { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setlogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    // make a popup alert showing the "submitted" text
    alert("Submited");
    // set configurations
    const configuration = {
        method: "post",
        url: "https://nodejs-mongodb-auth-app.herokuapp.com/login",
        data: {
          email,
          password,
        },
      };
      
        // make the API call
        axios(configuration)
        .then((result) => {
        setlogin(true);
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
            path: "/",
      });
      
        // redirect user to the auth page
        window.location.href = "/auth";

        })
        .catch((error) => {
        error = new Error();
        });

  }

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>

        <Button 
        variant="primary" 
        type="submit"
        onClick={(e) => handleSubmit(e)}>
         Login
        </Button>
         {/* display success message */}
         {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}

      </Form>
    </>
  );
}
