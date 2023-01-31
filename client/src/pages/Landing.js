import React from 'react';
import logo from '../assets/images/logo.svg';
import dream from '../images/landing-page-girl.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <main className="landing-container">
      <div className="landing-header">
        <nav className="landing-nav">
          <img src={logo} alt="jobify" className="logo" />
        </nav>
      </div>
      <div className="container page">
        <div className="container-img">
          <img src={dream} alt="jobify" className="dream-girl" />
        </div>
        <div className="info">
          <h1>
            {' '}
            job <span>tracking</span> app
          </h1>
          <p>
            {' '}
            This is job finding site. You can find your dream jobs easily by
            just registering an account. Please shrare to you network/pals.
            Thank you. This is job finding site. You can find your dream jobs
            easily by just registering an account. Please shrare to you
            network/pals. Thank you.{' '}
          </p>
          <Link to="/register">
            <button className="btn btn-hero">Login/Register</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Landing;
