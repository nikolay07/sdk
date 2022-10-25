import React from 'react';
import cn from 'classnames';
import classes from './NoSearchData.module.scss';

function NoSearchData() {
  return (
    <div className={cn(classes.nosearch)}>
      <p className={classes.text_nosearch}>
        Not found
      </p>
    </div>
  );
}

export default NoSearchData;
