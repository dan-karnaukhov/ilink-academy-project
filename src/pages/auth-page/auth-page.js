import { useState } from 'react'
import propTypes from 'prop-types'
import HeaderAuth from '../../components/header-auth/header-auth'
import LoginForm from '../../components/login-form/login-form'
import Footer from '../../components/footer/footer'
import ModalToast from '../../components/modal-toast/modal-toast'
import Toast from '../../components/toast/toast'

import './auth-page.scss'

const AuthPage = ({ setIsAuth }) => {

    const [error, setError] = useState(false)
    const [toastSuccessActive, setToastSuccessActive] = useState(false)
    const [toastErrorActive, setToastErrorActive] = useState(false)

    return (
        <div className='wrapper'>  
            <HeaderAuth />
            <div className='auth-page'>
                <div className='auth-page__container'>
                    <LoginForm className='auth-page__form' 
                               error={error} 
                               setError={setError} 
                               setIsAuth={setIsAuth} 
                               toastSuccess={() => setToastSuccessActive(true)}
                               toastError={() => setToastErrorActive(true)} />
                </div>
                {
                    error ?
                        <div className='auth-page__error'>
                            Такого пользователя не существует
                        </div>
                        :
                        null
                }
            </div>
            <ModalToast active={toastSuccessActive} setActive={setToastSuccessActive}>
                <Toast onClose={() => setToastSuccessActive(false)}
                       label='Код отправлен'
                       text='Код успешно отправлен на вашу почту!'/>
            </ModalToast>
            <ModalToast active={toastErrorActive} setActive={setToastErrorActive}>
                <Toast error onClose={() => setToastErrorActive(false)}
                       label='Что-то не так...'
                       text='Не получилось отправить код. Попробуйте еще раз!'/>
            </ModalToast>
            <Footer />
        </div>
    )
}

AuthPage.propTypes = {
    setIsAuth: propTypes.func
}

AuthPage.defaultProps = {
    setIsAuth: () => {}
}

export default AuthPage