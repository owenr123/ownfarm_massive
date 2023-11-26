import React, { useState } from 'react';
import '../Styles/Register 1.css';
import { Link } from 'react-router-dom';
import gambar_register_1 from '../Assets/Pictures/gambar register 1.jpg';
import gambar_upload from '../Assets/Icon/uploaded.jpg';
import { FaPhone, FaMapMarkedAlt } from 'react-icons/fa';

const register = () => {
    return (
        <div className="register-3">
            <img src={gambar_register_1} className="gambar-register-1" />
            <div className="register1-section">

                <div className="register1-level-line">
                    <div className="register1-level1" />
                    <div className="register1-level2" />
                </div>

                <h2 style={{color: "#07362A", fontWeight: "400", marginTop: "50px"}}>Daftar</h2>

                <div className="registerform-1">

                    <div className="nama-telpon">
                        <div className="inputnama">
                            <label htmlFor="namalengkap">Nama Lengkap</label>
                            <input type="text" id="namalengkap"  name="namalengkap" placeholder="Nama" />
                        </div>
                        <div className="inputtelpon">
                            <label htmlFor="telpon">Nomor Telpon</label>
                            <div className="telpon-container">
                                <input type="tel" id="telpon" name="telpon" placeholder="+62" />
                                <FaPhone className="phone-icon" size={10} style={{color: "#07362A"}} />
                            </div>
                        </div>
                    </div>

                    <div className="alamat">
                        <div className="inputalamat">
                            <label htmlFor="alamat">Alamat</label>
                            <div className="alamat-container">
                                <input type="text" id="alamat" name="alamat" placeholder="Alamat" />
                                <FaMapMarkedAlt className="alamat-icon" size={10} style={{color: "#07362A"}} />
                            </div>
                        </div>
                    </div>

                    <div className="kota-kelurahan-kecamatan">
                        <div className="inputkota">
                            <label htmlFor="kota">Kota</label>
                            <input type="text" id="kota"  name="kota" placeholder="Kota" />
                        </div>
                        <div className="inputkelurahan">
                            <label htmlFor="kelurahan">kelurahan</label>
                            <input type="text" id="kelurahan"  name="kelurahan" placeholder="Kel" />
                        </div>
                        <div className="inputkecamatan">
                            <label htmlFor="kecamatan">Kecamatan</label>
                            <input type="text" id="kecamatan"  name="kecamatan" placeholder="Kec" />
                        </div>
                    </div>

                    <div className="register-line" />

                    <div className="foto" style={{textAlign: "center"}}>
                        <h2 style={{color: "#07362A", fontWeight: "500", textAlign: "center"}}>Unggah Foto</h2>
                        <h3 style={{color: "#07362A", fontWeight: "300", textAlign: "center"}}>Unggah foto yang kamu bagikan sebagai syarat pendaftaran</h3>
                        
                        <div className="upload-foto">
                            <div className="upload-column">
                                <label htmlFor="file-input">
                                    <img src={gambar_upload}
                                        alt="Arrow Up"
                                        className="arrow-up"
                                    />
                                    <span>Tarik kesini atau</span>
                                    <button style={{marginTop: "20px"}}>Telusuri file</button>
                                </label>
                                <input type="file" id="file-input" />
                            </div>
                        </div>


                        <Link to="/register2_ownfarm">
                            <button style={{marginTop: "50px"}}>Selanjutnya</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default register;