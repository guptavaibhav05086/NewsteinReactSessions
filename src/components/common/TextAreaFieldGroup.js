import React, { Component } from "react";
import PropTypes from "prop-types";
class TextAreaFieldGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="form-group">
          <textarea
            className="form-control form-control-lg"
            placeholder={this.props.placeholder}
            name={this.props.name}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
        {this.props.info && (
          <small className="form-text text-muted">{this.props.info}</small>
        )}
      </div>
    );
  }
}
TextAreaFieldGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextAreaFieldGroup;
