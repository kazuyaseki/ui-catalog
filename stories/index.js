import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../src/atoms/Button';
import Swipable from '../src/Addon/Swipable';
import PoseBasic, { PoseList } from '../src/animation/PoseBasic';
import Example from '../src/animation/PosePlay';
import ListAppear from '../src/animation/ListAppear';
import TransitionTabs from '../src/animation/TransitionTabs';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('Swipable', module).add('with text', () => (
  <Swipable
    id={1}
    mainText="メインだよ"
    rightContent={[
      {
        text: '確認',
        theme: '',
        onClick: id => {
          console.log(id + '確認');
        }
      },
      {
        text: '削除',
        theme: '',
        onClick: id => {
          console.log(id + '削除');
        }
      }
    ]}
  />
));

const items = ['hoge', 'fuga', 'hogefuga'];

storiesOf('ListAppear', module).add('default', () => (
  <ListAppear items={items} />
));

storiesOf('Pose Example', module)
  .add('default', () => <Example />)
  .add('ベーシック', () => <PoseBasic />)
  .add('リスト', () => <PoseList />);

storiesOf('Good to Great Animation', module).add('default', () => (
  <TransitionTabs />
));
