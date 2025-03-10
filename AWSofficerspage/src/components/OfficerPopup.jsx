import React from 'react';
import './OfficerPopup.css'; // Importing CSS for styling
import Officer from './Officers';

function OfficerPopup({ title, children, open, onClose }) {
    if (!open) return null; // Don't render the modal if it's not open

    return (
        <div className="officerpopup-overlay">
            <div className="officerpopup-content">
                <h2>{title}</h2>
                <div>{children}</div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default OfficerPopup;

