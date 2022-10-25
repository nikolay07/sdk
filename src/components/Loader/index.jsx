import ReactLoading from 'react-loading';
import { string } from 'prop-types';
import cn from 'classnames';
import classes from './Loader.module.scss';

function Loader({
  type = 'spinningBubbles'
}) {
  return (
    <div className={cn(classes.loderWrap)}>
      <div
        className={cn(classes.loader)}
      >
        <ReactLoading type={type} color="#8C85A8" />
      </div>
    </div>
  );
}

Loader.defaultProps = {
  type: 'spinningBubbles'
};

Loader.propTypes = {
  type: string
};
export default Loader;
