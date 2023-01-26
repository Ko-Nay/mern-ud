import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Dashboard, Landing, Register, PageError } from './pages';

function App() {
  return (
    <BrowserRouter>
      <nav className="app-nav">
        <Link to="/" className="link active">
          Landing
        </Link>
        <Link to="/register" className="link">
          Register
        </Link>
        <Link to="/dashboard" className="link">
          Dashboard
        </Link>
      </nav>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
