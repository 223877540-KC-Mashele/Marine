import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';
import CategoryFilters from './components/CategoryFilters';
import SpeciesGrid from './components/SpeciesGrid';
import speciesList from './components/SpeciesData';
import Login from './components/Login'; // Import Login component
import Register from './components/Register'; // Import Register component
import Profile from './components/Profile'; // Import Profile component
import './App.css'; // Ensure you import your CSS here

const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [token, setToken] = useState(null); // State for authentication token

  return (
    <Router>
      <div>
        <Navbar />
        <main>
          <h1>Welcome to MarineSpotter</h1>
          <p>Discover and learn about marine species while contributing to conservation efforts.</p>
          <Routes>
            <Route path="/" element={
              <>
                <Search searchValue={searchValue} setSearchValue={setSearchValue} />
                <CategoryFilters setSelectedCategory={setSelectedCategory} />
                <SpeciesGrid speciesList={speciesList} />
              </>
            } />
            <Route path="/login" element={<Login setToken={setToken} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile token={token} />} />
            <Route path="/identify" element={<h2>Identify Marine Species</h2>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
