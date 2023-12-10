import React, { useState, useEffect } from 'react';
import '../Styles/Komunitas.css';
import logo from '../Assets/Icon/Logo-ownfarm-white.png';
import { Link } from 'react-router-dom';
import { FaEllipsisH, FaHeart, FaComment, FaBookmark } from 'react-icons/fa';
import photoprofile from '../Assets/Icon/icon _profile.png';

const Komunitas = () => {

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
        // Setelah komponen dimuat, atur posisi scroll halaman ke atas
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="komunitas">
            <div className="navbarkomunitas">
                <nav>
                    <img src={logo} style={{height: "auto", width: "8rem"}} alt="logo" />
                    <ul>
                    <li className="nav-item">
                        <Link to="/beranda_ownfarm" className="nav-link">Beranda</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/formlogistik_ownfarm" className="nav-link">Logistik</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/komunitas_ownfarm" className="komunitas-navlink active">Komunitas</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile_ownfarm" className="nav-link">Profile</Link>
                    </li>
                    </ul>
                </nav>
            </div>

            <div className="navbarkomunitas2">
                <div className="nav-container">
                    <div className="left-content">
                        <h4>Postingan</h4>
                        <h4>Disimpan</h4>
                    </div>
                    <div className="right-content">
                        <input type="text" placeholder="Cari..." />
                        <button>Postingan</button>
                    </div>
                </div>
            </div>

            <div className="komunitassection">
                <div className="komunitassection-card">
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

                <div className="komunitassection-card">
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

                <div className="komunitassection-card">
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
    );
}

export default Komunitas;