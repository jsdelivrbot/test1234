import React, {PropTypes} from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({
  name,
  label,
  value,
  onChange,
  error,
  type,
  checkUserExists //signupで利用
}) => {

  return (
    <div className={
         classnames(
           "_panel"
         )}>
      <label className="control-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        onBlur={checkUserExists}
        type={type}
        name={name}
        className={classnames(
          "form-control",
          {'input-error': error}
        )}
        />
      {error ?
        <div className="error-message">
          {error}
        </div> : <div><br/></div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string.isRequired,
  checkUserExists: PropTypes.func
};

TextFieldGroup.defaultProps = {
  type: 'text'
};

export default TextFieldGroup;