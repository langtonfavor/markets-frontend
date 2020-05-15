import React, { Component } from 'react';
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import { FacebookLoginButton } from 'react-social-login-buttons';
import Validator from "validator";

import "./Login.css";

class LoginForm extends Component {

state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
};

onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
});

onSubmit = () => {
  const errors = this.validate(this.state.data);
  this.setState({ errors });
  if (Object.keys(errors).length === 0) {
    this.setState({ loading: true });
    this.props
      .submit(this.state.data)
      .catch(err =>
        this.setState({ errors: err.response.data.errors, loading: false })
      );
  }
};

validate = data => {
  const errors = {};
  if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
  if (!data.password) errors.password = "Can't be blank";
  return errors;
};

  render() {
    const { data, errors, loading } = this.state;
  return (
  <Form className="login-form">
    <h1>
      <span className="font-weight-bold">login</span>
    </h1>
    <FormGroup>
      <Label>Email</Label>
      <Input type="email" 
      placeholder="you@something.com"
      onChange={this.onChange}
      value={data.email}
      onChange={this.onChange}
      />
    </FormGroup>
    
    <FormGroup>
      <Label>password</Label>
      <Input type="password"
       placeholder="password"
       value={data.password}
       onChange={this.onChange}
       />

    </FormGroup>
    <Button className="btn-lg btn-dark  btn-block">
      Sign In
    </Button>
    <div className="text-center pt-3">Or continue with facebook
    </div>
    <FacebookLoginButton className="mt-3 mb-3"/>
    <div className="text-center">
    <a href="/register">Sign up</a>
    <span className="p-2">|</span>
    <a href="/forgot-password">Forgot password</a>    
    </div>
  </Form>
  );
  }
}

export default LoginForm;