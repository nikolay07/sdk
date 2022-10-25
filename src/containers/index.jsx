import { useState } from 'react';
import { useSdkTags } from 'api/request';
import SearchBlock from './SearchBlock';
import ResultsList from './ResultsList';
import classes from './Main.module.scss';

export default function MainPage() {
  const [value, setValue] = useState('all');
  const { data, error, isFetching } = useSdkTags();
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.header}>SDKs</h1>
      <div className={classes.container}>
        <SearchBlock onChangeFilter={setValue} value={value} tags={data} isFetching={isFetching} error={error} />
        <ResultsList value={value} />
      </div>
    </div>
  );
}
