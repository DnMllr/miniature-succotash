import { style } from '@vanilla-extract/css';

export const app = style({
  width: '100%',
  height: '100%',
  border: '1px solid green',
  padding: 32,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const boardWrapper = style({});

export const output = style({
  padding: 20,
});
