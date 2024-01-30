import logo from './holberton-logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <body className="App-body">
        <p>Login to access the full dashboard</p>
        
          {/* Email input */}
          <label htmlFor="email">Email: </label>
          <input type="email"></input>

          {/* Password input */}
          <label htmlFor="password">Password: </label>
          <input type="password" id="password"></input>

          {/* Submit button */}
          <button>OK</button>
      </body>

      <footer className="App-footer">
        <p>{`${getFooterCopy(true)} - ${getFullYear()}`}</p>
      </footer>
      
    </div>
  );
}

export default App;