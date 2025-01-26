import LocationIcon from '@/icons/LocationIcon';
import PhoneIcon from '@/icons/PhoneIcon';
import SocialLinks from '@/components/SocialLinks';
import '@/styles/FooterSection.css';

function FooterSection() {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className='footer-section__column'>
                    <h3>Pages</h3>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-section__column'>
                    <h3>Tomothy</h3>
                    <ul>
                        <li>
                            <a href="#">Eleanor Edwards</a>
                        </li>
                        <li>
                            <a href="#">Ted Robertson</a>
                        </li>
                        <li>
                            <a href="#">Annette Russell</a>
                        </li>
                        <li>
                            <a href="#">Jennie Mckinney</a>
                        </li>
                        <li>
                            <a href="#">Gloria Richards</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-section__column'>
                    <h3>Jane Black</h3>
                    <ul>
                        <li>
                            <a href="#">Philip Jones</a>
                        </li>
                        <li>
                            <a href="#">Product</a>
                        </li>
                        <li>
                            <a href="#">Colleen Russell</a>
                        </li>
                        <li>
                            <a href="#">Marvin Hawkins</a>
                        </li>
                        <li>
                            <a href="#">Bruce Simmmons</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-section__column footer-section__contact">
                    <div className='icons'>
                        <LocationIcon color={"white"} />
                        <p>
                        7480 Mockingbird Hill undefined 
                        </p>
                    </div>
                    <div className='icons'>
                        <PhoneIcon color={"white"} />
                        <a href="tel:+1 (239) 555-0108">
                            (239) 555-0108
                        </a>
                    </div>
                    <div className="social-container">
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;