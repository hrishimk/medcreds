import React from 'react'
import PropTypes from 'prop-types'
import classes from './LinkView.module.scss'

/**
 * 
 * Header Link component
 */
const LinkView = ({ text, active, click }) => {
    return (
        <span
            className={[classes.LinkView, active ? classes.active : ''].join(' ')}
            onClick={click}
        >{text}</span>
    )
}

LinkView.propTypes = {
    /** Link text */
    text: PropTypes.string,
    /** Link is active or not */
    active: PropTypes.bool,
    /** Click Handler */
    click: PropTypes.func
};

LinkView.defaultProps = {
    text: 'Link',
    active: false,
    click: () => { }
};

export default LinkView