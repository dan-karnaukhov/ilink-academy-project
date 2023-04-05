import classnames from 'classnames'
import PropTypes from 'prop-types'

import './slide-buttons.scss'

const SlidePrevButton = ({ onClick, className }) => {
    return (
        <div className={classnames('slick-prev-button', className)} onClick={onClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.25 12.2744L19.25 12.2744" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

SlidePrevButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
}

SlidePrevButton.defaultProps = {
    onClick: () => {},
    className: ''
}

export default SlidePrevButton