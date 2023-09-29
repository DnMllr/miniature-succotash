import { style } from '@vanilla-extract/css';

export const board = style({
    display: 'flex',
    flexDirection: 'column',
    padding: 7,
    gap: 17,
});

export const row = style({
    display: 'flex',
    gap: 11,
});

export const group = style({
    display: 'flex',
    gap: 5,
});

export const rowGroup = style({
    display: 'flex',
    flexDirection: 'column',
    gap: 9,
});
