import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register1 from './Pages/Register 1';
import Register2 from './Pages/Register 2';
import Beranda from './Pages/Beranda';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login_ownfarm" element={<Login />} />
          <Route path="/register1_ownfarm" element={<Register1 />} />
          <Route path="/register2_ownfarm" element={<Register2 />} />
          <Route path="/beranda_ownfarm" element={<Beranda />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
