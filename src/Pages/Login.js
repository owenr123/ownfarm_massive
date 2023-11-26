import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Login.css';
import gambar_login from '../Assets/Pictures/gambar login.png';
import google from '../Assets/Icon/gugel.jpg';
import fb from '../Assets/Icon/fb.jpg';

const CPageLogin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">

      <img src={gambar_login} className="gambar_login" />

      <div className="login_section">
        <div className="login_content">
          <div className="daftar_button">
            <h3>Tidak memiliki akun?</h3>
            <Link to="/register1_ownfarm">
              <button>Daftar</button>
            </Link>
          </div>

          <div className="loginform">
            <h2>Selamat datang di OwnFarm!</h2>
            <form>
              <label htmlFor="username">Nama Pengguna</label>
              <input type="text" id="username" placeholder="Email" />
              <label htmlFor="password">Kata Sandi</label>
              <div className="password-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Kata Sandi"
                />
                <span onClick={togglePasswordVisibility}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>

              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />
                  <p>Ingat Saya</p>
                </label>
                <a href="#">Lupa kata sandi?</a>
              </div>

              <button type="submit">Masuk</button>
            </form>
          </div>

          <div className="openwith-section">
            <div className="line" />
              <h4>Masuk Dengan</h4>
            <div className="line" />
          </div>

          <div className="icons">
            <a href="link-to-google-account" target="_blank" rel="noopener noreferrer">
              <img src={google} alt="Google" className="icon" />
            </a>
            <a href="link-to-facebook-account" target="_blank" rel="noopener noreferrer">
              <img src={fb} alt="Facebook" className="icon" />
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default CPageLogin;
