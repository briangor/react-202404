// import logo from './logo.svg';
import './App.css';
import { Counter } from './components/counter/counter';
import Gallery from './components/gallery';
import Profile from './components/profile';
import Todo from './components/Todo';
import UrlState from './components/UrlState';
import UsersReactQuery from './components/UsersReactQuery';
import UsersUseEffect from './components/UsersUseEffect';
import VoteUseReducer from './components/VotingUseReducer';
import Home from './pages/home';

function App() {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  const secret = process.env.REACT_APP_TEST_SECRET;
  console.log(`secret: ${secret}`);
  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
       

        {/* <Gallery /> */}
        {/* <UsersUseEffect />
        <UsersReactQuery /> */}
        
      
     
      {/* <CacheUseMemo/> */}
      <Home />
    </div>
  );
}

export default App;
