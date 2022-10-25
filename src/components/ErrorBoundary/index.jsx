import React from 'react';
import { element, string, bool, shape, oneOfType, arrayOf } from 'prop-types';
import cn from 'classnames';
import classes from './ErrorBoundary.module.scss';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error);
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('componentDidCatch', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { style, children = null } = this.props;
    if (hasError) {
      return (
        <div className={cn(classes.boundaryErrorWrap)} style={style}>
          <div className={cn(classes.boundaryError)}>
            <div className={classes.main}>
              <div className={classes.main_text}>Something went wrong...</div>
            </div>
          </div>
        </div>
      );
    }

    return children;
  }
}
ErrorBoundary.defaultProps = {
  children: false,
  style: null
};
ErrorBoundary.propTypes = {
  children: oneOfType([bool, string, element, arrayOf(oneOfType([bool, element]))]),
  style: oneOfType([bool, shape({})])
};
