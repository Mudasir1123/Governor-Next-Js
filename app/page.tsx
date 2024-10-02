import React from 'react';
import Image from 'next/image';
import myImage from './favicon.ico'; // Image in the public folder
import './globals.css'; // Importing global CSS

export default function Home() {
  return (
    <div className="home-container">
      <div className="content-section">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to amazing web experiences starts here!</p>
        <p>Explore our features and services designed to take your ideas to the next level.</p>
        <a href="#" className="cta-btn">Discover More</a>
      </div>
      <div className="image-section">
        <Image
          src={myImage}
          alt="Welcome"
        />

      </div>
    </div>
  );
}
