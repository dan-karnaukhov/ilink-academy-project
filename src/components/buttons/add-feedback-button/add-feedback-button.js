import PropTypes from 'prop-types'
import ButtonIcon from '../../common/button-icon/button-icon'
import add from '../../../assets/icons/add.svg'

const AddFeedbackButton = ({ onClick }) => {
    return (
        <ButtonIcon text='Добавить отзыв' onClick={onClick} icon={add} isIconVisible/>
    )
}

AddFeedbackButton.propTypes = {
    onClick: PropTypes.func
}

AddFeedbackButton.defaultProps = {
    onClick: () => {}
}

export default AddFeedbackButton