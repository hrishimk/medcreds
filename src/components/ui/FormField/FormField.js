import React from 'react';
import PropTypes from 'prop-types';
import classes from './FormField.module.scss';

/**
 * FormField component.
 * @param {FormField.propTypes} props
 */
const FormField = (props) => {
    const {
        val,
        change,
        label,
        required,
        size,
        placeHolder,
        errMsg
    } = props;

    // Add asterisk in label for required fields
    const labelFormatted = required ? label + ' *' : label

    return (
        <div className={[classes.FormField, classes[size]].join(' ')}>
            <label className={classes.label}>
                <span className={classes.labelText}>{labelFormatted}</span>
                <input className={classes.input} onChange={change} value={val} placeholder={placeHolder} />
            </label>
            <span className={classes.errMsg}>
                {errMsg}
            </span>
        </div>
    );
};

FormField.propTypes = {
    /** FormField label */
    label: PropTypes.string,
    /** Value of the input field. */
    val: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** On change event handler. */
    change: PropTypes.func.isRequired,
    /** Placeholder */
    placeHolder: PropTypes.string,
    /** Error */
    error: PropTypes.bool,
    /** Error message */
    errMsg: PropTypes.string,
    /** required or not */
    required: PropTypes.bool,
};

FormField.defaultProps = {
    error: false,
    required: false,
    size: 'small',
};

export default FormField