import React from 'reactn';
import './style.scss';
import NumberInput from '../NumberInput';
import PropertiesTable from '../PropertiesTable';

class App extends React.PureComponent {
  render () {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">
            <a href="/">Numbro</a>
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
