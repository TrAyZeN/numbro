import React from 'react';
import './style.scss';
import NumberInput from '../NumberInput/NumberInput';
import PropertiesTable from '../PropertiesTable/PropertiesTable';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">

          <h1>
            Numbro
          </h1>

          <p>
            Enter a number
          </p>
          
          <NumberInput />

          <PropertiesTable />

        </header>
      </div>
    );
  }
}

export default App;
