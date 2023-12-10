import React, { useState, useEffect } from 'react';
import '../Styles/Register 1.css';
import { Link } from 'react-router-dom';
import Gambarregister from '../Assets/Pictures/Gambar register 1.png';
import { FaPhone, FaMapMarkerAlt, FaMap } from 'react-icons/fa';

const Register1 = () => {

    useEffect(() => {
        // Setelah komponen dimuat, atur posisi scroll halaman ke atas
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="register1">
            <img src={Gambarregister} className="gambarregister" />

            <div className="formregister1">
                <div className="formregister1-levelline">
                    <div className="formregister1-level1" />
                    <div className="formregister1-level2" />
                </div>

                <h2>Membuat akun anda!</h2>
                <h2>Daftar!</h2>

                <div className="formregister1-namanohp">
                    <div className="formregister1-inputnama">
                        <label htmlFor="name">Nama Lengkap</label>
                        <input type="text" id="name" placeholder="Nama" />
                    </div>
                    <div className="formregister1-inputnohp">
                        <label htmlFor="nohp">No.HP</label>
                        <div className="formregister1-inputnohp-with-icon">
                            <FaPhone className="formregister1-iconnohp" />
                            <input type="text" id="nohp" placeholder="+62" />
                        </div>
                    </div>
                </div>

                <div className="formregister1-inputalamat">
                    <label htmlFor="alamat">Alamat</label>
                    <div className="formregister1-inputalamat-with-icon">
                        <FaMapMarkerAlt className="formregister1-iconalamat" />
                        <input type="text" id="alamat" placeholder="Masukkan alamat" />
                    </div>
                </div>

                <div className="formregister1-kotakelurahankecamatan">
                    <div className="formregister1-inputkota">
                        <label htmlFor="kota">Kota</label>
                        <input type="text" id="kota" placeholder="kota" />
                    </div>
                    <div className="formregister1-inputkelurahan">
                        <label htmlFor="kelurahan">Kelurahan</label>
                        <input type="text" id="kelurahan" placeholder="kel" />
                    </div>
                    <div className="formregister1-inputkecamatan">
                        <label htmlFor="kecamatan">kecamatan</label>
                        <input type="text" id="kecamatan" placeholder="kec" />
                    </div>
                </div>

                <div className="formregister1-line" />

                <div className="formregister1-inputfotoprofile">
                    <h3>Unggah foto</h3>
                    <p>Unggah foto yang ingin kamu bagikan sebagai syarat pendaftaran</p>

                    <div className="formregister1-inputfile">
                        <input type="file" id="profilePicture" />
                    </div>
                </div>

                <Link to="/register2_ownfarm" style={{ textDecoration: 'none' }}>
                    <button>Selanjutnya</button>
                </Link>
            </div>
        </div>
    );
}

export default Register1;