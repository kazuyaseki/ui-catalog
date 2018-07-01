import React from 'react';
import './Swipable.css';

export default class Swipable extends React.Component {
  static Main = ({ children }) => <div className="main">{children}</div>;

  startPos = 0;

  state = {
    containerWidth: window.innerWidth
  };

  componentDidMount() {
    this.setState({
      containerWidth: window.innerWidth + this.hiddenElements.clientWidth
    });
  }

  handleTouchStart = event => {
    this.startPos = this.elem.getBoundingClientRect().x;
  };

  handleTouchEnd = event => {
    const endPos = this.elem.getBoundingClientRect().x;
    const toLeft = endPos > this.startPos;

    if (toLeft) {
      this.wrapper.scrollTo(0, 0);
    } else {
      this.wrapper.scrollTo(this.hiddenElements.clientWidth, 0);
    }

    // if (!toLeft) {
    //   if (endPos < 0 && endPos > -64) {
    //     this.wrapper.scrollTo(72, 0);
    //   } else if (endPos <= -64) {
    //     this.wrapper.scrollTo(136, 0);
    //   }
    // } else {
    //   if (endPos < 0 && endPos > -64) {
    //     this.wrapper.scrollTo(0, 0);
    //   } else if (endPos <= -64) {
    //     this.wrapper.scrollTo(72, 0);
    //   }
    // }
  };

  render() {
    return (
      <div ref={elem => (this.wrapper = elem)} className="wrapper">
        <div
          className="content"
          style={{ width: `${this.state.containerWidth}px` }}
          ref={elem => (this.elem = elem)}
          onTouchStart={event => this.handleTouchStart(event)}
          onTouchEnd={event => this.handleTouchEnd(event)}
        >
          <div className="main">{this.props.mainText}</div>
          <div
            className="hiddenElements"
            ref={elem => (this.hiddenElements = elem)}
          >
            {this.props.rightContent.map(data => (
              <button
                className="button"
                onClick={() => data.onClick(this.props.id)}
              >
                {data.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
