import '@/styles/HeroSection.css';

function HeroSection() {
    return (
        <section className="hero__section">
            <h1>
                The best products start with Figma
            </h1>
            <p>
                Most calendars are designed for teams.<span> Slate is designed for freelancers</span>
            </p>
            <button
                type='button'
            >
                Try For Free
            </button>
        </section>
    );
}

export default HeroSection;