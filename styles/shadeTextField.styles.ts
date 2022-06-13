import styles from './shadeInputBase.styles';

export const shadeInputBaseStyles = (theme: any) => {
  return {
    ...styles(theme),
    formControl: {
      'label + &': {
        marginTop: 24,
      },
    },
  };
};

export const shadeInputLabelStyles = ({ palette }: { palette: any }) => ({
  root: {
    // color: palette.text.primary,
    '&$focused:not($error)': {
      color: palette.text.primary,
    },
  },
  error: {},
  focused: {},
  shrink: {
    transform: 'translate(0, 1.5px) scale(0.8)',
    letterSpacing: 1,
  },
});