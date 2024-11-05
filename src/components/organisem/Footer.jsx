// src/components/Footer.js 
import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ padding: '40px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap' }}>
        
        {/* Logo Section */}
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}></div>
        
        {/* Navigation Links */}
        <nav style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <a href="#beranda" style={{ color: '#fff', textDecoration: 'none' }}>Beranda</a>
          <a href="#produk" style={{ color: '#fff', textDecoration: 'none' }}>Produk</a>
          <a href="#tentang" style={{ color: '#fff', textDecoration: 'none' }}>Tentang</a>
        </nav>
        
        {/* Social Media Icons */}
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#" style={{ color: '#fff', fontSize: '20px' }}><FaFacebook /></a> {/* Facebook */}
          <a href="#" style={{ color: '#fff', fontSize: '20px' }}><FaInstagram /></a> {/* Instagram */}
          <a href="#" style={{ color: '#fff', fontSize: '20px' }}><FaTelegram /></a> {/* Telegram */}
          <a href="#" style={{ color: '#fff', fontSize: '20px' }}><FaLinkedin /></a> {/* LinkedIn */}
        </div>
      </div>

      {/* Copyright */}
      <div style={{ marginTop: '20px', fontSize: '14px' }}>
        Website Bisnis &copy; 2024. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
