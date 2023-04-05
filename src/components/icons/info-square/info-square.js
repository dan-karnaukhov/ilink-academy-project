import propTypes from 'prop-types'
import classnames from 'classnames'

import './info-square.scss'

const InfoSquare = ({ children, className }) => {
    return (
        <div className={classnames('info-square', className)}>
                <div className='info-square__container'>
                    <svg className='info-square__icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.6117 2.29175H6.38758C3.87008 2.29175 2.29175 4.07425 2.29175 6.59675V13.4034C2.29175 15.9259 3.86258 17.7084 6.38758 17.7084H13.6109C16.1367 17.7084 17.7084 15.9259 17.7084 13.4034V6.59675C17.7084 4.07425 16.1367 2.29175 13.6117 2.29175Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.99558 13.3334V10.0001" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M9.99157 6.83691H9.9999" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <div className='info-square__text'>
                        {children}
                    </div>
                </div>
        </div>
    )
}

InfoSquare.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
}

InfoSquare.defaultProps = {
    children: null,
    className: ''
}

export default InfoSquare