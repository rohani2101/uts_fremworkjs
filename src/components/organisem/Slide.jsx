// src/components/Slide.js
import React from 'react';
import placeholderImage from '../img/gambar.jpg'; // Import gambar

function Slide() {
  return (
    <section style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '50px',
      backgroundColor: '#00008B'
    }}>
      {/* Konten Teks */}
      <div style={{ flex: 1, paddingRight: '20px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Memberi Solusi Bisnis Anda</h1>
        <p style={{ color: '#666', lineHeight: '1.6' }}>
          Deskripsi di sini, soal keluh kesah dalam bisnis anda jangan sungkan untuk menghubingi kami untuk membantu 
          mengatasi keluh kesah anda.
        </p>
        <div style={{ marginTop: '20px' }}>
          <button style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#FF0000',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Produk Kami
          </button>
          <button style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>
            Pesan Sekarang
          </button>
        </div>
      </div>

      {/* Gambar Placeholder */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <img
          src={placeholderImage}
          alt="Placeholder"
          style={{
            width: '100%',
            maxWidth: '400px',  // Mengatur ukuran maksimal gambar
            borderRadius: '10px',
          }}
        />
      </div>
    </section>
  );
}

export default Slide;
