import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Auth/Login';
import ProtectedRoute from './ProtectedRoutes';
// Add other pages like Signup, Upload, etc., as needed

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>} />
        <Route path="/my-videos" element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        {/* You can add more routes like below */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/upload" element={<Upload />} /> */}

        {/* Optional: 404 Not Found fallback */}
        <Route path="*" element={<h2 style={{ textAlign: 'center' }}>404: Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
