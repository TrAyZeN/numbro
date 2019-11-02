import React from 'reactn';
import './style.scss';
import NumberInput from '../NumberInput/NumberInput';
import PropertiesTable from '../PropertiesTable/PropertiesTable';

class App extends React.PureComponent {
  render () {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">
            Numbro
          </h1>

          <NumberInput />

          { this.global.number !== null
            ? <PropertiesTable />
            : null }

        </header>
      </div>
    );
  }
}

export default App;
