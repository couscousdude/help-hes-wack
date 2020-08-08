import React from 'react';
import BlackManStory from './assets/BlackManStory';
const BlackmanImg = require('./assets/Blackman.png');

export default function Blackman(props) {
    const [showStory, setShowStory] = React.useState(false);

    return(
        <div className='root'>
            <img src={BlackmanImg} alt='black man' className='black-image' />
            <h2 style={{textAlign: 'center', color: 'white'}}>
                Look at this man
            </h2>
            <h4 style={{textAlign: 'center', color: 'white'}}>
                Take a closer look at his water bottle
            </h4>
            <h5 style={{textAlign: 'center', color: 'white'}}>
                Why do you think he has it?
            </h5>
            { showStory
                ? (
                <div>
                    <p style={{color: 'white', paddingLeft: `${window.innerWidth/4}px`, paddingRight: `${window.innerWidth/4}px`}}>
                        {BlackManStory}
                    </p>
                    <button className='button' onClick={() => setShowStory(!showStory)}>
                        Hide his story
                    </button>
                </div>
                )
                : (
                <button className='button' onClick={() => setShowStory(!showStory)}>
                    Click this button to show his story
                </button>
                )
            }
        </div>
    )
}