import React from 'react';
import './SocialInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faTwitter,faYoutube } from '@fortawesome/free-brands-svg-icons'


const SocialInfo = () => {

    return (
        <div className="social">
            <a className="facebook" ><FontAwesomeIcon icon={faFacebookF} /></a>
            <a className="twitter" > <FontAwesomeIcon icon={faTwitter} /></a>
            <a className="youtube" ><FontAwesomeIcon icon={faYoutube} />
</a>    
        </div>
    );
};

export default SocialInfo;