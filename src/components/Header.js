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
    <h3>COVID-19 Updates for all Continent</h3>
    <div className="icons">
      <FontAwesomeIcon icon={faMicrophone} className="icon_microphone" />
      <FontAwesomeIcon icon={faGear} className="icon_gear" />
    </div>
  </nav>
);

export default Heading;
