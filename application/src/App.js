import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './Routes';
import './App.css';

function App() {
  return (
    <Router>
      <MyRoutes />
    </Router>
  );
}

export default App;
