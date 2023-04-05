import { useRef, useState } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import Button from '../common/button/button'
import UploadButton from '../buttons/upload-button/upload-button'
import InfoIcon from '../icons/info-icon/info-icon'
import FeedbackFormFile from '../feedback-form-file/feedback-form-file'
import close from '../../assets/icons/close.svg'

import './feedback-form.scss'

const FeedbackForm = ({ onClose, className, toastSuccess, toastError }) => {

    const [showPreloader, setShowPreloader] = useState(false)
    const [imageError, setImageError] = useState(false)
    const [progress, setProgress] = useState(0)

    const validate = values => {
        const errors = {}

        if (!values.name) {
            errors.name = 'Поле обязательно для заполнения!'
        } else if (values.name.length > 35) {
            errors.name = 'Должно быть меньше 35 символов!'
        }

        if (!values.feedback) {
            errors.feedback = 'Поле обязательно для заполнения!'
        }

        return errors
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            img: null,
            feedback: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            console.log('name: ' + formik.values.name + '\nimage: ' + formik.values.img + '\nfeedback: ' + formik.values.feedback)
            resetForm()
            setShowPreloader(false)
            onClose()
            setTimeout(() => { toastSuccess() }, 2000)
        }
    })

    const onImageChange = (e) => {
        if (e.target.files[0]) {
            formik.setFieldValue('img', e.target.files[0].name)
            setShowPreloader(true)

            if (e.target.files[0].size < 4 * 1024 * 1024) {
                const fileReader = new FileReader()
                fileReader.readAsBinaryString(e.target.files[0])

                fileReader.onprogress = function(data) {
                    if (data.lengthComputable) {
                        setProgress((data.loaded / data.total) * 100)
                    }
                }
            } else {
                setImageError(true)
            }

        } else {
            if (!showPreloader) {
                formik.setFieldValue('img', '')
                setShowPreloader(false)
            }
        }
    }

    const onDelete = () => {
        formik.setFieldValue('img', '')
        inputFileRef.current.value = ''
        setImageError(false)
        setShowPreloader(false)
    }

    const handleTextArea = (e) => {
        if (e.target.value.length <= 200) {
            formik.setFieldValue('feedback', e.target.value)
        }
    }

    const inputFileRef = useRef()

    return (
        <form className={classnames('feedback-form', className)} onSubmit={formik.handleSubmit} >
            <div className='feedback-form__row'>
                <h3 className='feedback-form__title'>Отзыв</h3>
                <img className='feedback-form__close-icon' src={close} alt="" onClick={() => {
                    onClose()
                    formik.resetForm()
                    setShowPreloader(false)
                }}/>
            </div>
            <label htmlFor='name'>Как вас зовут?</label>
            <div className='feedback-form__row'>
                <input
                    id='name'
                    name='name'
                    type='text'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder='Имя Фамилия'
                />
                <div className='feedback-form__upload-img'>
                    <input
                        id='img'
                        name='img'
                        type='file'
                        accept='.jpg,.jpeg,.png'
                        onChange={onImageChange}
                        ref={inputFileRef}
                    />
                    {showPreloader && (!progress || progress === 100) ?
                        <UploadButton className='feedback-form__upload-img-btn' disabled onClick={() => inputFileRef.current.click()} /> :
                        <UploadButton className='feedback-form__upload-img-btn' onClick={() => inputFileRef.current.click()} />}
                </div>
            </div>
            {formik.errors.name && formik.touched.name && formik.errors.name ?
                <span className='feedback-form__error'>{formik.errors.name}</span> : null }
            { showPreloader ? <FeedbackFormFile fileName={formik.values.img} error={imageError} progress={progress} onDelete={onDelete}/> : null }
            <label htmlFor='feedback'>Все ли вам понравилось?</label>
            <div className='feedback-form__textarea'>
                 <textarea
                     id='feedback'
                     name='feedback'
                     value={formik.values.feedback}
                     onChange={handleTextArea}
                     placeholder='Напишите пару слов о вашем опыте...'
                 />
                <div>{formik.values.feedback.length}/200</div>
            </div>
            {formik.errors.feedback && formik.touched.feedback && formik.errors.feedback ?
                <span className='feedback-form__error'>{formik.errors.feedback}</span> : null }
            <div className='feedback-form__row'>
                <Button className="feedback-form__submit-btn" type='submit'>Отправить отзыв</Button>
                <div className='feedback-form__moderation'>
                    <InfoIcon url='/' />
                    <span>Все отзывы проходят модерацию в течение 2 часов</span>
                </div>
            </div>
        </form>
    )
}

FeedbackForm.propTypes = {
    onClose: PropTypes.func,
    className: PropTypes.string
}

FeedbackForm.defaultProps = {
    onClose: () => {},
    className: ''
}

export default FeedbackForm