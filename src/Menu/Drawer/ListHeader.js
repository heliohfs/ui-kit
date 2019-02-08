import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import classNames from 'classnames';

import SearchBar from 'material-ui-search-bar';
import { grey } from '@material-ui/core/colors';
import { DefaultProductTypography } from '../DefaultProductTypography';

const useStyles = makeStyles(({ spacing }) => ({
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  noPadding: {
    padding: 0,
  },
  searchBar: {
    flexGrow: '1',
    paddingRight: spacing.unit,
    boxShadow: 'none',
    width: `calc(100% - ${spacing.unit}px + 6px )`,
    borderRadius: 0,
    backgroundColor: grey[100],
    paddingTop: spacing.unit / 2,
    paddingBottom: spacing.unit / 2,
  },
}));

export const ListHeader = ({ search, setSearch }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <ListItem alignItems="flex-start" divider className={classes.flexColumn}>
        <DefaultProductTypography title="Portal" subtitle="BAMAQ" />
        <ListItemText
          className={classes.noPadding}
          secondary="Gestão de frotas"
        />
      </ListItem>
      <ListItem
        alignItems="flex-start"
        divider
        className={classNames(classes.flexColumn, classes.noPadding)}
      >
        <SearchBar
          placeholder="O que você busca?"
          className={classes.searchBar}
          value={search}
          onChange={setSearch}
          onCancelSearch={() => setSearch('')}
        />
      </ListItem>
    </Fragment>
  );
};
