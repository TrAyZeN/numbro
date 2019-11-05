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

          <p className="App-quote">
            Why are numbers beautiful?
            It’s like asking why is Beethoven’s Ninth Symphony beautiful.
            If you don’t see why, someone can’t tell you.
            I know numbers are beautiful.
            If they aren’t beautiful, nothing is.
          </p>

          <p className="App-quote-author">
            - Paul Erdős
          </p>

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
