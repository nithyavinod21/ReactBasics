import logo from './logo.svg';
import './App.css';
import Users from './component/Users';
import Footer from './component/Footer';

function App() {

  const appName = "Second React Class";
  return (
    <div className="App">
      
        <h1>Welcome to {appName}</h1> 
        <h1>Addition {1+1}</h1>
        <Users count="5" subtitle="Active Users" />

        <Footer message={"Footer Of React APP"} />
    </div>
  );
}

export default App;
