import React, { useState } from "react";
import { Link } from "react-router-dom"
import { LOGIN } from "../../constants/routeConstants"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useAuth from "../../context/AuthContext/AuthContext"
import useNotification from "../../context/NotificationContext/NotificationContext"
import withAuthRedirect from "../../hooks/useAuthRedirect/useAuthRedirect"
import useStyles from "./styles"

function SignUp() {
  const classes = useStyles()
  const { signupUser } = useAuth()
  const { setCurrentNotification } = useNotification()  
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("")
  const [passwordValidate, setPasswordValidate] = useState("")

  function validateForm() {
    return email.length > 0 && password.length > 7 && password === passwordValidate;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (validateForm()) {
      try {
        await signupUser(displayName, email, password)
      } catch {
        setCurrentNotification("Invalid email or password", "Please try again", "danger")
      }
    }
  }

  return (
    <div className={`SignUp ${classes.auth_wrapper}`}>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type="name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg">
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg">
          <Form.Label>Validate Password</Form.Label>
          <Form.Control
            id="validate-password"
            type="password"
            value={passwordValidate}
            onChange={(e) => setPasswordValidate(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
      <Link to={LOGIN}>Log In</Link>
    </div>
  );
}

const isAuthPage = true
export default withAuthRedirect(SignUp, isAuthPage);