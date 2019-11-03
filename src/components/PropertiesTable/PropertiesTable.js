import React from 'reactn';
import './style.scss';

class PropertiesTable extends React.PureComponent {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Parity_(mathematics)">
                Even
              </a>
            </td>
            <td>{this.global.even}</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Prime_number">
              Prime
              </a>
            </td>
            <td>{this.global.prime}</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Perfect_square">
                Perfect square
              </a>
            </td>
            <td>{this.global.perfectSquare}</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Abundant_number">
                Abundance
              </a>
            </td>
            <td>{this.global.abundance}</td>
          </tr>
          <tr>
            <td>
              <a href="https://en.wikipedia.org/wiki/Narcissistic_number">
                Narcissistic
              </a>
            </td>
            <td>{this.global.narcissistic}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PropertiesTable;
