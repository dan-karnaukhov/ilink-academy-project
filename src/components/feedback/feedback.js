import { useState } from 'react'
import Container from '../common/container/container'
import AddFeedbackButton from '../buttons/add-feedback-button/add-feedback-button'
import FeedbackSlider from '../feedback-slider/feedback-slider'
import Modal from '../modal/modal'
import FeedbackForm from '../feedback-form/feedback-form'
import Toast from '../toast/toast'
import ModalToast from '../modal-toast/modal-toast'

import './feedback.scss'

const Feedback = () => {

    const [modalActive, setModalActive] = useState(false)
    const [toastSuccessActive, setToastSuccessActive] = useState(false)
    const [toastErrorActive, setToastErrorActive] = useState(false)

    return (
        <section className='feedback'>
            <Container className='feedback__container'>
                <div className='feedback__row'>
                    <h2 className='feedback__title'>Отзывы</h2>
                    <AddFeedbackButton onClick={() => setModalActive(true)}/>
                </div>
                <FeedbackSlider/>
            </Container>
            <Modal active={modalActive} setActive={setModalActive}>
                <FeedbackForm onClose={() => setModalActive(false)}
                              toastSuccess={() => setToastSuccessActive(true)}
                              toastError={() => setToastErrorActive(true)}/>
            </Modal>
            <ModalToast active={toastSuccessActive} setActive={setToastSuccessActive}>
                <Toast onClose={() => setToastSuccessActive(false)}
                       label='Успешно!'
                       text='Спасибо за отзыв о нашей компании :)'/>
            </ModalToast>
            <ModalToast active={toastErrorActive} setActive={setToastErrorActive}>
                <Toast error onClose={() => setToastErrorActive(false)}
                       label='Что-то не так...'
                       text='Не получилось отправить отзыв. Попробуйте еще раз!'/>
            </ModalToast>
        </section>
    )
}

export default Feedback