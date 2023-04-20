import Grid from './components/Grid';
import MyNavbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Grid size={40} />
    </div>
  );
}

export default App;
