import { useRef } from 'react';
import { func } from 'prop-types';
import classes from './InputField.module.scss';
import Icon from './icon';

function InputField({ onChange, onFocus }) {
  const ref = useRef();
  const onInputChange = () => {
    onChange(ref.current?.value || 'all');
  };
  const onInputFocus = () => {
    onFocus();
    onInputChange();
  };
  return (
    <div className={classes.searchWrapper}>
      <Icon />
      <input
        type="text"
        ref={ref}
        onChange={onInputChange}
        onFocus={onInputFocus}
        className={classes.searchInput}
        placeholder="Search"
      />
    </div>

  );
}

InputField.propTypes = {
  onChange: func.isRequired,
  onFocus: func.isRequired
};

export default InputField;
