import propTypes from 'prop-types'
import classnames from 'classnames'

import './labeled-text.scss'

const LabeledText = ({ children, label, regularLabel, italic, className }) => {
    return (
        <p className={classnames('labeled-text', className, { 'labeled-text_italic': italic })}>
            <span className={classnames('labeled-text__label', { 'labeled-text__label_regular': regularLabel })}>{label}: </span>
            {children}
        </p>
    )
}

LabeledText.propTypes = {
    children: propTypes.node,
    label: propTypes.string,
    className: propTypes.string
}

LabeledText.defaultProps = {
    children: 'Text',
    label: 'Label',
    className: ''
}

export default LabeledText