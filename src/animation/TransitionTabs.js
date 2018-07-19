import React from 'react';
import styled from 'styled-components';

const CONTENT_WIDTH = 320;

export default class TransitionTabs extends React.Component {
  state = { selected: 0 };
  startPos = 0;
  contents = [];

  componentDidUpdate(_, prevState) {
    if (prevState.selected === this.state.selected) {
      return;
    }

    this.wrapper.scrollTo(this.state.selected * CONTENT_WIDTH, 0);
  }

  select(index) {
    this.setState({ selected: index });
  }

  handleTouchStart = () => {
    this.startPos = this.slider.getBoundingClientRect().x;
  };

  handleTouchEnd = () => {
    const endPos = this.slider.getBoundingClientRect().x;
    const toLeft = endPos > this.startPos;

    this.setState({ selected: toLeft ? 0 : 1 });
  };

  render() {
    return (
      <div>
        <Tabs>
          <Tab
            active={this.state.selected === 0}
            onClick={() => this.select(0)}
          >
            たぶ１
          </Tab>
          <Tab
            active={this.state.selected === 1}
            onClick={() => this.select(1)}
          >
            たぶ２
          </Tab>
        </Tabs>
        <ContentWrapper
          innerRef={wrapper => {
            this.wrapper = wrapper;
          }}
        >
          <Contents
            onTouchStart={event => this.handleTouchStart(event)}
            onTouchEnd={event => this.handleTouchEnd(event)}
            innerRef={content => {
              this.slider = content;
            }}
          >
            <Content
              innerRef={content => {
                this.contents[0] = content;
              }}
            >
              たぶ１
            </Content>
            <Content
              innerRef={content => {
                this.contents[1] = content;
              }}
            >
              タブ２
            </Content>
          </Contents>
        </ContentWrapper>
      </div>
    );
  }
}

const Tabs = styled.ul`
  border-bottom: 2px solid #00b198;
`;

const Tab = styled.li`
  display: inline-block;
  list-style: none;
  width: 50px;
  color: #fff;
  background-color: ${({ active }) => (active ? '#00b198' : '#ddd')};
  padding: 5px 10px;
  border-radius: 8px 8px 0 0;
  margin-right: 5px;
  cursor: pointer;
`;

const ContentWrapper = styled.div`
  scroll-behavior: smooth;
  width: 310px;
  height: 500px;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Contents = styled.ul`
  width: 640px;
  padding-left: 20px;
  overflow: visible;
`;

const Content = styled.li`
  width: 280px;
  height: 400px;
  display: inline-block;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  &:first-child {
    margin-right: 30px;
  }
`;
