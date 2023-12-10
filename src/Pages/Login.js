import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';
import Gambarlogin from '../Assets/Pictures/gambar login.png';
import Google from '../Assets/Icon/gugel.jpg';
import Fb from '../Assets/Icon/fb.jpg';

const CPageLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    setIsFormComplete(username.trim() !== '' && password.trim() !== '');
  }, [username, password]);

  const handleLogin = () => {

    console.log('Username:', username);
    console.log('Password:', password);
  
  };

  return (
    <div className="login">
      <img src={Gambarlogin} className="gambarlogin" />

      <div className="formlogin">
        <div className="formlogin-daftarsection">
          <h3 style={{color: "#085C45"}}>Tidak memiliki akun?</h3>
          <Link to="/register1_ownfarm">
            <button>Daftar</button>
          </Link>
        </div>

        <h2 style={{ textAlign: "center", marginTop: "3rem", marginBottom: "4rem", color: "#085C45"  }}>Masuk akun</h2>

        <div className="formlogin-inputuser">
          <label htmlFor="username">Nama pengguna</label>
          <input
            type="text"
            id="username"
            placeholder="Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="formlogin-inputpassword">
          <label htmlFor="password">Kata Sandi</label>
          <div className="formlogin-inputpassword-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="Kata sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaEye
                className="formlogin-inputpassword-icon"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEyeSlash
                className="formlogin-inputpassword-icon"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>
        </div>

        <div className="formlogin-lupapassword">
          <label className="remember-me">
            <input type="checkbox" />
            Ingat Saya
          </label>
          <a href="#" className="forgot-password-link">
            Lupa Password?
          </a>
        </div>

        <Link to="/beranda_ownfarm" style={{ textDecoration: 'none' }}>
          <button className="buttonmasuk" onClick={handleLogin} disabled={!isFormComplete}>
            Masuk
          </button>
        </Link>

        <div className="with-line"><h4>Masuk dengan</h4></div>

        <div className="icons">
          <a href="link-to-google-account" target="_blank" rel="noopener noreferrer">
            <img src={Google} alt="Google" />
          </a>
          <a href="link-to-facebook-account" target="_blank" rel="noopener noreferrer">
            <img src={Fb} alt="Facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CPageLogin;
