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
          <Animator animation={batch(Fade(), Move())}>
            <span>
              <div className='container-stories'>
                <Story1 />
              </div>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Move())}>
            <span>
              <div className='container-stories'>
                <Story2 />
              </div>
            </span>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={batch(Fade(), Move())}>
            <span>
              <div className='container-stories'>
                <Story3 />
              </div>
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    );
  }
}
