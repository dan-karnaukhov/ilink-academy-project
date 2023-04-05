import { useEffect } from 'react'
import PropTypes from 'prop-types'

import './modal-toast.scss'

const ModalToast = ({ active, setActive, children }) => {

    useEffect(() => {
        if (active) {
            setTimeout(() => setActive(false), 4000)
        }
    }, [active])

    return (
        <div className={active ? 'modal-toast modal-toast_active' : 'modal-toast'} >
            <div className={active ? 'modal-toast__content modal-toast__content_active' : 'modal-toast__content'}>
                {children}
            </div>
        </div>
    )
}

ModalToast.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    children: PropTypes.node
}

ModalToast.defaultProps = {
    children: null
}

export default ModalToast