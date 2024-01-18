import officePic from '../assets/office.jpg';
import './styles/Intro.css';

const Intro = () => {
  return (
    <>
        <div id="intro" className="intro section">
            <img src={officePic} className="photo" />
        </div>
        <div className="overlay-section absolute">
            <h1 className="overlay-header">Aaron Marks</h1>
        </div>
    </>
  )
}

export default Intro