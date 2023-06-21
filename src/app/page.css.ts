import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const styles = {
  container: style({
    paddingInline: 8,
    paddingTop: 40,
    backgroundColor: vars.color.stone,
    minHeight: '100vh',
  }),
  inner: style({
    maxWidth: 540,
    marginInline: 'auto',
    padding: 20,
    backgroundColor: vars.color.white,
    borderRadius: 12,
    filter:
      'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))',
    display: 'grid',
    gap: 12,
  }),
  heading: style({
    fontWeight: 700,
    fontSize: 20,
  }),
  list: style({
    listStyle: 'disc',
    paddingLeft: 20,
    display: 'grid',
    gap: 8,
  }),
};
