import { makeStyles } from "@mui/styles";
import {
  shadeInputBaseStyles,
  shadeInputLabelStyles,
} from './shadeTextField.styles';

const shadeTextFieldStylesHook = {
  useInputBase: makeStyles(shadeInputBaseStyles, {
    name: 'ShadeTextField',
  }),
  useInputLabel: makeStyles(shadeInputLabelStyles, {
    name: 'ShadeTextField',
  }),
};

export {
  shadeInputBaseStyles,
  shadeInputLabelStyles,
  shadeTextFieldStylesHook,
};