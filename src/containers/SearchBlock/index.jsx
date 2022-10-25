import { bool, func, arrayOf, string } from 'prop-types';
import { Search, Tags, Loader, ErrorBoundary } from 'components';
import InnerHTML from 'dangerously-set-html-content';
import classes from './SearchBlock.module.scss';

function SearchBlock({ onChangeFilter, value, isFetching, error, tags }) {
  return (
    <ErrorBoundary>
      <div className={classes.searchWrappper}>
        <Search onChangeFilter={onChangeFilter} />
        {tags && Array.isArray(tags) && !!tags?.length && <Tags tags={tags} value={value} onChange={onChangeFilter} />}
        {tags && typeof tags === 'string' && <InnerHTML html={tags} />}
        {!tags && isFetching && <Loader />}
        {!tags && error && 'Something wrong...'}
      </div>
    </ErrorBoundary>
  );
}
SearchBlock.defaultProps = {
  isFetching: false,
  error: null,
  tags: null,
  value: ''
};
SearchBlock.propTypes = {
  onChangeFilter: func.isRequired,
  isFetching: bool,
  error: bool,
  tags: arrayOf(string),
  value: string
};

export default SearchBlock;
