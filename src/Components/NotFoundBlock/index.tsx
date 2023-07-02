import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div>
      <h1 className={styles.root}>
        <span>: </span>
        <br /> <br />
        <h1>Ничего не найдено</h1>
      </h1>
      <p className={styles.description}>
        {' '}
        К сожалению, данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
