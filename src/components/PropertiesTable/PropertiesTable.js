import React from 'reactn';
import './style.scss';

class PropertiesTable extends React.PureComponent {
  format(val) {
    return val ? "Yes" : "No";
  }

  formatAbundance(a) {
    if (a === 0)
      return `${a} (perfect)`;
    else if (a === 1)
      return `${a} (quasiperfect)`;
    else if (a === -1)
      return `${a} (almost perfect)`;
    else if (a > 0)
      return `${a} (abundant)`;
    else if (a < 0)
      return `${a} (deficient)`;
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>Even</td>
            <td>{this.format(this.global.even)}</td>
          </tr>
          <tr>
            <td>Prime</td>
            <td>{this.format(this.global.prime)}</td>
          </tr>
          <tr>
            <td>Perfect square</td>
            <td>{this.format(this.global.perfectSquare)}</td>
          </tr>
          <tr>
            <td>Abundance</td>
            <td>{this.formatAbundance(this.global.abundance)}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default PropertiesTable;
