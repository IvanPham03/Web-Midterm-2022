import logo from '../../../assets/images/logo.svg'
import user from '../../../assets/fonts/user.png'
import styles from './header.module.css';
import React, { Component } from 'react'
import Routes from "../../../router/routes";
import { Link } from 'react-router-dom';

export default class header extends Component {
    render() {
        return (
            <div className={styles["container"]}>
                <div className={styles["header"]} >
                    <div className={styles['logo']}>
                        <Link to='/' >
                            <img src={logo} alt='logo' className={styles['imagelogo']}></img>
                        </Link>
                    </div>
                    <div className={styles['navbar']}>
                        <Routes />
                    </div>
                    <div className={styles['user']}>
                        <img src={user} alt='user' className={styles['image-user']}></img>
                    </div>
                </div>
            </div>
        )
    }
}
