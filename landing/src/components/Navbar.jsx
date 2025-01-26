import SocialLinks from "@/components/SocialLinks";
import MenuIcon from "@/icons/MenuIcon";
import "@/styles/Navbar.css";

function Navbar() {
    return (
        <div className="navbar">
            <div className="menu">
                <div className="menu__item">
                    <a href="#">Home</a>
                </div>
                <div className="menu__item">
                    <a href="#">Product</a>
                </div>
                <div className="menu__item">
                    <a href="#">Pricing</a>
                </div>
                <div className="menu__item">
                    <a href="#">About</a>
                </div>
                <div className="menu__item">
                    <a href="#">Contact</a>
                </div>
                <div className="menu__item menu__logo">
                    <a href="#">
                        <img src="/imgs/logo.png" alt="Logo FigmaLand" />
                    </a>
                </div>
            </div>

            <div className="menu__social">
                <SocialLinks />
            </div>
            <div className="menu__button">
                <button>
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;