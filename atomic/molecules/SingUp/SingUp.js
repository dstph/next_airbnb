import React from 'react'
import {Button, Image} from '../../atoms';
import styles from './SingUp.module.css';

const SingUp = () => (
  <div className={styles.sing_up_wrapper}>
    <Image src='https://cutcodedown.com/images/burgerIcon.png' className={styles.sing_up_img} />
    <Image src='https://www.machineryscanner.com/assets/admin/img/user-img-placeholder.png' className={styles.sing_up_img} />
    <Button className={styles.sing_up_btn} child='' />
  </div>
)

export default SingUp;