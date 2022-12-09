import React, { Component } from 'react';
import styles from './inspiration.module.css';
import TextSlider from './TextSlider/TextSlider';
import OurCafe from './OurCafe/OurCafe';

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
export default class inspiration extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollPage>
          <div className={styles['imageIntro']}>
            <Animator animation={batch(Fade(), Move(), MoveOut(0, -200))}>
              <br></br>
              <div>
                <p>STAY HOME          <br></br> WITH            <br></br>CATHERINE'S</p>
                <button>ORDER HERE</button>
              </div>
            </Animator>
          </div>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -100))}>
            <span><div className={styles['intro']}>
              <p>Catherine's <br></br> Coffee house</p>
              <p>A community house<br></br> Supporting health & education</p>
            </div></span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Move(), Fade())}>
            <span><OurCafe /></span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Move(), MoveOut(0, -200))}>
            <span><TextSlider /></span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}
