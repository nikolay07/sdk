import { useSdkList } from 'api/request';
import { string } from 'prop-types';
import { NoSearchData, Loader, ErrorBoundary } from 'components';
import InnerHTML from 'dangerously-set-html-content';
import classes from './ResultsList.module.scss';

function ResultsList({ value }) {
  const { data, error, isFetching } = useSdkList({ filter: value });

  return (
    <ErrorBoundary>
      <div className={classes.resultWrapper}>
        {data && Array.isArray(data) && !!data?.length && (
        <ul className={classes.resultList}>
          { data.map((item, ind) => (
            <li key={`${item.id}-${ind}`} className={classes.resultList_item}>
              <div className={classes.resultList_title}>{item.title || item.id}</div>
              <div className={classes.resultList_tags}>
                {!!item?.tags?.length
                && item.tags.map((tag, i) => <span key={`tag-${ind}-${i}`}>{ (i ? ', ' : '') + tag }</span>)}
              </div>
            </li>
          ))}
        </ul>
        )}
        {data && typeof data === 'string' && <InnerHTML html={data} />}
        {!data && isFetching && <Loader />}
        {data && !data?.length && !isFetching && <NoSearchData />}
        {!data && error && 'Something wrong...'}
      </div>
    </ErrorBoundary>
  );
}

ResultsList.propTypes = {
  value: string.isRequired
};

export default ResultsList;
