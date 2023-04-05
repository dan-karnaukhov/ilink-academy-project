import classNames from 'classnames'
import propTypes from 'prop-types'

import './button.scss'

const Button = ({ children, onClick, className, disabled, light, ...props }) => {

    const onClickAction = (e) => {
        disabled ? e.preventDefault() : onClick(e)
    }

    const Tag = props.href ? 'a' : 'button'

    return (
        <Tag
            className={classNames('button', className, { 'button_light': light })}
            onClick={onClickAction}
            disabled={disabled}
            {...props}
        >{children}</Tag>
    )
}

Button.propTypes = {
    children: propTypes.node,
    onClick: propTypes.func,
    className: propTypes.string,
    disabled: propTypes.bool
}

Button.defaultProps = {
    children: 'Button',
    onClick: () => {},
    className: '',
    disabled: false
}

export default Button