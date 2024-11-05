// src/components/Card.js
import React from 'react';

function Card({ label, description, style }) {
    return (
        <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', ...style }}>
            <h3 style={{ color: style?.labelColor || '#333' }}>{label}</h3>
            <p style={{ color: style?.descriptionColor || '#555' }}>{description}</p>
        </div>
    );
}

export default Card;
