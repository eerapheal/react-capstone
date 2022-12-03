import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import {
  faCircleArrowRight,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getCountries } from '../redux/Details';

const Home = () => {
  const dispatch = useDispatch();
  const { countries, status } = useSelector((state) => state.datas);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (status === null) {
      dispatch(getCountries());
    }
  });

  return (
    <div>
      {status === 'pending' ? (
        <div className="pending">
          <h3> Loading...</h3>
        </div>
      ) : (
        <>
          <div className="search">
            <div className="search_element">
              <h1 className="live_preview">Live preview</h1>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="search"
                className="search_input"
              />
              <FontAwesomeIcon icon={faSearch} className="search_icon" />
            </div>
          </div>
          <div className="display_flex">
            {countries
              .filter(
                (searchCountry) => searchCountry.continent
                  .toLowerCase()
                  .includes(search.toLowerCase())
                || searchCountry.continent
                  .toLowerCase()
                  .includes(search.toLowerCase()),
              ).map((item) => (
                <div key={uuidv4()} className="country_display">
                  <NavLink state={item} to="/details">
                    <FontAwesomeIcon
                      icon={faCircleArrowRight}
                      className="arrow-right"
                    />
                  </NavLink>
                  <div className="update_countries">
                    <h3>{item.continent}</h3>
                    <p>{item.updated}</p>
                  </div>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
