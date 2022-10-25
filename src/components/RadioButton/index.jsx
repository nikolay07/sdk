import { string } from 'prop-types';
import classes from './RadioButton.module.scss';

function RadioButton({ id, tag, value }) {
  return (
    <input
      className={classes.checkbox}
      type="radio"
      id={id}
      name="tag"
      defaultChecked={tag === value}
    />
  );
}

RadioButton.propTypes = {
  id: string.isRequired,
  tag: string,
  value: string
};

RadioButton.defaultProps = {
  tag: '',
  value: ''
};

export default RadioButton;
