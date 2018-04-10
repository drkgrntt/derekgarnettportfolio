import React, { Component } from 'react';

class LockedDiv extends Component {
  // Props are accessCode (string), unlocked (boolean), and className (string)
  constructor(props) {
    super(props);

    this.state = {
      accessCode: this.props.accessCode, 
      unlocked: this.props.unlocked, 
      text: ''
    };
  }

  // check access code
  handleSubmit() {
    const { text, accessCode } = this.state;

    if (text === accessCode) {
      return this.setState({ unlocked: true });
    }
  }

  // if not unlocked, render form (default)
  renderAccessForm() {
    return (
      <div style={{ textAlign: 'center' }}>
        <form>
          <h2>Access Code</h2>
          <input
            value={this.state.text}
            onChange={event => this.setState({ text: event.target.value })}
            type="password"
            style={{
              width: '300px',
              height: '30px',
              borderRadius: '5px',
              padding: '0 15px',
              marginBottom: '20px'
            }}
          />
          <br />
          <button
            type="submit"
            style={{
              color: 'white',
              backgroundColor: 'rgb(80,0,80)',
              padding: '7px 50px',
              fontSize: '13px',
              borderRadius: '8px'
            }}
            onClick={() => this.handleSubmit()}
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
      <div className={this.props.className}>
        {this.renderContent()}
      </div>
    );
  }
}

export default LockedDiv;
