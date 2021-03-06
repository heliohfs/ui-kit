import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

export function Option({
  innerRef,
  isFocused,
  innerProps,
  children,
  data,
  isSelected,
  selectProps,
}) {
  const style = {
    fontWeight: isSelected ? 500 : 400,
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    minHeight: 50,
  };

  return (
    <MenuItem
      buttonRef={innerRef}
      selected={!selectProps.isMulti && isSelected}
      component="div"
      style={style}
      disabled={data.disabled || false}
      {...innerProps}
    >
      {selectProps.isMulti && (
        <Checkbox checked={isSelected} value="checkedA" />
      )}
      <div className={selectProps.childrenClasses.body1Option}>{children}</div>
    </MenuItem>
  );
}
