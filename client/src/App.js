import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList';
import AddEmployee from './pages/AddEmployee';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Header from './components/Header';
import EmployeeFooter from './components/EmployeeFooter';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
    <Router>
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <div className="flex-grow-1">
      <Routes>
        <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
        <Route path="/signin" element={isAuthenticated ? <Navigate to="/" /> : <SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/employeelist" element={isAuthenticated ? <EmployeeList /> : <Navigate to="/signin" />} />
        <Route path="/addemployee" element={isAuthenticated ? <AddEmployee /> : <Navigate to="/signin" />} />
      </Routes>
      </div>
      <EmployeeFooter/>
    </Router>
    </div>
  );
}

export default App;

