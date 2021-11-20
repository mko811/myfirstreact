import logo from './logo.svg';          // imports from within the same folder because of './'
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';
// this is a functional component/stateless component
// jsx = javascript xml

function App() {                        
  return (  
    <html>  
    <head>
    <style>

    </style> 
    </head>

    <body>    
    <div className="App">
      <header className="App-header">
      <h1> Welcome! </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <b> brrrrrrrrrrr </b>
        </p>
        <p>{Hello()}</p>
        <Employee/>
        <Greet name="mico"/>   
        <Greet name="Sir"/>
        <Message/> 
        <Button/>
        <p>waow daming cookis</p>              
        <br/>
        <img src="https://i.imgflip.com/3nm1gx.png" 
        alt="yep" style={{paddingBottom: 20}}/>

      </header>
    </div>
    
    </body>
    </html> 
  );
}

export default App;
