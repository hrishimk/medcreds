import React from 'react'
import PropTypes from 'prop-types'
import classes from './AvatarView.module.scss'

const AvatarView = ({ name, path }) => {
    return (
        <div className={classes.AvatarView}>
            <div className={classes.alignWrap}>
                <div className={classes.avatar} style={{ backgroundImage: `url(${path})` }}>

                </div>
                <span className={classes.name}>{name}</span>
            </div>
        </div>
    )
}

AvatarView.propTypes = {
    /** Avatar path */
    path: PropTypes.string,
    /** User  Name */
    name: PropTypes.string
};

AvatarView.defaultProps = {
    text: 'Link',
    active: false
};

export default AvatarView
