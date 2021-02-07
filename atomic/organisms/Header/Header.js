import React from 'react';
import { Nav } from '../../molecules';
import { AtomLink } from '../../atoms';
import { LanguageButton, SingUp } from '../../molecules';
import styles from './Header.module.css';

const Header = () => (
  <div className={styles.header_container}>
    <p className={styles.logo}>logo</p>
    <Nav />
    <AtomLink href='/' child='Become a host' className={styles.member_link} /> 
    <LanguageButton />
    <SingUp />  
  </div>
)

export default Header;
