
import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputGroup = ({
  name,
  placeholder,
  value,
  label,
  error,
  icon,
  type,
  onChange,
}) => {

  return(
    <div className="input-group mb-3 ">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <i className={icon} />
        </span>
      </div>
      <textarea
        className={classnames('form-control form-control-lg',{
          'is-invalid': error
        })}
        onChange={onChange}
        name={name}
        value={value}
        placeholder={placeholder}
        />
        {error && (<div className="invalid-feedback">{error}</div>)}

    </div>
  )
}

InputGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired

}
InputGroup.defaultProps = {
  type: 'text'
}

export default InputGroup;
