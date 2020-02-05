import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions/CardActions';
import React from 'react';
import PropTypes from 'prop-types';
import { useCardUiKitStyles } from './customStyles';

export const UiKitCard = ({
  key,
  style,
  styleCard,
  onClick,
  title,
  subtitle,
  content,
  subContent,
  actions,
  onLoad,
}) => {
  const classes = useCardUiKitStyles();

  return (
    <div key={key} style={style}>
      <Card className={classes.card} style={styleCard} onLoad={onLoad}>
        <CardContent className={classes.cardContent} onClick={onClick}>
          <Grid container classes={{ root: classes.gridContainer }}>
            <Grid item xs={12} classes={{ root: classes.grid }}>
              <div className={classes.gridFlex}>
                <Typography classes={{ root: classes.title }}>
                  {title.name}
                </Typography>
                {title.components}
              </div>
            </Grid>
            <Grid item xs={12} classes={{ root: classes.grid }}>
              <Typography
                classes={{ root: classes.subTitle }}
                style={{ color: styleCard.customSubtitleColor }}
              >
                {subtitle}
              </Typography>
            </Grid>
            <Grid item xs={12} classes={{ root: classes.grid }}>
              <Typography
                noWrap
                variant="caption"
                classes={{
                  root: classes.content,
                }}
              >
                {content}
              </Typography>
            </Grid>
            <Grid item xs={12} classes={{ root: classes.grid }}>
              {subContent}
            </Grid>
          </Grid>
        </CardContent>
        <CardActions
          classes={{
            root: classes.actions,
          }}
        >
          {actions}
        </CardActions>
      </Card>
    </div>
  );
};

UiKitCard.propTypes = {
  /** Key identifier */
  key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Style for root div */
  style: PropTypes.object,
  /** Style for card */
  styleCard: PropTypes.shape({
    customSubtitleColor: PropTypes.string,
    border: PropTypes.string,
    boxShadow: PropTypes.string,
    borderLeft: PropTypes.string,
  }),
  /** Card onClick event handler */
  onClick: PropTypes.func,
  /** Card title and components */
  title: PropTypes.shape({
    name: PropTypes.string,
    components: PropTypes.element,
  }),
  /** Card subtitle */
  subtitle: PropTypes.string,
  /** Card content */
  content: PropTypes.string,
  /** Card extra content */
  subContent: PropTypes.string,
  /** Components to be rendered as card actions */
  actions: PropTypes.element,
  /** Function to be rendered on load */
  onLoad: PropTypes.func,
};

UiKitCard.defaultProps = {
  styleCard: {
    customSubtitleColor: '',
  },
};