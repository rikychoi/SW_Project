import React, { useState, useEffect } from 'react';
import './css/PhotoView.css';
import './css/styleguide.css';
import './css/globals.css';
import './css/DMPage.css';
import rectangle77 from './img/rectangle-77.png';
import icons from './img/icons.svg';
import image4 from './img/image-4.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DMPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleMainPageClick=()=>{
    if (isLoggedIn)
      navigate('/loggedin');
    else
      navigate('/');
  }

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:5000/logout', {}, { withCredentials: true });
      if (response.status === 200) {
        alert('Logout successful');
        navigate('/main');
      }
    } catch (error) {
      console.error('Logout error', error);
      alert('Logout error');
    }
  };

    return (
        <div className="DM-page">
          <div className="header-nav">
            <div className="flex-row">
              <img className="rectangle-77" src={rectangle77} alt="Rectangle 77" />
              <div className="links">
                <div className="place" onClick={handleMainPageClick}>Home</div>
                <div className="x-list" onClick={() => navigate('/userlist')}>User List</div>
                <div className="x-list" onClick={() => navigate('/photolist')}>Photo List</div>
              </div>
              <div className="login-sign-up">
                <article className="button">
                  <div className="frame-276"><img className="icons" src={icons} alt="Icons" /></div>
                </article>
                <article className="button-1 button-5" onClick={handleLogout}>
                  <div className="frame-276-1"><div className="sign-up valign-text-middle">Log out</div></div>
                </article>
              </div>
            </div>
          <div className="divider-1"></div>
        </div>
            <div className="background">
                <div className="DM">
                    <div className="overlap-group">
                        <div className="frame-2">
                            <div className="text-field">
                                <div className="message">Enter message</div>
                            </div>
                            <button className="frame-wrapper">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-2">Delete</div>
                                </div>
                            </button>
                            <button className="button-3">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">Reply</div>
                                </div>
                            </button>
                        </div>
                        <div className="text-wrapper-4">홍길동</div>
                    </div>
                </div>
                <div className="view">
                    <div className="frame-3">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DMPage;