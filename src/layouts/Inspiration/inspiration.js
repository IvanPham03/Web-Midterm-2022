import React, { Component } from 'react'
import styles from './inspiration.module.css'
import coffee from '../../assets/images/intro2.svg'
import friends from '../../assets/images/intro3.svg'
export default class inspiration extends Component {
  render() {
    return (
      <div>
        <div className={styles['intro']}>
          <p>Catherine's <br></br> Coffee house</p>
          <p>A community house<br></br> Supporting health & education</p>
        </div>
        <div className={styles['imageIntro']}>
          <br></br>
          <div>
            <p>STAY HOME          <br></br> WITH            <br></br>CATHERINE'S</p>
            <button>ORDER HERE</button>
          </div>
        </div>
        <div className={styles['lastIntro']}>
          <div className={styles['friends']}>
            <img src={friends} alt='friends'></img>
            <p>Friends</p>
          </div>
          <div className={styles['coffee']}>
            <img src={coffee} alt='coffee'></img>
            <p>Coffee</p>
          </div>
        </div>
      </div>
    );
  }
}
