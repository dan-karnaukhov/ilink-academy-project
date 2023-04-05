import PropTypes from 'prop-types'

import './progress-bar.scss'

const ProgressBar = ({ progress, error }) => {
    return (
        <div className={error ? 'progressbar progressbar_error' : 'progressbar'}>
            <div style={error ? { width: '100%'} : { width: progress + '%'}} />
        </div>
    )
}

ProgressBar.propTypes = {
    progress: PropTypes.number,
    error: PropTypes.bool
}

ProgressBar.defaultProps = {
    progress: 100,
    error: false
}

export default ProgressBar