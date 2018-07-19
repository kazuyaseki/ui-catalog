import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const props = {
  visible: {
    opacity: 1,
    originY: 0,
    scaleY: 1
  },
  hidden: {
    opacity: 0,
    scaleY: 0
  }
};

const Dropdown = posed.ul(props);
const StyledDropdown = styled(Dropdown)`
  display: 'block';
  position: absolute;
  top: 20px;
  width: 250px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.24);
  padding-left: 0;
`;

const Item = styled.li`
  list-style: none;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 14px;
  color: #666;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export default class Example extends React.Component {
  state = { show: false };

  toggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggle}>押す</button>
        <StyledDropdown pose={this.state.show ? 'visible' : 'hidden'}>
          <Item>エビデイ</Item>
          <Item>エビナイ</Item>
          <Item>トラックメイカー</Item>
        </StyledDropdown>
      </div>
    );
  }
}
