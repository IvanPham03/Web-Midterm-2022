import React, { Component } from 'react';
import Story1 from './story1/story';
import Story2 from './story2/story';
import Story3 from './story3/story';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
export default class stories extends Component {
  render() {
    return (
      <ScrollContainer>
        <ScrollPage>
          <div className='temp'></div>
          <span>
            <div className='container-stories'>
              <Animator animation={batch(Fade(), Move())}>
                <Story1 />
              </Animator>
            </div>
          </span>
        </ScrollPage>
        <ScrollPage>
          <span>
            <div className='container-stories'>
              <Animator animation={batch(Fade(), Move())}>
                <Story2 />
              </Animator>
            </div>
          </span>
        </ScrollPage>
        <ScrollPage>
          <span>
            <Animator animation={batch(Fade(), Move())}>
              <div className='container-stories'>
                <Story3 />
              </div>
            </Animator>
          </span>
        </ScrollPage>
        <ScrollPage>
          <span>
            <div className='container-stories'>
              <Animator animation={batch(Fade(), Move())}>
                <Story1 />
              </Animator>
            </div>
          </span>
        </ScrollPage>
        <ScrollPage>
          <span>
            <div className='container-stories'>
              <Animator animation={batch(Fade(), Move())}>
                <Story2 />
              </Animator>
            </div>
          </span>
        </ScrollPage>
        <ScrollPage>
          <span>
            <Animator animation={batch(Fade(), Move())}>
              <div className='container-stories'>
                <Story3 />
              </div>
            </Animator>
          </span>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}