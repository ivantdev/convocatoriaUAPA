import '@/styles/FeaturesSection.css';
import VideoPlayer from '@/components/VideoPlayer';
import CircleSquareIcon from '@/icons/CircleSquareIcon';
import BrushDrawIcon from '@/icons/BrushDrawIcon';
import BrushIcon from '@/icons/BrushIcon';

function FeaturesSection() {
    return (
        <section className="features__section">
            <h1>Features</h1>
            <p>
                Most calendars are designed for teams.<span> Slate is designed for freelancers</span>
            </p>
            <div className='video-player__container'>
                <VideoPlayer
                    coverImages={{
                        mobile: "/imgs/video-cover-mobile.jpeg",
                        desktop: "/imgs/video-cover-desktop.jpeg"
                    }}
                />
            </div>
            <div className="features__list">
                <div className="feature__item">
                    <div>
                        <CircleSquareIcon />
                        <h3>
                            OpenType features 
                        Variable fonts
                        </h3>
                    </div>
                    <p>
                        Slate helps you see how many more days you need to work to reach your financial goal.
                    </p>
                </div>
                <div className="feature__item">
                    <div>
                        <BrushDrawIcon />
                        <h3>
                            Design with real data
                        </h3>
                    </div>
                    <p>
                        Slate helps you see how many more days you need to work to reach your financial goal.
                    </p>
                </div>
                <div className="feature__item">
                    <div>
                        <BrushIcon />
                        <h3>
                            Fastest way to take action
                        </h3>
                    </div>
                    <p>
                        Slate helps you see how many more days you need to work to reach your financial goal.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;