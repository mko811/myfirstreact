import logo from './logo.svg';          // imports from within the same folder because of './'
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
// this is a functional component/stateless component
// jsx = javascript xml

function App() {                        
  return (                              
    <div className="App">
      <header className="App-header">
      <h1> welcome page </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Edit <code>src/App.js</code> <em>and save to reload.</em> <b> brrrrrrrrrrr </b>.
        </p>
        <Greet name="Bob"/>
        <Message/>    
        <Greet name="Bob2"/>
        <Button/>
        <br/>
        <img src="https://i.imgflip.com/3nm1gx.png" 
        alt="yep"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
