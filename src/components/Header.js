import {
  faCircleArrowLeft,
  faGear,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Heading = () => (
  <nav className="nav_bar">
    <Link to="/">  
      <FontAwesomeIcon icon={faCircleArrowLeft} id="arrow-left" />
    </Link>
    <h2>COVID-19 Updates</h2>
    <div className="icons">
      <FontAwesomeIcon icon={faMicrophone} className="icon_microphone" />
      <FontAwesomeIcon icon={faGear} className="icon_gear" />
    </div>
  </nav>
);

export default Heading;
