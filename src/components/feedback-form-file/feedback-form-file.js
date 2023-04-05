import PropTypes from 'prop-types'
import ProgressBar from '../progress-bar/progress-bar'
import DeleteIcon from '../icons/delete-icon/delete-icon'
import PreloaderIcon from '../icons/preloader-icon/preloader-icon'
import file from '../../assets/icons/file.svg'

import './feedback-form-file.scss'

const FeedbackFormFile = ({ fileName, progress, error, onDelete }) => {

    return (
        <div className='feedback-form-file'>
            <img src={file} alt=''/>
            <div className='feedback-form-file__status'>
                {error ?
                    <>
                        <span className='feedback-form-file__file-name feedback-form-file__file-name_error'>
                            Your file is too big!
                        </span>
                        <ProgressBar progress={100} error />
                    </>
                    :
                    <>
                        <span className='feedback-form-file__file-name'>{fileName}</span>
                        <ProgressBar progress={progress} />
                    </>
                }
            </div>
            { progress === 100 ?  <DeleteIcon onClick={onDelete} /> : <PreloaderIcon /> }
        </div>
    )
}

FeedbackFormFile.propTypes = {
    fileName: PropTypes.string,
    progress: PropTypes.number,
    error: PropTypes.bool,
    onDelete: PropTypes.func
}

FeedbackFormFile.defaultProps = {
    fileName: 'File Name',
    progress: 100,
    error: false,
    onDelete: () => {}
}

export default FeedbackFormFile