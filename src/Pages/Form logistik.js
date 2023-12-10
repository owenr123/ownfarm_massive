import React, { useState, useEffect } from 'react';
import '../Styles/Form logistik.css';
import logo from '../Assets/Icon/Logo-ownfarm-white.png';
import logoIL from '../Assets/Icon/logo IL.png';
import { FaPhone, FaMapMarkerAlt, FaMap } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Formlogistik = () => {
    const [nama, setNama] = useState('');
    const [nohp, setNohp] = useState('');
    const [tgl, setTgl] = useState('');
    const [alamat, setAlamat] = useState('');
    const [kelurahan, setKelurahan] = useState('');
    const [barangLain, setBarangLain] = useState('');
    const [alasan, setAlasan] = useState('');

    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);

        
        const resetForm = () => {
            setNama('');
            setNohp('');
            setTgl('');
            setAlamat('');
            setKelurahan('');
            setBarangLain('');
            setAlasan('');
        };
    
        
        const kirimForm = () => {
            
            resetForm();
        };
    
    return (
        <div className="logistik">
            <div className="navbarlogistik">
                <nav>
                    <img src={logo} style={{height: "auto", width: "8rem"}} alt="logo" />
                    <ul>
                        <li className="nav-item">
                            <Link to="/beranda_ownfarm" className="nav-link">Beranda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/formlogistik_ownfarm" className="logistik-navlink active">Logistik</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/komunitas_ownfarm" className="nav-link">Komunitas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile_ownfarm" className="nav-link">Profile</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <h2 style={{textAlign: "center", marginTop: "50px", color: "#085C45"}}>FORMULIR</h2>
            <h3 style={{textAlign: "center", marginTop: "30px", color: "#085C45"}}>request barang</h3>

            <div className="formlogistik">
            <div className="formlogistik-inputnama">
                <label htmlFor="nama">Nama sesuai KTP</label>
                <input type="text" id="nama" placeholder="Nama lengkap" value={nama} onChange={(e) => setNama(e.target.value)} />
            </div>

            <div className="formlogistik-inputnohp">
                <label htmlFor="nohp">No.HP</label>
                <div className="formlogistik-inputnohp-with-icon">
                    <FaPhone className="formlogistik-iconnohp" />
                    <input type="text" id="nohp" placeholder="+62" value={nohp} onChange={(e) => setNohp(e.target.value)} />
                </div>
            </div>

            <div className="formlogistik-inputtgl">
                <label htmlFor="tgl">Waktu request barang</label>
                <input type="date" id="tgl" value={tgl} onChange={(e) => setTgl(e.target.value)} />
            </div>

            <div className="formlogistik-alamat">
                <div className="formlogistik-inputalamat">
                    <label htmlFor="alamat">Alamat</label>
                    <div className="formlogistik-inputalamat-with-icon">
                        <FaMapMarkerAlt className="formlogistik-iconalamat" />
                        <input type="text" id="alamat" placeholder="Masukkan alamat" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                    </div>
                </div>
                <div className="formlogistik-inputkelurahan">
                    <label htmlFor="kelurahan">Kelurahan</label>
                    <div className="formlogistik-inputkelurahan-with-icon">
                        <FaMap className="formlogistik-iconkelurahan" />
                        <input type="text" id="kelurahan" placeholder="Masukkan kelurahan" value={kelurahan} onChange={(e) => setKelurahan(e.target.value)} />
                    </div>
                </div>
            </div>

            <div className="formlogistik-checkbox">
                <label htmlFor="checkbox">Daftar Barang</label>
                    <div className="checkbox-group">
                       
                        <label>
                            <input type="checkbox" />
                            Pupuk
                        </label>

                        <label>
                            <input type="checkbox" />
                            Obat tanaman
                        </label>

                        <label>
                            <input type="checkbox" />
                            Bibit
                        </label>

                        <label>
                            <input type="checkbox" />
                            Alat pertanian
                        </label>
                    </div>
                </div>

                <div className="formlogistik-inputbaranglain">
                    <input type="text" id="baranglain" placeholder="Barang lain" value={barangLain} onChange={(e) => setBarangLain(e.target.value)} />
                    <select id="jumlahbarang" value={barangLain} onChange={(e) => setBarangLain(e.target.value)}>
                        {[...Array(10).keys()].map((num) => (
                            <option key={num + 1} value={num + 1}>
                                {num + 1}
                            </option>
                        ))}
                    </select>
                </div>

<div className="formlogistik-inputalasan">
    <label htmlFor="alasan">Alasan request barang</label>
    <textarea type="text" id="alasan" placeholder="Alasan" value={alasan} onChange={(e) => setAlasan(e.target.value)} />
</div>

<div className="formlogistik-button">
    <button className="formlogistik-buttonbatal" onClick={resetForm}>
        Batal
    </button>
    <button className="formlogistik-buttonkirim" onClick={kirimForm}>
        Kirim
    </button>
</div>
            </div>
            
            <footer>
                <div className="footer-content">
                    <img src={logo} className="footercontent-logo" />
                    <div className="footercontent-perusahaan">
                        <h3>Perusahaan</h3>
                        <h4>Tentang</h4>
                        <h4>Komunitas</h4>
                        <h4>Download aplikasi</h4>
                    </div>
                    <div className="footercontent-sosmed">
                        <h3>Sosial media</h3>
                        <h4>Instagram</h4>
                        <h4>Facebook</h4>
                    </div>
                    <div className="footercontent-kerjasama">
                        <h3>Kerjasama</h3>
                        <img src={logoIL} className="footercontent-logoIL" />
                        <img
                        src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                        alt="Google Play Store"
                        className="google-play-button"
                        />
                    </div>
                </div>

                <h3 className="footer-copyright">Ownfarm, copyright 2023</h3>
            </footer>
        </div>
    );
}

export default Formlogistik;