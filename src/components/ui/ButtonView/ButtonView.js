import React from 'react';
import PropTypes from 'prop-types';
import classes from './ButtonView.module.scss';

/**
 * ButtonView component.
 * @param {ButtonView.propTypes} props
 */
const ButtonView = ({ label, click }) => {
    return <button className={classes.ButtonView} onClick={click}>{label}</button>
}

ButtonView.propTypes = {
    /** Button label */
    label: PropTypes.string,
    /** Click Handler */
    click: PropTypes.func
};

ButtonView.defaultProps = {
    label: 'Button'
}

export default ButtonView