import { useState } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { useFormik } from 'formik'
import Button from '../common/button/button'
import EmailField from '../login-form-fields/email-field/email-field'
import PasswordField from '../login-form-fields/password-field/password-field'

import './login-form.scss'

const LoginForm = ({ error, setError, setIsAuth, toastSuccess, toastError, className }) => {

    const [loginVisited, setLoginVisited] = useState(false)
    const [passwordVisited, setPasswordVisited] = useState(false)

    const [currentStep, setCurrentStep] = useState(1)

    const nextStep = () => {
        setCurrentStep((currentStep) => currentStep + 1)
        if (error) {
            setError(false)
            formik.errors.login = ''
            formik.errors.password = ''
        }
    }

    const prevStep = () => {
        setCurrentStep((currentStep) => currentStep - 1)
        formik.resetForm()
    }

    const sendResetCode = () => {
        if (true) {
            setTimeout(() => { toastSuccess() }, 2000)
        } else {
            setTimeout(() => { toastError() }, 2000)
        }
    }

    const validate = values => {
        const errors = {}

        if (error) {
            setError(false)
        }

        if (!values.login) {
            errors.login = 'Поле обязательно для заполнения!'
        } else if (!/^((?=[a-zA-Z0-9])[a-zA-Z0-9!#$%&\\'*+\-\/=?^_`.{|}~]{1,25})@(([a-zA-Z0-9\-]){1,25}\.)([a-zA-Z0-9]{2,4})$/.test(values.login)) {
            errors.login = 'Поле не соотвествует требованиям'
        }
        
        if (!values.password) {
            errors.password = 'Поле обязательно для заполнения!'
        } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,24}$/.test(values.password)) {
            errors.password = 'Поле не соотвествует требованиям'
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            if (values.login === 'email@email.com' && values.password === 'qwe123ASD%') {
                setIsAuth(true)
                resetForm()
            } else {
                setError(true)
                formik.errors.login = 'error'
                formik.errors.password = 'error'
            }
        }
    })

    return (
        <form className={classnames('login-form', className)} onSubmit={formik.handleSubmit}>
            {
                currentStep === 1 &&
                <div className='login-form__login-step'>
                    <h1 className='login-form__title'>Войти</h1>
                    <EmailField className='login-form__login'
                            error={formik.errors.login && loginVisited} 
                            label='Логин' 
                            id='login' 
                            name='login'
                            value={formik.values.login}
                            onChange={(e) => {
                                if (!loginVisited) setLoginVisited(true)
                                formik.setFieldValue('login', e.target.value)
                            }} 
                            placeholder='Введите логин' />
                    <PasswordField className='login-form__password'
                                error={formik.errors.password && passwordVisited}  
                                label='Пароль' 
                                id='password' 
                                name='password' 
                                value={formik.values.password}
                                onChange={(e) => {
                                    if (!passwordVisited) setPasswordVisited(true)
                                    formik.setFieldValue('password', e.target.value)
                                }} 
                                placeholder='Введите пароль' />
                    <Button className='login-form__button' disabled={!(formik.isValid && formik.dirty)} type='submit'>Войти</Button>
                    <div className='login-form__reset-password' onClick={nextStep}>Забыли пароль?</div>
                </div>
            }
            {
                currentStep === 2 &&
                <div className='login-form__reset-password-step'>
                    <h1 className='login-form__title'>Сброс пароля</h1>
                    <EmailField className='login-form__login'
                            error={formik.errors.login} 
                            label='Электронная почта' 
                            id='login' 
                            name='login'
                            value={formik.values.login}
                            onChange={formik.handleChange} 
                            placeholder='Введите email' />
                    <div className='login-form__buttons'>
                        <Button type='button' onClick={sendResetCode} disabled={formik.errors.login || formik.values.login === ''}>Отправить код</Button>
                        <Button light type='button' onClick={prevStep}>Отмена</Button>
                    </div>
                    <svg className='login-form__arrow' onClick={prevStep} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.25 12.2743L19.25 12.2743" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.2998 18.2987L4.2498 12.2747L10.2998 6.24969" stroke="#8A8A8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            }
        </form>
    )
}

LoginForm.propTypes = {
    error: propTypes.bool,
    setError: propTypes.func,
    setIsAuth: propTypes.func,
    toastSuccess: propTypes.func,
    toastError: propTypes.func,
    className: propTypes.string
}

LoginForm.defaultProps = {
    error: false,
    setError: () => {},
    setIsAuth: () => {},
    toastSuccess: () => {},
    toastError: () => {},
    className: ''
}

export default LoginForm