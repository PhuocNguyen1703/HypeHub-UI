import * as request from '~/utils/request';

export const search = async (q, ) => {
  try {
      const res = await request.GET('users/search', {
          params: {
              q: debounced,
              type: 'less',
          },
      });
  } catch (error) {
  }
};