import * as request from '~/utils/request';

export const search = async () => {
  try {
      const res = await request.GET('users/search', {
          params: {
              q: debounced,
              type: 'less',
          },
      });
      setSearchResult(res.data);
      setLoading(false);
  } catch (error) {
  }
};