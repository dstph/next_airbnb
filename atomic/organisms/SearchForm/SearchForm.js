import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { TextInput } from '../../atoms';
import styles from './SearchForm.module.css';
import GlobalStore from '../../../stores/MainStore';
import { observer } from 'mobx-react';
import Router from 'next/router';


 
const SearchForm = () => {
  const [value, setValue] = useState(new Date());
  const [checkInIsOpen, setCheckInIsOpen] = useState(true);
  const [checkOutIsOpen, setCheckOutIsOpen] = useState(true);
  const [guestsIsOpen, setGuestsIsOpen] = useState(true);
 
  function calendarHandler(nextValue, check) {
    setValue(nextValue);
    if(check === 'checkIn'){
      GlobalStore.setCheckIn(nextValue);
    } else if(check === 'checkOut'){
      GlobalStore.setCheckOut(nextValue);
    }
  }
  
  function showModal (e, flag, selector) {
    e.preventDefault();
    setCheckOutIsOpen(!flag);
    const modal = document.querySelector(`#${selector}`);
    if (flag) {
      modal.show();
    } else {
      modal.close();
    }
  }

  function escFunction(e){
    if(e.keyCode === 27) {
      const modals = document.querySelectorAll('dialog');
      modals.forEach(el => el.close()); 
    }
    setCheckInIsOpen(true);
    setCheckOutIsOpen(true);
    setGuestsIsOpen(true);
  }

  function submit(e){
    e.preventDefault();
    
    if(GlobalStore.location && GlobalStore.checkIn && GlobalStore.checkOut && GlobalStore.guestsValue){
      Router.push('/apartments')
    } else {
      alert('plese check all parametrs')
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    }
  })

  return(
    <div className={styles.searchform_container} >
      <form>
        <TextInput inputClassName={styles.input} labelClassName={styles.small_bold} labelText='Location' handler={({target:{value}})=>{GlobalStore.setLocation(value)}} placeholder='Where are you going?' />
        <button onClick={(e)=>showModal(e,checkInIsOpen,'checkIn')} >Check In <p>Add dates</p></button>
    
        <dialog className={styles.modal} id='checkIn'>
          <Calendar
            onChange={(v)=>calendarHandler(v,'checkIn')}
            value={value}
          />
        </dialog>
        <button onClick={(e)=>showModal(e,checkOutIsOpen,'checkOut')} >Check Out <p>Add dates</p></button>
        <dialog className={styles.modal} id='checkOut'>
          <Calendar
            onChange={(v)=>calendarHandler(v,'checkOut')}
            value={value}
          />
        </dialog>
        <button onClick={(e)=>showModal(e,guestsIsOpen,'guests')}>Guests <p>Add guests</p></button>
        <dialog className={styles.modal} id='guests'>
          <input onChange={(e)=>{GlobalStore.setGuestsValue(e.target.value)}} type='number'  min='1' max='4' />
        </dialog>
        <button type='submit' onClick={submit}>Search</button>
      </form>
    </div>
  )
}

export default observer (SearchForm);