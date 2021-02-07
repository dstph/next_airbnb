import React, {useRef} from 'react';
import GlobalStore from '../../../stores/MainStore';
import { Photo } from '../../atoms';
import { OptionInfo } from '../index';
import styles from './Option.module.css';
import { observer } from 'mobx-react';

const Option = ({address, deals, guestReviews, name, thumbnailUrl, ratePlan, id, ratePlan:{ features,
  features:{freeCancellation, noCCRequired, paymentPreference}}}) => {
  const optionRef = useRef();
  const className = GlobalStore.propertyHover == id? styles.option_card_selected : styles.option_card;
  if (GlobalStore.propertyHover == id) {
    optionRef.current.scrollIntoView( {behavior: 'smooth'} );
  }
  return(
    <div id={id} ref={optionRef} className={className}
      onMouseEnter = {e => GlobalStore.optionCardSelected(e)}
      onMouseLeave = {e => GlobalStore.optionCardDeselected(e)}
    >
      <Photo thumbnailUrl={thumbnailUrl} name={name} />
      <OptionInfo address={address} name={name} freeCancellation={freeCancellation} noCCRequired={noCCRequired}
        paymentPreference={paymentPreference} guestReviews={guestReviews} ratePlan={ratePlan} />
    </div>
  )  
}
export default observer(Option);
