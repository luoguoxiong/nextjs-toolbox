import React, { useEffect, useRef, useState } from 'react';
import cls from 'classnames';
import Img from 'next/image';
import styles from './swiper.module.css';
export const Swiper= (props) => {
  const { images } = props;
  const ref = useRef(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setIndex((ref.current++) % images.length);
    }, 2000);
  }, []);

  return (
    <div className={styles['swiper-wrap']}>
      {images.map((item, _index) => (
        <Img
          key={item}
          width={'100%'}
          height={'100%'}
          layout="fill"
          className={cls(styles['swiper-item'], {
            [styles['active']]: index === _index,
          })}
          src={item} />
      ))}
    </div>
  );
};
