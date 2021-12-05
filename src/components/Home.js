import logo from '../logo.svg';          // imports from within the same folder because of './'
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
import Employee from './Employee';
import NavBar from './NavBar';
// this is a functional component/stateless component
// jsx = javascript xml

function Home() {                        
  return (  
    <div className="Home">
      <header className="App-header">
      <h1> Welcome! </h1>
        <br/>
        <img src="https://i.pinimg.com/originals/a8/a3/3f/a8a33f2be16597a680725e21ac25b4c3.jpg" width="19%"
        className="App-logo" alt="logo" />
        <p>
        <br/>
        <b> speen </b>
        </p>
        <p>{Hello()}</p>
        <Greet name="Mico"/>   
        <Message/> 
        <Button/>
        <p>waow daming cookis</p>              
        <br/>
        <img src="https://i.imgflip.com/3nm1gx.png" 
        alt="yep" style={{paddingBottom: 20}}/>
        
      </header>
    </div>
  );
}

export default Home;
