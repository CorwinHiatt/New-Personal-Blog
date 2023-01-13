import Home from './pages/Home.Jsx';
import { Router, Route, Routes  } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
