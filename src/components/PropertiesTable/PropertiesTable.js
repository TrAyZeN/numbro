import React from 'reactn';
import './style.scss';

class PropertiesTable extends React.PureComponent {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>Even</td>
            <td>{this.global.even}</td>
          </tr>
          <tr>
            <td>Prime</td>
            <td>{this.global.prime}</td>
          </tr>
          <tr>
            <td>Perfect square</td>
            <td>{this.global.perfectSquare}</td>
          </tr>
          <tr>
            <td>Abundance</td>
            <td>{this.global.abundance}</td>
          </tr>
          <tr>
            <td>Narcissistic</td>
            <td>{this.global.narcissistic}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PropertiesTable;
