import PropTypes from 'prop-types';

function PlayIcon({ color = "white"}) {
    return (
        <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.402344 0.593994L39.4434 24.0186L0.402344 47.4432V0.593994Z" fill={color} />
        </svg>
    );
}

PlayIcon.propTypes = {
    color: PropTypes.string
}

export default PlayIcon;
