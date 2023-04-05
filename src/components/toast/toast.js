import PropTypes from 'prop-types'
import closeSuccess from './decor/close-success.svg'
import closeError from './decor/close-error.svg'

import './toast.scss'

const Toast = ({ label, text, onClose, error }) => {
    
    if(error) {
        return (
            <div className='toast toast_error'>
                <div className='toast__text'>
                    <span>{label}</span>
                    {text}
                </div>
                <img className='toast__close-icon' onClick={onClose} src={closeError} alt=''/>
            </div>
        )
    }

    return (
        <div className={'toast toast_success'}>
          <div className='toast__text'>
              <span>{label}</span>
              {text}
          </div>
            <img className='toast__close-icon' onClick={onClose} src={closeSuccess} alt=''/>
        </div>
    )
}

Toast.propTypes = {
    onClose: PropTypes.func,
    error: PropTypes.bool
}

Toast.defaultProps = {
    onClose: () => {},
    error: false
}

export default Toast