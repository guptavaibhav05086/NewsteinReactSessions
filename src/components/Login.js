import React, { Component } from "react";
import classnames from "classnames";
import axios from "axios";
import { apiUrl } from "../../src/config";
import { setAuthToken } from "../../src/utils/setAuthToken";
import CreateProfile from "./create-profile/CreateProfile";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      isLogin: false
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    debugger;
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    let loginUrl = `${apiUrl.baseUrl}${apiUrl.login}`;
    axios
      .post(loginUrl, userData)
      .then(res => {
        debugger;
        // Save to localStorage
        const { token } = res.data;
        // Set token to ls
        localStorage.setItem("jwtToken", token);
        this.setState({ isLogin: true });
        setAuthToken(token);
      })
      .catch(err => {
        console.log(err);
      });

    //this.props.loginUser(userData);
  }

  onChange(e) {
    debugger;
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;
    console.log(this.state);
    return (
      <div>
        {this.state.isLogin ? (
          <CreateProfile></CreateProfile>
        ) : (
          <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Log In</h1>
                  <p className="lead text-center">
                    Sign in to your DevConnector account
                  </p>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.email
                        })}
                        placeholder="Email Address"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChange}
                      />
                      {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        className={classnames("form-control form-control-lg", {
                          "is-invalid": errors.password
                        })}
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}
                      />
                      {errors.password && (
                        <div className="invalid-feedback">
                          {errors.password}
                        </div>
                      )}
                    </div>
                    <input
                      type="submit"
                      className="btn btn-info btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
