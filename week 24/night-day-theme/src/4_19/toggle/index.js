import React from 'react';
import './style.css';

export const Toggle = ({ toggled, night, onClick }) => {
    return (
        <div>
            <div className={`body${night ? ' night' : ''}`}>
                <div
                    onClick={onClick}
                    className={`toggle${toggled ? ' night' : ''}`}
                >
                    <div className="notch"></div>
                </div>
            </div>
        </div>
    );
};
