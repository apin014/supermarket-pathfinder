import Grid from './components/Grid';
import MyNavbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Grid row={40} column={50} />
    </div>
  );
}

export default App;
