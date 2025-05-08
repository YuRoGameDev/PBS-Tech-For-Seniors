import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom'
const Footer = ({ onBackClick }) => {
    
    return (
        <footer>
            
            <Link to={onBackClick} button class="button">⬅️ Back</Link>
            <Link to="/" button class="button">🏠 Home</Link>
            <Link to="/" button class="button">🔍 Search</Link>
        </footer>
    )
};

export default Footer;