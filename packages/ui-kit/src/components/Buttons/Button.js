import { Button as MaterialButton, CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { buttonStyle, buttonClassNameDefinition } from './styles';

const useStyles = makeStyles(buttonStyle);

export const Button = React.forwardRef(
  (
    {
      submitting,
      fullWidth,
      disabled,
      customVariant,
      margin,
      type,
      size = 'medium',
      children,
      className,
      variant,
      disableElevation = true,
      ...props
    },
    ref
  ) => {
    const classes = useStyles();
    const classdef = buttonClassNameDefinition(classes, margin, customVariant);

    return (
      <MaterialButton
        type={type}
        classes={{ label: classes.buttonSpan }}
        className={clsx(className, classdef)}
        fullWidth={fullWidth}
        disabled={disabled || submitting}
        size={size}
        ref={ref}
        variant={customVariant ? 'contained' : variant}
        disableElevation={disableElevation}
        {...props}
      >
        {submitting && (
          <CircularProgress data-testid="button-loading" size={20} />
        )}
        {children}
      </MaterialButton>
    );
  }
);

Button.defaultProps = {
  submitting: false,
  margin: false,
  fullWidth: false,
  customVariant: undefined,
  disableElevation: true,
  type: 'submit',
  size: 'medium',
};

Button.propTypes = {
  /** Predefined custom button */
  customVariant: PropTypes.oneOf(['default', 'success', 'warning', 'error']),
  /** Button disabled during form submission */
  submitting: PropTypes.bool,
  /** Button elevation disabled */
  disableElevation: PropTypes.bool,
  /** Button fill div/screen width */
  fullWidth: PropTypes.bool,
  /** Button CSS margin */
  margin: PropTypes.bool,
  /** Button html type */
  type: PropTypes.string,
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Button;
