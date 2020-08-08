import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Policy(props) {
    const history = useHistory();

    return(
        <div>
            <p style={{textAlign: 'center', color: 'white'}}>
                You stinkyy poopy. All content on this site is satire. 2020 cosucous man all right reserved TM
            </p>
            <button className='button' onClick={() => history.push('/help-hes-wack/blackman')}>
                Back
            </button>
        </div>
    )
}