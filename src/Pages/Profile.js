import React, { useState, useEffect } from 'react';
import '../Styles/Profile.css';
import logo from '../Assets/Icon/Logo-ownfarm-white.png';
import profilewallpaper from '../Assets/Pictures/Profilebg.jpg';
import { Link } from 'react-router-dom';


const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [fullName, setFullName] = useState('Asep');
    const [email, setEmail] = useState('asep@example.com');
    const [phoneNumber, setPhoneNumber] = useState('08123456789');
    const [city, setCity] = useState('Jakarta');
    const [subdistrict, setSubdistrict] = useState('Cilandak');
    const [village, setVillage] = useState('Lebak Bulus');
    const [password, setPassword] = useState('********'); // Dummy password
    const [profileImage, setProfileImage] = useState(null);
  
    const handleSave = () => {
      // Implement logic to save changes
      setIsEditing(false);
      console.log('Changes saved!');
    };
  
    const handleEdit = () => {
      // Implement logic to enable editing
      setIsEditing(true);
      console.log('Editing enabled!');
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };

    useEffect(() => {
        
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="profile">
            <div className="navbarprofile">
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
        <Link to="/komunitas_ownfarm" className="nav-link">Komunitas</Link>
    </li>
    <li className="nav-item">
        <Link to="/" className="profile-navlink active">Profile</Link>
    </li>
                    </ul>
                </nav>
            </div>

            <img src={profilewallpaper} className="profile-wallpaper"/>

            <div className={`profile-editprofile ${isEditing ? 'editing' : ''}`}>
                <div className="profile-editfoto">
                    <div className="profile-editfoto-container">
                        <img src={'https://i.ytimg.com/vi/GOtnW_MiRUM/sddefault.jpg'} alt="Profile" />
                    </div>
                </div>

                <div className="profile-form">
                    <label>
                        Nama lengkap:
                        {isEditing ? (
                        <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        ) : (
                        <span>{fullName}</span>
                        )}
                    </label>

                    <label>
                        Email:
                        {isEditing ? (
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        ) : (
                        <span>{email}</span>
                        )}
                    </label>

                    <label>
                        Nomor HP:
                        {isEditing ? (
                        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                        ) : (
                        <span>{phoneNumber}</span>
                        )}
                    </label>

                    <label>
                        Kota:
                        {isEditing ? (
                        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        ) : (
                        <span>{city}</span>
                        )}
                    </label>

                    <label>
                        Kecamatan:
                        {isEditing ? (
                        <input type="text" value={subdistrict} onChange={(e) => setSubdistrict(e.target.value)} />
                        ) : (
                        <span>{subdistrict}</span>
                        )}
                    </label>

                    <label>
                        Kelurahan:
                        {isEditing ? (
                        <input type="text" value={village} onChange={(e) => setVillage(e.target.value)} />
                        ) : (
                        <span>{village}</span>
                        )}
                    </label>

                    <label>
                        Password:
                        {isEditing ? (
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        ) : (
                        <span>********</span>
                        )}
                    </label>

                    {isEditing ? (
                    <>
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                    ) : (
                    <button onClick={handleEdit}>Edit</button>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Profile