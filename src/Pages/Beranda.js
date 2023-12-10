import React, { useState, useEffect } from 'react';
import '../Styles/Beranda.css';
import logo from '../Assets/Icon/Logo-ownfarm-white.png';
import request from '../Assets/Icon/Request.png';
import komunitas from '../Assets/Icon/Komunitas.png';
import photoprofile from '../Assets/Icon/icon _profile.png';
import loginregister from '../Assets/Icon/Login register.png';
import menulogistik from '../Assets/Icon/menu logistik.png';
import requestdiajukan from '../Assets/Icon/Request diajukan.png';
import menunggubarang from '../Assets/Icon/Menunggu barang.png';
import panahkanan from '../Assets/Icon/Panah kanan.png';
import logoIL from '../Assets/Icon/logo IL.png';
import { FaEllipsisH, FaHeart, FaComment, FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Beranda = () => {
    const [isLikedOwen, setIsLikedOwen] = useState(false);
    const [isSavedOwen, setIsSavedOwen] = useState(false);

    const [isLikedAulia, setIsLikedAulia] = useState(false);
    const [isSavedAulia, setIsSavedAulia] = useState(false);
  
    const [isLikedAsep, setIsLikedAsep] = useState(false);
    const [isSavedAsep, setIsSavedAsep] = useState(false);
  
    const handleLikeOwen = () => {
      setIsLikedOwen(!isLikedOwen);
    };
  
    const handleSaveOwen = () => {
      setIsSavedOwen(!isSavedOwen);
    };

    const handleLikeAulia = () => {
        setIsLikedAulia(!isLikedAulia);
      };
    
      const handleSaveAulia = () => {
        setIsSavedAulia(!isSavedAulia);
      };
  
    const handleLikeAsep = () => {
      setIsLikedAsep(!isLikedAsep);
    };
  
    const handleSaveAsep = () => {
      setIsSavedAsep(!isSavedAsep);
    };

    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="beranda">
            <div className="navbarberanda">
                <nav>
                    <img src={logo} style={{height: "auto", width: "8rem"}} alt="logo" />
                    <ul>
                        <li className="nav-item">
                            <Link to="/" className="beranda-navlink active">Beranda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/formlogistik_ownfarm" className="nav-link">Logistik</Link>
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

            <div className="headerberanda">
                <div className="headerberanda-content">
                    <h1>OwnFarm</h1>
                    <h3>Semua menjadi lebih mudah dan efektif untuk request kebutuhan pertanian anda</h3>
                    <p>Dapatkan aplikasi kami di playstore maupun appstore</p>
                    <img
                        src="https://lh3.googleusercontent.com/q1k2l5CwMV31JdDXcpN4Ey7O43PxnjAuZBTmcHEwQxVuv_2wCE2gAAQMWxwNUC2FYEOnYgFPOpw6kmHJWuEGeIBLTj9CuxcOEeU8UXyzWJq4NJM3lg=s0"
                        alt="Google Play Store"
                        className="google-play-button"
                    />
                </div>
            </div>

            <div className="tentangberanda">
                <div className="judul">
                    <h2>Tentang webiste dan aplikasi</h2>
                    <h3>Bidang agriculture-pertanian</h3>
                </div>
                <div className="isi">
                    Ownfarm adalah sebuah platform berbasis digital yang menyediakan fitur request 
                    untuk alat dan bahan pertanian serta fitur komunitas untuk para petani maupun 
                    kelompok tani dapat berinteraksi dengan mudah.
                </div>
            </div>

            <div className="keunggulanberanda">
                <h2>Keunggulan aplikasi ownfarm</h2>
                <div className="keunggulan-content">
                    <div className="card">
                        <img src={request} />
                        <div className="penjelasan">
                            <h3>Request alat dan bahan pertanian dengan mudah</h3>
                            <p>Dengan 4 langkah mudah sudah dapat mendapatkan alat dan 
                                bahan pertanian sesuai dengan yang dibutuhkan
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={komunitas} />
                        <div className="penjelasan">
                            <h3>Komunitas pertanian</h3>
                            <p>Komunitas yang dapat digunakan oleh para petani maupun kelompok tani 
                                untuk saling berinteraksi mengenai permasalahan pada tanaman maupun 
                                sharing tips. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="komunitasberanda">
                <h2>Komunitas</h2>

                <div className="komunitasberanda-section">
                <div className="profile-card">
                    <div className="header">
                        <img src={photoprofile} alt="Profile" />
                        <div className="info">
                            <div className="name">Owen</div>
                            <div className="email">@owenrangngan</div>
                        </div>
                        <div className="options">
                            <FaEllipsisH />
                        </div>
                    </div>
                    <div className="status">hai saya bukan petani, tapi petani kode wkwkwk</div>
                    <div className="actions">
                        <div className="action" onClick={handleLikeOwen}>
                            <FaHeart color={isLikedOwen ? 'red' : '#DAD5D5'} />
                        </div>
                        <div className="action">
                            <FaComment />
                        </div>
                        <div className="action" onClick={handleSaveOwen}>
                            <FaBookmark color={isSavedOwen ? 'black' : '#DAD5D5'} />
                        </div>
                    </div>
                </div>

                <div className="profile-card">
                    <div className="header">
                        <img src={photoprofile} alt="Profile" />
                        <div className="info">
                            <div className="name">Aulia</div>
                            <div className="email">@aulia</div>
                        </div>
                        <div className="options">
                            <FaEllipsisH />
                        </div>
                    </div>
                    <div className="status">selamat pagi dunia tipu-tipu....hari ini jangan bikin aku kecewa yah😇</div>
                    <div className="actions">
                        <div className="action" onClick={handleLikeAulia}>
                            <FaHeart color={isLikedAulia ? 'red' : '#DAD5D5'} />
                        </div>
                        <div className="action">
                            <FaComment />
                        </div>
                        <div className="action" onClick={handleSaveAulia}>
                            <FaBookmark color={isSavedAulia ? 'black' : '#DAD5D5'} />
                        </div>
                    </div>
                </div>

                <div className="profile-card">
                    <div className="header">
                        <img src={photoprofile} alt="Profile" />
                        <div className="info">
                            <div className="name">Asep</div>
                            <div className="email">@asepppppp</div>
                        </div>
                        <div className="options">
                            <FaEllipsisH />
                        </div>
                    </div>
                    <div className="status">Mau beli pupuk, bolehkah pinjam dulu seratus 😂</div>
                    <div className="actions">
                        <div className="action" onClick={handleLikeAsep}>
                            <FaHeart color={isLikedAsep ? 'red' : '#DAD5D5'} />
                        </div>
                        <div className="action">
                            <FaComment />
                        </div>
                        <div className="action" onClick={handleSaveAsep}>
                            <FaBookmark color={isSavedAsep ? 'black' : '#DAD5D5'} />
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="requestberanda">
                <h2>Request barang <br /> aplikasi ownfarm</h2>

                <div className="requestberanda-content">
                    <div className="requestbarang-content-login">
                        <img src={loginregister} />
                        <p>1. Buat akun dan log in</p>
                    </div>
                    <img src={panahkanan} />
                    <div className="requestbarang-content-menulogistik">
                        <img src={menulogistik} />
                        <p>2. Masuk ke menu logistik dan membuat registrasi</p>
                    </div>
                    <img src={panahkanan} />
                    <div className="requestbarang-content-requestdiajukan">
                        <img src={requestdiajukan} />
                        <p>3. Request diajukan</p>
                    </div>
                    <img src={panahkanan} />
                    <div className="requestbarang-content-menunggubarang">
                        <img src={menunggubarang} />
                        <p>4. Menunggu barang dikirim</p>
                    </div>
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

export default Beranda;