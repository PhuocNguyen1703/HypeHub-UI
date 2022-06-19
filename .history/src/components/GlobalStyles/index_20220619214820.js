import './GlobalStyles.scss';
import PropTypes from 'prop-types'

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropType
}

export default GlobalStyles;
