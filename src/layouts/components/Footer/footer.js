import React, { Component } from 'react'
import mess from '../../../assets/images/mess.svg'
import face from '../../../assets/images/face.svg'
import ins from '../../../assets/images/ins.svg'
import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'

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
        <div><p>
          This website is owned and operated by M Prince Photography. All content included on this website, such as photographs, videos, illustrations, images, code, and text (referred collectively as “Content”) is owned by CATHERINE’S.com, M Prince Photography, or third parties. All Content is protected by U.S., Canadian and international copyright laws.
        </p></div>
        <div className={styles['line']}></div>
        <p className={styles['text']}>© 2022 CATHERINE’S COFFE HOUSE</p>
      </div>
    )
  }
}
