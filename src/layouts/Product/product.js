import React, { Component } from 'react'
import styles from './product.module.css';
import item1 from '../../assets/images/item1.svg'
// import user from '../../assets/fonts/user.png'
import item2 from '../../assets/images/item2.svg'
import item3 from '../../assets/images/item3.svg'


export default class product extends Component {
  render() {
    return (
      <div className={styles["product"]}>
        <section>
          <div className={styles["cards"]}>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item1}/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item2}/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item3}/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item1}/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item2}/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item3}/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item1}/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item2}/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item3}/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
