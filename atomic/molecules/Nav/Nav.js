import React from 'react';
import { AtomLink } from '../../atoms';
import styles from './Nav.module.css';

const Nav = () => (
  <div className={styles.nav_wrapper}>
    <AtomLink href='/' child='Placeas to stay' />
    <AtomLink href='/' child='Experiences' />
    <AtomLink href='/' child='Online Experiences' />
  </div>
)

export  default Nav;