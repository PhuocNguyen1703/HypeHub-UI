import PropTypes from 'prop-types';

import * as httpRequest from '~/utils/httpRequest';

export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.GET('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
search.propTypes = {
    q: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
};
