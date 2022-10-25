import { func } from 'prop-types';
import { RadioButton, InputField } from 'components';
import classes from './Search.module.scss';

function Search({ onChangeFilter }) {
  const onInputFocus = () => {
    document.getElementById('radio-input').checked = true;
  };
  return (
    <label className={classes.searchLabel} htmlFor="radio-input">
      <RadioButton id="radio-input" />
      <InputField onChange={onChangeFilter} onFocus={onInputFocus} />
    </label>
  );
}

Search.propTypes = {
  onChangeFilter: func.isRequired
};

export default Search;
