import classnames from 'classnames'
import propTypes from 'prop-types'
import Avatar from '../avatar/avatar'

import './profile.scss'

const Profile = ({ avatar, firstName, lastName, className }) => {
    return (
        <div className={classnames('profile', className)}>
            <Avatar avatar={avatar} />
            <span className='profile__name'>
                {firstName}
                <span className='profile__last-name'> {lastName}</span>
            </span>
        </div>
    )
}

Profile.propTypes = {
    avatar: propTypes.string,
    firstName: propTypes.string,
    lastName: propTypes.string,
    className: propTypes.string
}

Profile.defaultProps = {
    firstName: 'Имя',
    lastName: 'Фамилия',
    className: ''
}

export default Profile