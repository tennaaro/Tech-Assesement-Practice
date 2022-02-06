import logo from './logo.svg';
import './App.css';
import { Routes, Route, useRoutes} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route
          path = "/"
          element = {<Home />}
        />
      </Routes>
    </>
  );
}

export default App;


{/* <div className="App">
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    ASDF
  </a>
</header>
</div> */}