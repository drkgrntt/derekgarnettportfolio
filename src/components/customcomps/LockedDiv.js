import React, { Component } from 'react';

class LockedDiv extends Component {
  // Props are accessCode and className
  constructor(props) {
    super(props);

    this.state = { accessCode: this.props.accessCode, locked: true, text: '' };
  }

  // check access code
  handleSubmit() {
    const { text, accessCode } = this.state;

    if (text === accessCode) {
      return this.setState({ locked: false });
    }
  }

  // if locked, render form
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

  // if unlocked, return a div
  renderContent() {
    if (this.state.locked) {
      return this.renderAccessForm();
    }

    return <div>{this.props.children}</div>;
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
