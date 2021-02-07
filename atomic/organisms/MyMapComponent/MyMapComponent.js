import React, {useState} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, InfoWindow } from "react-google-maps";
import MarkerWithLabel from "react-google-maps/lib/components/addons/MarkerWithLabel";
import styles from './MyMapComponent.module.css';
import GlobalStore from '../../../stores/MainStore';
import { observer } from 'mobx-react';

const MyMapComponent = withScriptjs(withGoogleMap(observer((props) => {
  const icon = {
    url: " ",
    scaledSize: new google.maps.Size(0, 0)
  };
  const [flag, setFlag] = useState(false);
  const deleteSelect = {
    currentTarget: {title : ''}
  }
  return(
    <GoogleMap
      defaultZoom={11}
      defaultCenter={{lat: props.Markers.searchResults.results[0].coordinate.lat, lng: props.Markers.searchResults.results[0].coordinate.lon}}
    >
      {props.isMarkerShown && props.Markers &&
        props.Markers.searchResults.results.map((val, index)=>(
        <MarkerWithLabel
          position={{ lat: val.coordinate.lat, lng: val.coordinate.lon }}
          key={val.thumbnailUrl}
          labelAnchor={new google.maps.Point(0, 0)}
          icon = {icon}
          title={val.id.toString()}
          onMouseOver={(e)=>GlobalStore.setPropertyHover(e)}
          onClick={(e)=>{
            GlobalStore.setPropertySelected(e);
            setFlag(!flag);
          }}
          >
          <div className={val.id == GlobalStore.propertySelectedId ? styles.marker_label_selected : styles.marker_label}>
            {val.ratePlan.price.current}
          </div>
        </MarkerWithLabel>
          ))
      }
      {/* я пытался использовать переменную из mobx, но тогда не работает */}
      {flag &&
          <InfoWindow
            position={ {lat: GlobalStore.propertySelected.coordinate.lat, lng: GlobalStore.propertySelected.coordinate.lon} }
            onCloseClick={(e)=>{
              setFlag(!flag);
              GlobalStore.setPropertySelected(deleteSelect)
            }}
          >
            <div className='styles.rap'>
            <img src={GlobalStore.propertySelected.thumbnailUrl}/>
            <h6>{GlobalStore.propertySelected.ratePlan.price.current}</h6>
            <h5>{GlobalStore.propertySelected.address.streetAddress}</h5>
            <h6>Rating: {GlobalStore.propertySelected.guestReviews.rating}</h6>
            </div>
          </InfoWindow>
        
      } 
    </GoogleMap>
  ) })
))

export default MyMapComponent ;