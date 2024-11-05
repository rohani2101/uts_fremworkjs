import React from 'react';
import Header from '../organisem/Header';
import Slide from '../organisem/Slide';
import Card from '../molekul/Card';
import Konsultasi from '../organisem/Konsultasi';
import Footer from '../organisem/Footer';

function Home() {
    return (
      <div style={{ padding: 0, margin: 0 }}>
        <Header />
        <Slide />
        <section style={{ padding: '40px', textAlign: 'center' }}>
          <h2 style={{ color: '#007bff' }}>Perusahaan yang Telah Bergabung</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Card label="250+" description="Happy Clients" style={{ labelColor: '#ff5733', descriptionColor: '#555' }} />
            <Card label="600+" description="Completed Projects" style={{ labelColor: '#ff5733', descriptionColor: '#555' }} />
            <Card label="1.8k+" description="Available Resources" style={{ labelColor: '#ff5733', descriptionColor: '#555' }} />
            <Card label="11k+" description="Subscribers" style={{ labelColor: '#ff5733', descriptionColor: '#555' }} />
          </div>
        </section>
        <Konsultasi />
        <Footer />
      </div>
    );
}

export default Home;
