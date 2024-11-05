// src/components/Header.js
import React from 'react';
import logo from '../img/logo.jpeg'; // Import logo gambar

function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 50px',
      backgroundColor: '#040720',
      borderBottom: '1px solid #ddd'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src={logo} 
          alt="Website Logo" 
          style={{ 
            width: '50px', 
            height: '50px', 
            marginRight: '10px',
            borderRadius: '50%', // Membuat gambar logo menjadi bulat
            objectFit: 'cover' // Agar gambar tetap rapi dalam bentuk lingkaran
          }} 
        />
        <h2 style={{ fontSize: '1.5rem', color: '#FFFFFF', margin: 0 }}>WebsiteLogo</h2>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', gap: '20px' }}>
        <a href="#beranda" style={{ textDecoration: 'none', color: '#FFFFFF' }}>Beranda</a>
        <a href="#produk" style={{ textDecoration: 'none', color: '#FFFFFF' }}>Produk</a>
        <a href="#tentang" style={{ textDecoration: 'none', color: '#FFFFFF' }}>Tentang</a>
      </nav>

      {/* Log In and Register Buttons */}
      <div>
        <button style={{
          padding: '8px 16px',
          marginRight: '10px',
          backgroundColor: '#333333', 
          color: '#FFFFFF', 
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Log In</button>
        <button style={{
          padding: '8px 16px',
          backgroundColor: '#007bff', 
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>Register</button>
      </div>
    </header>
  );
}

export default Header;
