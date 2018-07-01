import React from 'react';
import './Swipable.css';

export default class Swipable extends React.Component {
  startPos = 0;

  handleTouchStart = event => {
    this.startPos = this.elem.getBoundingClientRect().x;
  };

  handleTouchMove = event => {
    //console.log(event.target);
  };

  handleTouchEnd = event => {
    const endPos = this.elem.getBoundingClientRect().x;
    const toLeft = endPos > this.startPos;
    console.log(
      'ended at: ',
      endPos,
      ', direction:',
      toLeft ? 'left' : 'right'
    );

    if (!toLeft) {
      if (endPos < 0 && endPos > -64) {
        this.wrapper.scrollTo(72, 0);
      } else if (endPos <= -64) {
        this.wrapper.scrollTo(136, 0);
      }
    } else {
      if (endPos < 0 && endPos > -64) {
        this.wrapper.scrollTo(0, 0);
      } else if (endPos <= -64) {
        this.wrapper.scrollTo(72, 0);
      }
    }

    console.log(this.wrapper.scrollLeft);

    // this.wrapper.scrollTo(20, 0);

    //this.elem.scrollLeft = 0;
  };

  render() {
    return (
      <div ref={elem => (this.wrapper = elem)} className="wrapper">
        <div
          className="content"
          ref={elem => (this.elem = elem)}
          onTouchStart={event => this.handleTouchStart(event)}
          onTouchMove={event => this.handleTouchMove(event)}
          onTouchEnd={event => this.handleTouchEnd(event)}
        >
          <div className="main" ref={elem => (this.main = elem)}>
            ぼくドラえもん
          </div>
          <div className="option1" ref={elem => (this.option1 = elem)}>
            確認
          </div>
          <div className="option2">削除</div>
        </div>
      </div>
    );
  }
}
