import classnames from 'classnames'
import PropTypes from 'prop-types'

import './slide-buttons.scss'

const SlideNextButton = ({ onClick, className }) => {
    return (
        <div className={classnames('slick-next-button', className)} onClick={onClick}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.75 11.7256L4.75 11.7256" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.7002 5.70124L19.7502 11.7252L13.7002 17.7502" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

SlideNextButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
}

SlideNextButton.defaultProps = {
    onClick: () => {},
    className: ''
}

export default SlideNextButton