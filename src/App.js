// import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter/counter';
import Gallery from './components/gallery';
import Profile from './components/profile';
import Todo from './components/Todo';
import UrlState from './components/UrlState';
import VoteUseReducer from './components/VotingUseReducer';

function App() {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  const secret = process.env.REACT_APP_TEST_SECRET;
  console.log(`secret: ${secret}`);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          React 202404
        </p>

        <Gallery />
        
      
      </header>
      {/* <CacheUseMemo/> */}
    </div>
  );
}

export default App;
