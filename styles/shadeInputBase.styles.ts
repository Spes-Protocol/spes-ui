// credit: https://github.com/siriwatknp/mui-treasury/blob/1d50fbdfbfdcd23f55ff6a7d57c4fdf91140fe52/packages/mui-styles/src/inputBase/shade/shadeInputBase.styles.js

import { yellow } from '@mui/material/colors';

const ShadeInputBase = ({ palette }: { palette: any }) => {
  const color = yellow[700];
  const error = '#ff6b81';
  return {
    root: {
      backgroundColor: palette.grey[200],
      transition: '0.3s',
    },
    focused: {
      backgroundColor: palette.common.white,
      boxShadow: `0 0 0 2px ${color}`,
    },
    error: {
      backgroundColor: '#fff0f0',
      '&$focused': {
        boxShadow: `0 0 0 2px ${error}`,
      },
    },
    disabled: {
      backgroundColor: palette.grey[50],
    },
    input: {
      padding: '1rem',
    },
  };
};

export default ShadeInputBase;