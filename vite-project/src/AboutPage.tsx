import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

const AboutPage: React.FC = () => {
  return (
    <div>
      <NavBar/>
      <h2>About Page</h2>
      <p>This is the about page content.</p>
      <Footer/>
    </div>
  );
};

export default AboutPage;