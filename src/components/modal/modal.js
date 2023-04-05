import { useEffect } from 'react'
import PropTypes from 'prop-types'

import './modal.scss'

const Modal = ({ active, setActive, children }) => {

    useEffect(() => {
        if(active) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [active])

    return (
        <div className={active ? 'modal modal_active' : 'modal' } onClick={() => setActive(false)}>
            <div className={'modal__content'} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    children: PropTypes.node
}

Modal.defaultProps = {
    children: null
}

export default Modal