import React, { useState, useEffect } from 'react';
import "../Styles/Register 2.css";
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Gambarregister from '../Assets/Pictures/Gambar register 1.png';

const Register2 = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        // Setelah komponen dimuat, atur posisi scroll halaman ke atas
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="register2">
            <img src={Gambarregister} className="gambarregister" />

            <div className="formregister2">
                <div className="formregister2-levelline">
                    <div className="formregister2-level1" />
                    <div className="formregister2-level2" />
                </div>

                <h2>Memproses akun anda!</h2>

                <div className="formregister2-inputuser">
                    <label htmlFor="username">Nama pengguna</label>
                    <input type="text" id="username" placeholder="Email" />
                </div>

                <div className="formregister2-inputpassword">
                    <label htmlFor="password">Kata Sandi</label>
                    <div className="formregister2-inputpassword-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            placeholder="Kata sandi"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {showPassword ? (
                            <FaEye
                                className="formregister2-inputpassword-icon"
                                onClick={() => setShowPassword(false)}
                            />
                        ) : (
                            <FaEyeSlash
                                className="formregister2-inputpassword-icon"
                                onClick={() => setShowPassword(true)}
                            />
                        )}
                    </div>
                </div>

                <div className="formregister2-ulangipassword">
                    <label htmlFor="confirmPassword">Ulangi Kata Sandi</label>
                    <div className="formregister2-ulangipassword-container">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="confirmPassword"
                            placeholder="Ulangi kata sandi"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        {showPassword ? (
                            <FaEye
                                className="formregister2-ulangipassword-icon"
                                onClick={() => setShowPassword(false)}
                            />
                        ) : (
                            <FaEyeSlash
                                className="formregister2-ulangipassword-icon"
                                onClick={() => setShowPassword(true)}
                            />
                        )}
                    </div>
                </div>

                <label className="formregister2-setuju">
                    <input type="checkbox" />
                    Menyetujui ketentuan
                </label>

                <div className="formregister2-button">
                    <Link to="/register1_ownfarm">
                        <button>Kembali</button>
                    </Link>

                    <Link to="/beranda_ownfarm">
                        <button>Daftar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Register2;
