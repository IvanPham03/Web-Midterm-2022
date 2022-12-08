import React, { Component } from 'react'
import caycafe1 from '../../../assets/images/cafe.jpg';
import caycafe2 from '../../../assets/images/caycafe.jpeg';
import styles from './OurCafe.module.css'
export default class OurCafe extends Component {
    render() {
        return (
            <>
                <div className={styles['our-coffee']}>
                    <p className={styles['our-coffee-text']}>We Grow & Harvest Every Coffee Grain with Love</p>
                    <div className={styles['our-coffee-1']}>
                        <img src={caycafe1} alt='outr-coffee__img1'></img>
                    </div>
                    <div className={styles['our-coffee-2']}>
                        <img src={caycafe2} alt='outr-coffee__img1'></img>
                    </div>
                </div>
            </>
        )
    }
}
