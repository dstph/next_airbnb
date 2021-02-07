import React, {useState, useEffect} from 'react';
import { OptionWrapper, MyMapComponent } from '../index';
import styles from './SearchResults.module.css';
import GlobalStore from '../../../stores/MainStore';
import { observer } from 'mobx-react';

const SearchResults = () => {
  useEffect( () => {
    GlobalStore.setOptions(); 
  }, []);
  const height = {height: '100vh'};
  return(
    <div className={styles.container_search_results}>
      <div className={styles.column}>
        {
          GlobalStore.getOptions.result=='OK' &&
          
          <OptionWrapper options={ GlobalStore.options.data.body} />
        }
        </div>
        <div className={styles.column_map}>
        { GlobalStore.getOptions.result=='OK' &&
          <MyMapComponent 
          Markers={GlobalStore.options.data.body}
          isMarkerShown={true}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={height} />}
          containerElement={<div style={height} />}
          mapElement={<div style={height} />}
          />
        }
        </div>
    </div>
  )
}

export default observer(SearchResults);