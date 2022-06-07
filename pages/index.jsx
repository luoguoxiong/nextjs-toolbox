
import React from 'react';
import { Swiper, Contact } from '../components/index';
import styles from './index.module.css';

const imgs = [
  '/images/01.png',
  '/images/02.png',
];

const Index = () =>
  <div className={styles.container}>
    <Swiper images={imgs} />
    <Contact />
  </div>;
export default Index;
