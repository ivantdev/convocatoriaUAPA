import PropTypes from 'prop-types';
import PlayIcon from '@/icons/PlayIcon';
import '@/styles/VideoPlayer.css';

function VideoPlayer({ coverImages, videoUrl }) {
  return (
    <div className="video-player">
      <img className='video-player__cover mobile' src={coverImages.mobile} alt="cover" />
      <img className='video-player__cover desktop' src={coverImages.desktop} alt="cover" />
      <button>
        <PlayIcon />
      </button>
      <video controls>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}

VideoPlayer.propTypes = {
    coverImages: PropTypes.shape({
        mobile: PropTypes.string.isRequired,
        desktop: PropTypes.string.isRequired
    }).isRequired,
    videoUrl: PropTypes.string
}

export default VideoPlayer;