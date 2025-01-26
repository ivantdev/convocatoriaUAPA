import PropTypes from 'prop-types';

function PhoneIcon({ color = "#2091F9"}) {
    return (
        <svg width="21" height="33" viewBox="0 0 21 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.5417 0.175537H4.875C2.45417 0.175537 0.5 2.1297 0.5 4.55054V27.8839C0.5 30.3047 2.45417 32.2589 4.875 32.2589H16.5417C18.9625 32.2589 20.9167 30.3047 20.9167 27.8839V4.55054C20.9167 2.1297 18.9625 0.175537 16.5417 0.175537ZM13.625 29.3422H7.79167V27.8839H13.625V29.3422ZM18.3646 24.9672H3.05208V4.55054H18.3646V24.9672Z" fill={color} />
        </svg>
    );
}

PhoneIcon.propTypes = {
    color: PropTypes.string
}

export default PhoneIcon;
