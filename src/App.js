import Home from './components/Home';
import NavBar from './components/NavBar';
import Router from './components/Router';
// this is a functional component/stateless component
// jsx = javascript xml

function App() {                        
  return (  
    <div className ="App">
      <NavBar/>
      <Router/>
    </div>
  );
}

export default App;
