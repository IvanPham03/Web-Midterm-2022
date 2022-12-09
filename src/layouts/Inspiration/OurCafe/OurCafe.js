import React, { Component } from 'react'
import caycafe1 from '../../../assets/images/beancafe.jpg';
import caycafe2 from '../../../assets/images/anhmoi.jpg';
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
                        <span>
                            <p>A café is a type of restaurant which typically serves coffee and tea, in addition to light refreshments such as baked goods or snacks.</p>
                        </span>
                    </div>
                </div>
            </>
        )
    }
}
