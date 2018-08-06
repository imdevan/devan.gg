/**
 * Created by vaibhav on 2/4/18
 */
import React from 'react'
import PropTypes from 'prop-types'

const Body = ({parent, fluid, className, children, rowClassName, colClassName}) => {
  const parentClassName =  parent ?  `${parent}_body` : ''; 
  const containerClassName = `container${fluid ? '-fluid' : ''} ${parentClassName} ${className}`;
  const _rowClassName = `row py-5 my-5 ${rowClassName}`;
  const _colClassName = `col ${colClassName}`;

  return (
    <div className={containerClassName}>
      <div className={_rowClassName}>
        <div className={_colClassName}>
          {children}
        </div>
      </div>
    </div>
  )
}

Body.propTypes = {
  parent: PropTypes.string,
  className: PropTypes.string,
  fluid: PropTypes.bool,
}

Body.defaultProps = {
  className: '',
  rowClassName: '',
  colClassName: '',
  fluid: false,
  padding: 5,
  margin: 5,
}

export default Body