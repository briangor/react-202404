import logo from './logo.svg';
import './App.css';

function App() {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  const secret = process.env.REACT_APP_TEST_SECRET;
  console.log(`secret: ${secret}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          React-202404
        </a>
      </header>
      {/* <CacheUseMemo/> */}
    </div>
  );
}

export default App;
