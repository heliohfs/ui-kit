import { makeStyles } from '@material-ui/styles';
import React, { useState } from 'react';
import List from '@material-ui/core/List';
import { MenuItem } from './MenuItem';

const useStyles = makeStyles(theme => ({
  parentList: {
    width: theme.spacing.unit * 30,
  },
}));
export const MenuList = ({ closeDrawer, items, depth = 0 }) => {
  const [open, setOpen] = useState({});
  const classes = useStyles();
  const handleClick = key =>
    setOpen(prevOpen => ({
      ...prevOpen,
      [key]: !prevOpen[key],
    }));

  return (
    <List className={classes.parentList} disablePadding>
      {items.map(({ title, children }) => (
        <MenuItem
          depth={depth}
          key={title}
          title={title}
          open={open[title]}
          handleClick={a => {
            if (children) {
              handleClick(a);
            }
          }}
        >
          {children ? (
            <MenuList
              closeDrawer={closeDrawer}
              depth={depth + 1}
              items={children}
            />
          ) : null}
        </MenuItem>
      ))}
    </List>
  );
};