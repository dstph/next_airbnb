import React, {useState, useEffect} from 'react';
import { OptionWrapper, MyMapComponent } from '../index';
import styles from './SearchResults.module.css';

const SearchResults = () => {
  const optionDefault = {data:{}};
  const [options, setOptions] = useState(optionDefault);
  useEffect( () => {
    fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
      "destinationId": "1506246",
      "pageNumber": "1",
      "checkIn": "2020-12-30",
      "checkOut": "2020-12-31",
      "pageSize": "25",
      "adults1": "1",
      "currency": "USD",
      "locale": "en_US",
      "sortOrder": "PRICE"
      })}`, {
        method: 'GET',
        headers: {
          "x-rapidapi-key": "e709158813msh46d143c0087c2f3p1a099djsna278ff1e6dd8",
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "useQueryString": true
        }
      })
      .then(data => data.json())
      .then(json => setOptions(json))
      .catch((error) => console.log(error))
  }, []);
  const height = {height: '100vh'};
  return(
    <div className={styles.container_search_results}>
      <div className={styles.column}>
        {
          options.result === 'OK' &&
          <OptionWrapper options={options.data.body} />
        }
        </div>
        <div className={styles.column_map}>
        <MyMapComponent 
          Markers={options.data.body}
          isMarkerShown={true}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={height} />}
          containerElement={<div style={height} />}
          mapElement={<div style={height} />}
        />
        </div>
    </div>
  )
}

export default SearchResults;