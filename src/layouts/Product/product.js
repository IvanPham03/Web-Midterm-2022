import React, { Component } from 'react'
import styles from './product.module.css';
import item1 from '../../assets/images/item1.svg'
import item2 from '../../assets/images/item2.svg'
import item3 from '../../assets/images/item3.svg'
import item4 from '../../assets/images/item4.jpg'
import item5 from '../../assets/images/item5.jpg'
import item6 from '../../assets/images/item6.jpg'
import item7 from '../../assets/images/item7.jpg'
import item8 from '../../assets/images/item8.jpg'
import item9 from '../../assets/images/item9.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default class product extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  buttonClicked(event) {
    this.setState({value: this.state.value+1});
  }
  render() {
    return (
      
      <div className={styles["product"]}>
        <section>
          <h1 className={styles['heading']}> our <span>products</span> </h1>
          <div className={styles["cards"]}>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item1} alt='item1'/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
                
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item2} alt='item2'/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item3} alt='item3'/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item4} alt='item4'/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item5} alt='item5'/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item6} alt='item6'/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item7} alt='item7'/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item8} alt='item8'/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
              </div>
            </div>
            <div className={styles["card"]}>
              <div className={styles["img-box"]}>
                  <img src={item9} alt='item9'/>
              </div>
              <div className={styles["card-content"]}>
                <h3 className={styles["card-heading"]}>Dominion Dark Blend</h3>
                <p className={styles["card-text"]}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula.</p>
                <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
              </div>
            </div>
          </div>
        </section>
        {/* <div className={styles['number']}>{this.state.value}</div> */}
        <div className={styles['cast']}>
            <div className={styles['fixed']}>
              <div className={styles['state']}>
              <AiOutlineShoppingCart size={50} color={'white'}/>
                <p> No. of items	:	{this.state.value}<p>Sub Total	:{(this.state.value)*40}$ 	</p></p>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
