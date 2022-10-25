import { string, arrayOf, func } from 'prop-types';
import RadioButton from 'components/RadioButton';
import classes from './Tags.module.scss';

function Tags({ tags, value, onChange }) {
  function onHandleClick(val) {
    onChange(val);
    document.getElementById(val).checked = true;
  }
  function capitalizeFirstLetter(tagValue) {
    return tagValue.charAt(0).toUpperCase() + tagValue.slice(1);
  }

  return (
    <>
      {tags?.map(tag => (
        <label
          className={classes.label}
          htmlFor={`radio-${tag}`}
          key={tag}
          onClick={() => onHandleClick(tag)}
          onKeyDown={() => onHandleClick(tag)}
        >
          <RadioButton
            id={tag}
            tag={tag}
            value={value}
          />
          {capitalizeFirstLetter(tag)}
        </label>
      ))}
    </>
  );
}
Tags.defaultProps = {
  value: ''
};
Tags.propTypes = {
  tags: arrayOf(string).isRequired,
  onChange: func.isRequired,
  value: string
};

export default Tags;
