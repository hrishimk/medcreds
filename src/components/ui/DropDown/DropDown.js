import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './DropDown.module.scss';

/**
 * DropDown component.
 * @param {DropDown.propTypes} props
 */
const DropDown = (props) => {
    const {
        val,
        change,
        label,
        required,
        size,
        list
    } = props;

    const [show, setShow] = useState(false)

    const labelFormatted = required ? label + ' *' : label

    let selectedText = ''

    if (list && list.length) {
        const selectedItem = list.find(item => item.id === val)
        selectedText = selectedItem ? selectedItem.title : list[0].title
    }

    const toggleDropDown = () => {
        setShow(!show)
    }

    const changeHandler = (item) => {
        toggleDropDown()
        change(item)
    }

    const List = (<ul className={classes.list} >
        {
            list.map(item => (
                <li
                    className={classes.listItem}
                    key={item.id}
                    onClick={() => { changeHandler(item) }}
                >{item.title}</li>
            ))
        }
    </ul>)

    return (
        <div className={[classes.DropDown, classes[size]].join(' ')}>
            <label className={classes.label}>
                <span className={classes.labelText}>{labelFormatted}</span>
                <div className={classes.input} onClick={toggleDropDown}>
                    <span className={classes.selectedText}>{selectedText}</span>
                    <div className={classes.downArrow}></div>
                </div>
                {show && List}
            </label>
        </div>
    );
};

DropDown.propTypes = {
    /** DropDown label */
    label: PropTypes.string,
    /** Value of the input field. */
    val: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** On change event handler. */
    change: PropTypes.func.isRequired,
    /** List of data */
    list: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, title: PropTypes.string })),
    /** Error */
    error: PropTypes.bool,
    /** Error message */
    errMsg: PropTypes.string,
    /** required or not */
    required: PropTypes.bool,
};

DropDown.defaultProps = {
    error: false,
    required: false,
    size: 'small',
    list: []
};

export default DropDown