import React from 'react';
import { Title, Text_p } from '../../atoms';
import styles from './OptionInfo.module.css';

const OptionInfo = ({address, address: { countryName, locality,
  region, streetAddress }, name, freeCancellation, noCCRequired, 
  paymentPreference, guestReviews, ratePlan }) => (
    <div className={styles.flex_grow}>
      <Text_p>{`${countryName}, ${locality}, ${region}, ${streetAddress}`} </Text_p>
      <Title children={name} className='' size='3' />
      <Text_p>Options:</Text_p>
      <Text_p><b>free cancellation:</b> {freeCancellation ? '-' : '+'} <b>no cc required:</b> {noCCRequired ? '-' : '+'} <b>payment preference:</b> {paymentPreference ? '-' : '+'}</Text_p>
      <div className={styles.rating_price}>
        <Text_p>Rating: {guestReviews.rating}</Text_p> 
        <Text_p>Price: {ratePlan.price.current}</Text_p>
      </div>

    </div>
)

export default OptionInfo;