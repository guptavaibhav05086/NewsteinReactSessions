import React, { Component } from "react";
import InputGroup from "../common/InputGroup";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
export default class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: "",
      company: "",
      website: "",
      location: "",
      status: "",
      skills: "",
      githubusername: "",
      bio: "",
      twitter: "",
      facebook: "",
      linkedin: "",
      youtube: "",
      instagram: "",
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.checkValidations(e.target);
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  checkValidations(control) {
    debugger;
    switch (control.name) {
      case "handle":
        if (control.value == null || control.value == "") {
          this.setState({
            errors: { [control.name]: "handle is a required field" }
          });
        } else {
          this.setState({
            errors: { [control.name]: undefined }
          });
        }
        break;
      case "skills":
        if (control.value == null || control.value == "") {
          this.setState({
            errors: { [control.name]: "Skill is a required field" }
          });
        } else {
          this.setState({
            errors: { [control.name]: undefined }
          });
        }
        break;
      case "status":
        if (control.value == 0 || control.value == "") {
          this.setState({
            errors: { [control.name]: "Status is a required field" }
          });
        } else {
          this.setState({
            errors: { [control.name]: undefined }
          });
        }
        break;

      default:
        break;
    }
  }

  render() {
    const { errors } = this.state;
    let socialInputs = (
      <div>
        <InputGroup
          placeholder="Twitter Profile URL"
          name="twitter"
          icon="fab fa-twitter"
          value={this.state.twitter}
          onChange={this.onChange}
          error={errors.twitter}
        />

        <InputGroup
          placeholder="Facebook Page URL"
          name="facebook"
          icon="fab fa-facebook"
          value={this.state.facebook}
          onChange={this.onChange}
          error={errors.facebook}
        />

        <InputGroup
          placeholder="Linkedin Profile URL"
          name="linkedin"
          icon="fab fa-linkedin"
          value={this.state.linkedin}
          onChange={this.onChange}
          error={errors.linkedin}
        />

        <InputGroup
          placeholder="YouTube Channel URL"
          name="youtube"
          icon="fab fa-youtube"
          value={this.state.youtube}
          onChange={this.onChange}
        />

        <InputGroup
          placeholder="Instagram Page URL"
          name="instagram"
          icon="fab fa-instagram"
          value={this.state.instagram}
          onChange={this.onChange}
        />
      </div>
    );
    // Select options for status
    const options = [
      { label: "* Select Professional Status", value: 0 },
      { label: "Developer", value: "Developer" },
      { label: "Junior Developer", value: "Junior Developer" },
      { label: "Senior Developer", value: "Senior Developer" },
      { label: "Manager", value: "Manager" },
      { label: "Student or Learning", value: "Student or Learning" },
      { label: "Instructor or Teacher", value: "Instructor or Teacher" },
      { label: "Intern", value: "Intern" },
      { label: "Other", value: "Other" }
    ];
    return (
      <div>
        <div className="create-profile">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <a href="dashboard.html" className="btn btn-light">
                  Go Back
                </a>
                <h1 className="display-4 text-center">Create Your Profile</h1>
                <p className="lead text-center">
                  Let's get some information to make your profile stand out
                </p>
                <small className="d-block pb-3">* = required field</small>
                <form onSubmit={this.onSubmit}>
                  <TextFieldGroup
                    placeholder="* Profile Handle"
                    name="handle"
                    value={this.state.handle}
                    onChange={this.onChange}
                    error={errors.handle}
                    info="A unique handle for your profile URL. Your full name, company name, nickname"
                  />
                  <SelectListGroup
                    placeholder="Status"
                    name="status"
                    value={this.state.status}
                    onChange={this.onChange}
                    options={options}
                    error={errors.status}
                    info="Give us an idea of where you are at in your career"
                  />
                  <TextFieldGroup
                    placeholder="Company"
                    name="company"
                    value={this.state.company}
                    onChange={this.onChange}
                    error={errors.company}
                    info="Could be your own company or one you work for"
                  />
                  <TextFieldGroup
                    placeholder="Website"
                    name="website"
                    value={this.state.website}
                    onChange={this.onChange}
                    error={errors.website}
                    info="Could be your own website or a company one"
                  />
                  <TextFieldGroup
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.onChange}
                    error={errors.location}
                    info="City or city & state suggested (eg. Boston, MA)"
                  />
                  <TextFieldGroup
                    placeholder="* Skills"
                    name="skills"
                    value={this.state.skills}
                    onChange={this.onChange}
                    error={errors.skills}
                    info="Please use comma separated values (eg.
                    HTML,CSS,JavaScript,PHP"
                  />
                  <TextFieldGroup
                    placeholder="Github Username"
                    name="githubusername"
                    value={this.state.githubusername}
                    onChange={this.onChange}
                    error={errors.githubusername}
                    info="If you want your latest repos and a Github link, include your username"
                  />
                  <TextAreaFieldGroup
                    placeholder="Short Bio"
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    info="Tell us a little about yourself"
                    error={errors.bio}
                  />

                  <div className="mb-3">
                    <button type="button" className="btn btn-light">
                      Add Social Network Links
                    </button>
                    <span className="text-muted">Optional</span>
                  </div>

                  {socialInputs}
                  <input
                    type="submit"
                    className="btn btn-info btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
