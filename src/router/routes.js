import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './routes.module.css'
export default class routes extends Component {
    render() {
        return (

            <>
                <nav className={styles['nav']}>
                    <ul>
                        <li><Link to='/inspiration'>INSPIRATION</Link></li>
                        <li><Link to='/product'>PRODUCT</Link></li>
                        <li><Link to='/stories'>STORIES</Link></li>
                        <li><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}