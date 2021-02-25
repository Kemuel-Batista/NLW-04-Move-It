import React from 'react';

import styles from '../styles/components/Profile.module.css';

export default function Profile(){
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/kemuel-batista.png" alt="Kemuel Batista"/>

      <div>
        <strong>Kemuel Batista</strong>
        <p>
          <img src="icons/level.svg" alt="Level"/>
          Level 1
        </p>
      </div>
    </div>
  )
}