import PropTypes from 'prop-types';

function CircleSquareIcon({ color = "#2091F9"}) {
    return (
        <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.6042 0.625C18.3117 0.625 21.8673 2.0978 24.4889 4.7194C27.1105 7.34101 28.5833 10.8967 28.5833 14.6042C28.5833 17.9846 27.3888 21.0854 25.3808 23.5H46.375V46.375H23.5V25.3808C21.0854 27.3888 17.9846 28.5833 14.6042 28.5833C10.8967 28.5833 7.34101 27.1105 4.7194 24.4889C2.0978 21.8673 0.625 18.3117 0.625 14.6042C0.625 10.8967 2.0978 7.34101 4.7194 4.7194C7.34101 2.0978 10.8967 0.625 14.6042 0.625Z" fill={color}/>
        </svg>
    );
}

CircleSquareIcon.propTypes = {
    color: PropTypes.string
}

export default CircleSquareIcon;