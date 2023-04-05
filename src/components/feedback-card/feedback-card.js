import PropTypes from 'prop-types'
import Avatar from '../avatar/avatar'

import './feedback-card.scss'

const FeedbackCard = ({ imgURL, firstName, lastName, position, publicationDate, text }) => {

    return (
        <div className='feedback-card'>
            <div className='feedback-card__row'>
                <div className='feedback-card__profile'>
                    <Avatar avatar={imgURL}/>
                    <div className='feedback-card__column'>
                        <span className='feedback-card__name'>{`${firstName} ${lastName}`}</span>
                        {position ? <span className='feedback-card__position'>{position}</span> : null}
                    </div>
                </div>
                <span className='feedback-card__publication-date'>{publicationDate}</span>
            </div>
            <div className='feedback-card__text'>
                {text}
            </div>
        </div>
    )
}

FeedbackCard.propTypes = {
    imgURL: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    position: PropTypes.string,
    publicationDate: PropTypes.string,
    text: PropTypes.string
}

FeedbackCard.defaultProps = {
    imgURL: null,
    firstName: 'Имя',
    lastName: 'Фамилия',
    position: 'Должность (обязательно)',
    publicationDate: 'ДД.ММ.ГГГГ',
    text: 'Отличный коллектив, руководители понимают сам процесс работы каждого сотрудника и помогают всем без исключения. Система KPI позволяет реально хорошо зарабатывать по простому принципу - чем больше и лучше ты работаешь, тем больше денег получаешь. Соцпакет - отличная страховка ДМС, организовали курсы английского языка бесплатно, оплачивают тренажерный зал. Зарплату выплачивают всегда вовремя.'
}

export default FeedbackCard