import classnames from 'classnames'
import PropTypes from 'prop-types'

import './info-icon.scss'

const InfoIcon = ({ url, className }) => {
    return (
        <a className={classnames('info-icon', className)} href={url} >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.612 2.29175H6.38783C3.87033 2.29175 2.29199 4.07425 2.29199 6.59675V13.4034C2.29199 15.9259 3.86283 17.7084 6.38783 17.7084H13.6112C16.137 17.7084 17.7087 15.9259 17.7087 13.4034V6.59675C17.7087 4.07425 16.137 2.29175 13.612 2.29175Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.99577 13.3334V10.0001"  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.9916 6.83689H9.99993" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
    )
}

InfoIcon.propTypes = {
    url: PropTypes.string.isRequired,
    className: PropTypes.string,
}

InfoIcon.defaultProps = {
    className: ''
}

export default InfoIcon