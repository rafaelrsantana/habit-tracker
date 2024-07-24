// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './components/Auth';
import Quotes from './components/Quotes';
import { AuthContext, AuthProvider } from './context/AuthContext';

const ProtectedRoute = ({ element, ...rest }) => {
  const { currentUser, loading } = useContext(AuthContext);
  
  if (loading) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return currentUser ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/quotes" element={<ProtectedRoute element={<Quotes />} />} />
          <Route path="/" element={<Navigate to="/login" />} /> {/* Página inicial */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
