import React from 'reactn';
import './style.scss';

class NumberInput extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      value: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.validateInput(this.state.value)) {
      this.dispatch.updateNumber(Number.parseInt(this.state.value));
    } else {
      // TODO: show that the input is not valid
      console.log("Sorry but your input is not valid");
    }

    // prevent page reload of the input submit
    event.preventDefault();
  }

  validateInput(value) {
    // checks if the value is only composed of digits
    return /^\d+$/.test(value);
  }

  render() {
    return (
      <div>
        <form
          className="NumberInput-form"
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            className="NumberInput-input"
            value={this.state.value}
            onChange={this.handleInputChange}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            className="NumberInput-submit"
          />
        </form>
      </div>
    );
  }
}

export default NumberInput;
