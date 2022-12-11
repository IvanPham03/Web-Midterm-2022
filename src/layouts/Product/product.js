import React, { Component } from 'react'
import styles from './product.module.css';
import item1 from '../../assets/images/2560px-Agua_Panela_con_Queso_Fresco_at_La_Puerta_Falsa_(5617496209).jpg'
// import item2 from '../../assets/images/item2.svg'
// import item3 from '../../assets/images/item3.svg'
// import item4 from '../../assets/images/item4.jpg'
// import item5 from '../../assets/images/item5.jpg'
// import item6 from '../../assets/images/item6.jpg'
// import item7 from '../../assets/images/item7.jpg'
// import item8 from '../../assets/images/item8.jpg'
// import item9 from '../../assets/images/item9.jpg'
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default class product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0, items: [],
      DataisLoaded: false
    };
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  componentDidMount() {
    fetch(
      "https://api.sampleapis.com/coffee/hot")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  buttonClicked(event) {
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;
    return (

      <div className={styles["product"]}>
        <section>
          <h1 className={styles['heading']}> our <span>products</span> </h1>
          <div className={styles["cards"]}>
            {
              items.map((item) => (
                <div className={styles["card"]} key={item.id}>
                  <div className={styles["img-box"]}>
                    <img src={item.id === 20? item1:item.image} alt='item' />
                  </div>
                  <div className={styles["card-content"]}>
                    <h3 className={styles["card-heading"]}>{item.title}</h3>
                    <p className={styles["card-text"]}>{item.description}</p>
                    <button onClick={this.buttonClicked} className={styles['buy']}>ADD</button>
                  </div>
                </div>))}
          </div>
        </section>
        {/* <div className={styles['number']}>{this.state.value}</div> */}
        <div className={styles['cast']}>
          <div className={styles['fixed']}>
            <div className={styles['state']}>
              <AiOutlineShoppingCart size={50} color={'white'} />
              <p> No. of items	:	{this.state.value}<p>Sub Total	:{(this.state.value) * 40}$ 	</p></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
