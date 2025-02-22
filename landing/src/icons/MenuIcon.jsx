import PropTypes from 'prop-types';

function MenuIcon({ color = "white"}) {
    return (
        <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.667969 0H27.3346V2.66667H0.667969V0ZM7.33463 6.66667H27.3346V9.33333H7.33463V6.66667ZM15.668 13.3333H27.3346V16H15.668V13.3333Z" fill={color} />
        </svg>
    );
}

MenuIcon.propTypes = {
    color: PropTypes.string
}

export default MenuIcon;
