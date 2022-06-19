import PropTypes from 'prop-types'

import * as httpRequest from '~/utils/httpRequest';

search.propTypes = {
    q: PropTypes.string.isRequired,
    type: PropTypes.string
}

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
