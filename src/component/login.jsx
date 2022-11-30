import axios from "axios";
import React, { Component } from "react";
import Input from "./input";
import * as yup from "yup";

class Login extends Component {
  state = {
    account: {
      email: "",
      password: "",
    },
    errors: [],
    sending: false,
  };

  schema = yup.object().shape({
    email: yup
      .string()
      .email("email format is incorrect")
      .required("Email field is required"),
    password: yup.string().min(4, "The password must be at least four characters long"),
  });

  validate = async () => {
    try {
      const result = await this.schema.validate(this.state.account, {
        abortEarly: false,
      });
      return result;
    } catch (error) {
      console.log(error.errors);
      this.setState({ errors: error.errors });
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const result = await this.validate();
    console.log(result);
    if (result) {
      try {
        this.setState({ sending: true });
        const response = await axios.post(
          "https://reqres.in/api/login",
          result
        );
        localStorage.setItem("token", response.data.token);
        window.location = "/dashboard";
        this.setState({ sending: false });
      } catch (error) {
        this.setState({ sending: false });
        this.setState({ errors: ["Email or password is not correct"] });
      }
    }
  };

  handleChange = async (e) => {
    const input = e.currentTarget;
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { email, password } = this.state.account;
    return (
      <>
        <div className="container-fluid py-5 bg mt-5">
          <div className="col-md-6 m-auto text-center">
            <h2>Contact Us</h2>
            <p>
              Proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum. Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        
      <iframe src="https://maps.google.com/maps?q=iran,kermanshah,eslam%20abad&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no" style={{width: '100%', height: '400px'}}></iframe>
        {this.state.errors.length !== 0 && (
          <div className="alert alert-danger">
            <ul>
              {this.state.errors.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}
        <form className="mb-5" onSubmit={this.handleSubmit}>
          <Input
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
          />
          <Input
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
          />

          <button
            disabled={this.state.sending}
            className="btn btn-primary mx-2"
          >
            Login
          </button>
        </form>
      </>
    );
  }
}

export default Login;
