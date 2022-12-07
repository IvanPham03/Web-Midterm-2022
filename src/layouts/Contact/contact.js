import React, { Component } from 'react'
import styles from './contact.module.css';




export default class contact extends Component {
  render() {
    return (
    
      <div className = {styles["contact"]}>
          <h1 className={styles["heading"]}><span>Contact</span> US  </h1>
          <div className={styles["row"]}>
            <div className={styles["column"]}>
              <iframe className={styles["map"]} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1629452077891!5m2!1sen!2sin" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className={styles["column"]}>
              <form >
                  <h3>Get in touch</h3>
                  <div className={styles["inputBox"]}>
                    <span></span>
                    <input type="text" placeholder="name" />
                  </div>
                  <div className={styles["inputBox"]}>
                      <span class="fas fa-envelope"></span>
                      <input type="email" placeholder="email" />
                  </div>
                  <div className={styles["inputBox"]}>
                      <span class="fas fa-phone"></span>
                      <input type="number" placeholder="number" />
                  </div>
                  <div className={styles["inputBox"]}>
                      <span class="fas fa-message"></span>
                      <textarea name="" placeholder="message" ></textarea>
                  </div>
                  <input type="submit" value="contact now" className={styles["btn"]}></input>
              </form>
            </div>
            </div>
      </div>

    )
  }
}
