import { observable, makeObservable, action, computed } from 'mobx';

class MainStore {
  location = '';
  locationId = '';
  checkIn = '';
  checkOut = '';
  guestsValue = '';
  options = {result: 'no'};
  propertySelected = '';
  propertySelectedId = '';
  arrayOfResults = [];
  propertyHover = '';
  // showInfoWindow = false;



  constructor() {
    makeObservable(this, {
      location: observable,
      locationId: observable,
      setLocation: action,
      setLocationId: action,
      checkIn: observable,
      setCheckIn: action,
      checkOut: observable,
      setCheckOut: action,
      guestsValue: observable,
      setGuestsValue: action,
      options: observable,
      setOptions: action,
      getOptions: computed,
      propertySelected: observable,
      setPropertySelected: action,
      propertySelectedId : observable,
      setPropertySelectedId: action,
      arrayOfResults : observable,
      setArrayOfResults : action,
      // showInfoWindow : observable,
      // setShowInfoWindow : action,
      propertyHover : observable,
      setPropertyHover : action,
      optionCardSelected : action,
      optionCardDeselected : action,
    })
  }
  // setShowInfoWindow(){
  //   this.showInfoWindow = !this.showInfoWindow;
  //   console.log(this.showInfoWindow)
  // }
  optionCardSelected(prop){
    this.setPropertySelectedId(prop.currentTarget.id)
  }
  optionCardDeselected(prop){
    this.setPropertySelectedId('')
  }
  setArrayOfResults(prop){
    this.arrayOfResults = prop;
  }
  setPropertySelectedId(prop){
    this.propertySelectedId = prop;
  }
  setPropertySelected(e){
    try {
      if(e.currentTarget.title) {
        const id = e.currentTarget.title;
        this.setPropertySelectedId(id);
        console.log(this.propertySelectedId);
        this.propertySelected = this.arrayOfResults.filter(val=>val.id == this.propertySelectedId)[0];
        console.log(this.propertySelected)
      }
    } catch(error) {
      console.log(error);
    }
  }
  setPropertyHover(e){
    try {
      if(e.currentTarget.title) {
        const id = e.currentTarget.title;
        this.propertyHover = id;
        console.log(this.propertyHover)
      } 
    } catch(error) {
      console.log(error);
    }
  }
  setLocation(value){
    this.location = value;
    fetch(`https://hotels4.p.rapidapi.com/locations/search?${new URLSearchParams({
      "query": value,
      "locale": "en_US"
    })}`, {
      method: 'GET',
      headers: {
        "x-rapidapi-key": "ef6aa709c6msh59ea8aef79713cbp1df7c5jsn167c2866f9b9",
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "useQueryString": true
      }
    })
      .then(data => data.json())
      .then(json => {
        this.location=json.suggestions[0].entities[0].destinationId;
        console.log(this.location);
      })
      .catch(error => console.log(error))
  }
  setCheckIn(value){
    this.checkIn = value.toLocaleString()
      .substring(0, 10)
      .split('.')
      .reverse()
      .join('-');
      console.log('checkIn',this.checkIn)
  }
  setCheckOut(value){
    this.checkOut = value.toLocaleString()
    .substring(0, 10)
    .split('.')
    .reverse()
    .join('-');
    console.log('checkout',this.checkOut)
  }
  setGuestsValue(value){
    this.guestsValue = value;
  }

  setLocationId(value){
    this.locationId=value;
  }

  setOptions() {
    fetch(`https://hotels4.p.rapidapi.com/properties/list?${new URLSearchParams({
      "destinationId": this.location,
      "pageNumber": "1",
      "checkIn": this.checkIn,
      "checkOut": this.checkOut,
      "pageSize": "25",
      "adults1": this.guestsValue,
      "currency": "USD",
      "locale": "en_US",
      "sortOrder": "PRICE"

      })}`, {
        method: 'GET',
        headers: {
          "x-rapidapi-key": "ef6aa709c6msh59ea8aef79713cbp1df7c5jsn167c2866f9b9",
          "x-rapidapi-host": "hotels4.p.rapidapi.com",
          "useQueryString": true
        }
      })
      .then((response) => response.json())
      .then((data) => {
        this.options = data;
        console.log(data)
        this.setArrayOfResults(data.data.body.searchResults.results)
      })
      .catch(error => console.log(error))   
  }
  
  get getOptions() {
    return this.options;
  }
}

const GlobalStore = new MainStore;

export default GlobalStore;