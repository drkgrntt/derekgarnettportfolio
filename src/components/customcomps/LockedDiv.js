import React, { Component } from 'react';

class LockedDiv extends Component {
  // Props are:
  // accessCode (string), unlocked (boolean), title (string),
  // buttonColor, buttonTextColor (strings), 
  // style, titleStyle, buttonStyle, inputStyle (objects), 
  // className, inputClass, buttonClass, titleClass (strings)
  constructor(props) {
    super(props);

    this.state = {
      unlocked: this.props.unlocked, 
      text: ''
    };
  }

  // check access code
  handleSubmit() {
    if (this.state.text === this.props.accessCode) {
      return this.setState({ unlocked: true });
    }
  }

  // if not unlocked, render form (default)
  renderAccessForm() {
    return (
      <div style={{ textAlign: 'center' }}>
        <form>
          <h2 
            style={this.props.titleStyle}
            className={this.props.titleClass}
          >{this.props.title || "Access Code"}</h2>
          <input
            value={this.state.text}
            onChange={event => this.setState({ text: event.target.value })}
            type="password"
            style={this.props.inputStyle || {
              width: '300px',
              height: '30px',
              borderRadius: '5px',
              padding: '0 15px',
              marginBottom: '20px'
            }}
            className={this.props.inputClass}
          />
          <br />
          <button
            type="submit"
            style={this.props.buttonStyle || {
              color: this.props.buttonTextColor,
              backgroundColor: this.props.buttonColor,
              padding: '7px 50px',
              fontSize: '13px',
              borderRadius: '8px'
            }}
            onClick={() => this.handleSubmit()}
            className={this.props.buttonClass}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  // if unlocked, return children
  renderContent() {
    if (this.state.unlocked) {
      return this.props.children;
    }

    return this.renderAccessForm();
  }

  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        {this.renderContent()}
      </div>
    );
  }
}

export default LockedDiv;
