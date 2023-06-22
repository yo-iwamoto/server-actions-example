import { style } from '@vanilla-extract/css';

export const styles = {
  form: style({
    display: 'grid',
    gap: 8,
  }),
  input: style({
    padding: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    borderRadius: 4,
  }),
};
