import PropTypes from 'prop-types'
import ButtonIcon from '../../common/button-icon/button-icon'
import user_icon from '../../../assets/icons/user-icon.svg'

const ControlPanelButton = ({ className }) => {
    return (
       <ButtonIcon className={className} text='Панель управления' icon={user_icon} />
    )
}

ControlPanelButton.propTypes = {
    className: PropTypes.string
}

ControlPanelButton.defaultProps = {
    className: ''
}

export default ControlPanelButton