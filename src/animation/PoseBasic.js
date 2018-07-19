import React from 'react';
import posed, { spring } from 'react-pose';
import './PosePlay.css';

const props = {
  draggable: 'x',
  dragBounds: { left: -100, right: 100 },

  visible: {
    opacity: 1,
    x: 0
  },
  hidden: {
    opacity: 0,
    x: '100%'
  }
};

const Box = posed.div(props);

export default class Example extends React.Component {
  state = { isVisible: true };

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({ isVisible: !this.state.isVisible });
    // }, 1000);
  }

  render() {
    return (
      <Box
        className="box"
        pose={this.state.isVisible ? 'visible' : 'hidden'}
        offset={1000}
      />
    );
  }
}

const sidebarProps = {
  open: {
    x: '0%',
    delayChildren: 300,
    staggerChildren: 60
  },
  closed: {
    delay: 500,
    staggerChildren: 20,
    x: '-100%'
  }
};

const itemProps = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 20 }
};

const SidePanel = posed.ul(sidebarProps);
const Item = posed.li(itemProps);

export class PoseList extends React.Component {
  state = { isOpen: false };

  componentDidMount() {
    setTimeout(this.toggle, 1000);
  }

  toggle = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (
      <div>
        <button onClick={this.toggle}>押す</button>
        <SidePanel
          onClick={this.toggle}
          className="sidebar"
          pose={this.state.isOpen ? 'open' : 'closed'}
        >
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
          <Item className="item" />
        </SidePanel>]
      </div>
    );
  }
}
