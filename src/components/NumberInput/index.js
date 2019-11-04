import React from 'reactn';
import './style.scss';

class NumberInput extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      value: "",
      invalidInput: false
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.validateInput(this.state.value)) {
      this.setState({ invalidInput: false });
      this.dispatch.updateNumber(Number.parseInt(this.state.value));
    } else {
      this.setState({ invalidInput: true });
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
      <div
        className="NumberInput"
      >
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

        { this.state.invalidInput
          ? <p
              className="NumberInput-invalidInput"
            >
              Invalid input, you have to submit a natural number
            </p>
          : <p
              className="NumberInput-invalidInput hidden"
            >
              Invalid input, you have to submit a natural number
            </p> }
      </div>
    );
  }
}

export default NumberInput;
