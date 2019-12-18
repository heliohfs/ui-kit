import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from '@mdi/react';

import { action } from '@storybook/addon-actions';
import FileCopyRounded from '@material-ui/icons/FileCopyRounded';

import DeleteIcon from '@material-ui/icons/Delete';
import { mdiFolderPlus } from '@mdi/js';
import { Button } from './Button';
import { GROUPS } from '../../.storybook/hierarchySeparators';
import { IconButton } from './IconButton';
import { FloatingButton } from './FloatingButton';
import { DivButton } from './DivButton';
import { DivFlex } from '../withFlexCenter';

storiesOf(`${GROUPS.COMPONENTS}|Button`, module)
  .addDecorator(story => <DivFlex>{story()}</DivFlex>)
  .add('button', () => (
    <Button onClick={action('onClick')}>Smart Button</Button>
  ))
  .add('default button', () => (
    <Button customVariant="default" onClick={action('onClick')}>
      Smart Button
    </Button>
  ))
  .add('success button', () => (
    <Button customVariant="success" onClick={action('onClick')} submitting>
      Smart Button
    </Button>
  ))
  .add('warning button', () => (
    <Button customVariant="warning" onClick={action('onClick')}>
      Smart Button
    </Button>
  ))
  .add('error button', () => (
    <Button customVariant="error" onClick={action('onClick')}>
      Smart Button
    </Button>
  ))
  .add('primary button', () => (
    <Button color="primary" onClick={action('onClick')}>
      Smart Button
    </Button>
  ))
  .add('primary button contained', () => (
    <Button color="primary" variant="contained">
      <Icon path={mdiFolderPlus} size={1} color="white" />
      Nova Pasta
    </Button>
  ))
  .add('secondary button', () => (
    <Button color="secondary" onClick={action('onClick')}>
      Smart Button
    </Button>
  ))
  .add('icon button', () => (
    <IconButton onClick={action('onClick')}>
      <DeleteIcon />
    </IconButton>
  ))
  .add('floating button', () => (
    <FloatingButton onClick={action('onClick')}>
      <DeleteIcon />
    </FloatingButton>
  ))
  .add('div button', () => (
    <div
      style={{
        width: '100vw',
        height: '160px',
        backgroundColor: '#e0e0e0',
      }}
    >
      <DivButton
        onClick={action('onClick')}
        infoText="COMUNICADOS"
        notifyNumber={0}
      >
        <FileCopyRounded fontSize="large" />
      </DivButton>
    </div>
  ));
