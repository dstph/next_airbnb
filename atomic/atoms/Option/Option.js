import React from 'react';
import { Photo } from '../../molecules';
import { OptionInfo } from '../index';
import styles from './Option.module.css';

const Option = ({address, deals, guestReviews, name, thumbnailUrl, ratePlan, ratePlan:{ features,
  features:{freeCancellation, noCCRequired, paymentPreference}}}) => (
  <div className={styles.option_card}>
    <Photo thumbnailUrl={thumbnailUrl} name={name} />
    <OptionInfo address={address} name={name} freeCancellation={freeCancellation} noCCRequired={noCCRequired}
      paymentPreference={paymentPreference} guestReviews={guestReviews} ratePlan={ratePlan} />
  </div>
)  

export default Option;
