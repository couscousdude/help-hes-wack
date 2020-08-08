import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer(props) {
    return(
        <div className='footer'>
            <p>
                <Link to='/help-hes-wack/policy'>
                    <p>Privacy Policy</p>
                </Link>
            </p>
        </div>
    )
}