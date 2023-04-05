import { useState } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import EyeIcon from './eye-icon.svg'
import InfoSquare from '../../icons/info-square/info-square'

import './password-field.scss'

const PasswordField = ({ label, value, onChange, id, name, placeholder, error, className }) => {

    const [type, setType] = useState('password')
    const [showEye, setShowEye] = useState(true)

    const onEyeClick = () => {
        if (type === 'password') {
            setType('text')
            setShowEye(false)
        } else {
            setType('password')
            setShowEye(true)
        }
    }

    return (
        <div className={classnames('password-field', className)}>
            <label className='password-field__label' htmlFor={id}>{label}</label>
            <div className='password-field__input-container' >
                <input
                    className={classnames('password-field__input', { 'password-field__input_error': error })}
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                <div className='password-field__icons'>
                    <svg className='password-field__eye-icon' onClick={onEyeClick}>
                        <use xlinkHref={`${EyeIcon}#${showEye}`} />
                    </svg>
                    {error ? 
                        <InfoSquare className='password-field__info-square'>
                            Пароль может быть длиной <span>не менее 8</span> и <span>не более 24</span> сим<wbr />волов
                            и до<wbr />лжен содержать <span>цифры, спец<wbr />символы, малые и заглавные латинские буквы</span>
                        </InfoSquare>
                        :
                        null
                    }
                </div>
            </div>
        </div>
    )
}

PasswordField.propTypes = {
    label: propTypes.string,
    value: propTypes.string,
    onChange: propTypes.func,
    id: propTypes.string,
    name: propTypes.string,
    placeholder: propTypes.string,
    error: propTypes.bool,
    className: propTypes.string
}

PasswordField.defaultProps = {
    label: 'Password Field',
    value: '',
    onChange: () => {},
    id: 'password',
    name: 'password',
    placeholder: 'Enter password',
    error: false,
    className: ''
}

export default PasswordField