import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, classname, describe, step, pattern, value, onChange }) => {
  return (
    <input
      type={type}
      className={classname}
      aria-describedby={describe}
      step={step}
      pattern={pattern}
      value={value}
      onChange={onChange} />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  classname: PropTypes.string,
  describe: PropTypes.string,
  step: PropTypes.string,
  pattern: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
