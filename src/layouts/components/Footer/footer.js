import React, { Component } from 'react'
import mess from '../../../assets/images/mess.svg'
import face from '../../../assets/images/face.svg'
import ins from '../../../assets/images/ins.svg'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'
export default class footer extends Component {
  render() {
    return (
      <div className={styles['footer']}>
        <p className={styles['icon']}>
          <Link to='/'>
            <img src={mess} alt='mess'></img>
          </Link>
          <Link to='/'>
            <img src={face} alt='face'></img>
          </Link>
          <Link to='/'>
            <img src={ins} alt='ins'></img>
          </Link>
        </p>
        <p className={styles['text']}>© 2022 CATHERINE’S COFFE HOUSE</p>
      </div>
    )
  }
}
