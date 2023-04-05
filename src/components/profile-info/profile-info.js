import propTypes from 'prop-types'
import classNames from 'classnames'
import LabeledText from '../common/labeled-text/labeled-text'

import './profile-info.scss'

const ProfileInfo = ({ person, className }) => {

    const { imgURL, firstName, lastName, birthDate, city, gender, age, about, btw, pet } = person

    return (
        <div className={classNames('profile-info', className)}>
            <div className='profile-info__img'>
                <img src={imgURL} alt='Фотография'/>
            </div>
            <div className='profile-info__body'>
                <div className="profile-info__row">
                    <span className='profile-info__name'>{`${firstName} ${lastName}`}</span>
                    <span className='profile-info__birth-date'>{birthDate}</span>
                </div>
                <div className='profile-info__row'>
                    <LabeledText label='Город'>{city}</LabeledText>
                    <LabeledText className={gender === 'мужчина' ?
                        'profile-info__gender profile-info__gender_male' :
                        'profile-info__gender profile-info__gender_female'}
                                 label='Пол'>
                        {gender}
                    </LabeledText>
                    <LabeledText label='Возраст'>{age}</LabeledText>
                </div>
                <LabeledText className='profile-info__about' label='О себе'>{about}</LabeledText>
                <LabeledText className='profile-info__btw' label='BTW' regularLabel italic>{btw}</LabeledText>
                <LabeledText className='profile-info__pet' label='Домашнее животное'>{pet}</LabeledText>
            </div>
        </div>
    )
}

ProfileInfo.propTypes = {
    person: propTypes.object.isRequired,
    className: propTypes.string
}

ProfileInfo.defaultProps = {
    className: ''
}

export default ProfileInfo