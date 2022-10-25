import { useQuery } from 'react-query';
import api from 'utils/apiClient';

export const getSdkTags = async () => {
  const { data } = await api.get('/api/tags');
  return data;
};
const postSdkList = async (body) => {
  const { data } = await api.post('/api/list', body);
  return data;
};

export const useSdkTags = () => useQuery('tags', () => getSdkTags());

export const useSdkList = data => useQuery(['list', data], () => postSdkList(data));
