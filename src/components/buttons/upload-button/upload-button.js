import classnames from 'classnames'
import PropTypes from 'prop-types'
import Button from '../../common/button/button'
import add from '../../../assets/icons/add.svg'

import './upload-button.scss'

const UploadButton = ({ onClick, className }) => {
    return (
        <Button className={classnames('upload-button', className)}
                onClick={onClick}
                type='button'>
            <img className='upload-button__icon' src={add} alt='Профиль'/>
            Загрузить фото
        </Button>
    )
}

UploadButton.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string
}

UploadButton.defaultProps = {
    onClick: () => {},
    className: ''
}

export default UploadButton