import { Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import LandingPage from './views/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
