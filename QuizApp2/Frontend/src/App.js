//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Candidate from './Components/Candidate';

function App() {
  return (
    <div>
     <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Candidate" element={<Candidate />} />
       </Routes>
     </Router>
    </div>
  );
}

export default App;