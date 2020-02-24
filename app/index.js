import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';
//Components
//Can have state that it manages
//Lifecycle
//UI

class App extends React.Component {
  render() {
    const name = 'Tyler';
    return (
      <div className='container'>
        <Battle />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
