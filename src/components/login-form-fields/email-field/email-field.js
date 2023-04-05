import propTypes from 'prop-types'
import classnames from 'classnames'
import InfoSquare from '../../icons/info-square/info-square'

import './email-field.scss'

const EmailField = ({ label, value, onChange, id, name, placeholder, error, className }) => {
    return (
        <div className={classnames('email-field', className)} >
            <label className='email-field__label' htmlFor={id}>{label}</label>
            <div className='email-field__input-container' >
                <input
                    className={classnames('email-field__input', { 'email-field__input_error': error })}  
                    id={id}
                    name={name}
                    type='text'
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
                {error ? 
                    <InfoSquare className='email-field__info-square'>
                        Почтовый адрес должен <span>содер<wbr />жать @</span>, имя пользователя и доменное имя должны быть длиной <span>не боллее 25</span> символов, 
                        код страны <span>от 2 до 4</span> символов.
                    </InfoSquare>
                    :
                    null
                }
            </div>
        </div>
    )
}

EmailField.propTypes = {
    label: propTypes.string,
    value: propTypes.string,
    onChange: propTypes.func,
    id: propTypes.string,
    name: propTypes.string,
    placeholder: propTypes.string,
    error: propTypes.bool,
    className: propTypes.string
}

EmailField.defaultProps = {
    label: 'Email Field',
    value: '',
    onChange: () => {},
    id: 'email',
    name: 'email',
    placeholder: 'Enter email',
    error: false,
    className: ''
}

export default EmailField