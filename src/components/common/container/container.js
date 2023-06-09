import propTypes from 'prop-types'
import classNames from 'classnames'

import './container.scss'

const Container = ({ children, className }) => {
  return <div className={classNames('container', className)}>{children}</div>
}

Container.propTypes = {
  children: propTypes.node,
  className: propTypes.string,
}

Container.defaultProps = {
  children: null,
  className: '',
}

export default Container
