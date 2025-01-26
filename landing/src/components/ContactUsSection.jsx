import SocialLinks from '@/components/SocialLinks';
import Map from '@/components/Map';
import LocationIcon from '@/icons/LocationIcon';
import PhoneIcon from '@/icons/PhoneIcon';
import MailIcon from '@/icons/MailIcon';
import '@/styles/ContactUsSection.css';

function ContactUsSection() {
    return (
        <section className="contact-us__section">
            <h1>
                Contact Us
            </h1>
            <p>
                Most calendars are designed for teams.<span> Slate is designed for freelancers</span>
            </p>
            <div className="contact-us__main">
                <div className='contact-us__info'>
                    <div className="social-container">
                        <SocialLinks color={"#2091F9"} />
                    </div>
                    <div className="contact-us__map-container">
                        <Map />
                    </div>
                    <div className="contact-us__contact-info">
                        <div>
                            <LocationIcon />
                            <p>
                                6386 Spring St undefined Anchorage, Georgia 12473 United States
                            </p>
                        </div>
                        <div>
                            <PhoneIcon />
                            <a href="tel:+1 (843) 555-0130">
                                (843) 555-0130
                            </a>
                        </div>
                        <div>
                            <MailIcon />
                            <a href="mailto:willie.jennings@example.com">
                                willie.jennings@example.com
                            </a>
                        </div>
                    </div>
                </div>
                <form className="contact-us__form">
                    <h2>Contact Us</h2>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <button
                        type='button'
                        >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}

export default ContactUsSection;