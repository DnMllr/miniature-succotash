import { style } from '@vanilla-extract/css';

export const wrapper = style({
    width: 37,
    height: 37,
    position: 'relative',
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'stretch',
});

export const input = style({
    width: '100%',
    height: '100%',
    fontSize: 32,
    textAlign: 'center'
});
