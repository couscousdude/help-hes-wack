import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return(
        <div className='footer'>
            <p>
                <Link to='/policy'>
                    <p>Privacy Policy</p>
                </Link>
            </p>
        </div>
    )
}