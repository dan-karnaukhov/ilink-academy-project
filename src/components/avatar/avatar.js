import classnames from 'classnames'
import propTypes from 'prop-types'
import defaultAvatar from './default-avatar.svg'

import './avatar.scss'

const Avatar = ({ avatar, className }) => {
    return (
        <div className={classnames('avatar', className)}>
            <img className='avatar__img' src={avatar ? avatar : defaultAvatar} alt='Аватар'/>
        </div>
    )
}

Avatar.propTypes = {
    avatar: propTypes.string,
    className: propTypes.string
}

Avatar.defaultProps = {
    avatar: defaultAvatar,
    className: ''
}

export default Avatar