import PropTypes from 'prop-types';
import TwitterIcon from '@/icons/TwitterIcon';
import FacebookIcon from '@/icons/FacebookIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import '@/styles/SocialLinks.css';

function SocialLinks({ color = "white" }) {
    color;
    return (
        <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer">
                <TwitterIcon color={color} />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
                <FacebookIcon color={color} />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
                <LinkedinIcon color={color} />
            </a>
        </div>
    )
}

SocialLinks.propTypes = {
    color: PropTypes.string
}

export default SocialLinks;