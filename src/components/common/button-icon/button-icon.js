import propTypes from 'prop-types'
import classNames from 'classnames'
import Button from '../button/button'

import './button-icon.scss'

const ButtonIcon = ({ text, icon, isIconVisible, className, onClick, ...props }) => {
    return (
        <Button className={classNames('button-icon', className)}
                onClick={onClick}
                {...props}>
            <img className={classNames('button-icon__icon', {'button-icon__icon_hidden': !isIconVisible})}
                 src={icon} alt="Профиль"/>
            <span className='button-icon__text'>{text}</span>
        </Button>
    )
}

ButtonIcon.propTypes = {
    text: propTypes.string,
    icon: propTypes.string.isRequired,
    className: propTypes.string,
    onClick: propTypes.func
}

ButtonIcon.defaultProps = {
    text: 'Button',
    className: '',
    onClick: () => {}
}

export default ButtonIcon