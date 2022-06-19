import * as request from '~/utils/request';

export const search = async (q, type = 'less') => {
  try {
      const res = await request.GET('users/search', {
          params: {
              q,
              type: 'less',
          },
      });
  } catch (error) {
  }
};