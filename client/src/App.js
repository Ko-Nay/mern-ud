import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, Register, PageError } from './pages';
import { Stats, AllJob, AddJob, Profile, ShareLayout } from './pages/dashboard';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ShareLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJob />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route exact path="/landing" element={<Landing />} />
        <Route path="/register" element={<Register />} />
        <Route exact path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
