import React from 'react';

function Officer({ name, image, onClick }) {
    
    return (
        <div onClick={onClick} style={{ backgroundColor: '#365B72', width: '350px', height: '400px', padding: '50px', border: '20px', borderRadius: '80px' }}>
            <img 
                src={image} 
                alt={name} 
                style={{ width: '250px', height: '250px', borderRadius: '40px' }} 
            />
            <p style={{ color: 'white', fontWeight: 'bold' }}>{name}</p>
            <p style={{ color: 'white', fontWeight: 'bold' }}>Officer Position</p>
        </div>
    );
}

export default Officer;