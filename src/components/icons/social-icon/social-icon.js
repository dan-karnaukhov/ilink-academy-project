import propTypes from 'prop-types'
import classnames from 'classnames'
import socialIcons from './social-icons.svg'

import './social-icon.scss'

const SocialIcon = ({ type, url, className }) => {
    return (
        <a className={classnames('social-icon', className)} href={url} target='_blank' >
            <svg><use xlinkHref={`${socialIcons}#${type}`} /></svg>
        </a>
    )
}

SocialIcon.propTypes = {
    url: propTypes.string.isRequired,
    type: propTypes.string.isRequired,
    className: propTypes.string
}

SocialIcon.defaultProps = {
    className: ''
}

export default SocialIcon