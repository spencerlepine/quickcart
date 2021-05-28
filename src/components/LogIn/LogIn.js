import React, { useState } from "react";
import { Link } from "react-router-dom"
import { SIGNUP } from "../../constants/routeConstants"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAuth from "../../context/AuthContext/AuthContext"
import useNotification from "../../context/NotificationContext/NotificationContext"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useStyles from "./styles"

function LogIn() {
  const classes = useStyles()
  const { setNotification } = useNotification()
  const { loginUser } = useAuth()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 1 && password.length > 7;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      try {
        await loginUser(email, password)
      } catch {
        setNotification("Invalid credentials", "Please try again", "danger")
      }
    }
  }

  return (
    <div className={`LogIn ${classes.auth_wrapper}`}>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
      <Link to={SIGNUP}>Sign Up</Link>
    </div>
  );
}

const isAuthPage = true
export default withAuthRedirect(LogIn, isAuthPage);