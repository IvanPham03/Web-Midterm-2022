import React, { Component } from 'react';
import styles from './inspiration.module.css';
import TextSlider from './TextSlider.js'
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
          <TextSlider />
      </div>
    );
  }
}
