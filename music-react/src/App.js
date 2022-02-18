
import './index.css';
import React, {Component} from 'react';
import './App.css';
import './bootstrap.css';
import RouterComponent from './component/general/RouterComponent.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
     
          <RouterComponent />
      </div>
    );
}
}

export default App;
