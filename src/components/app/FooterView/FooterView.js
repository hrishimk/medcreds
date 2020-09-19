import React from 'react'
import classes from './FooterView.module.scss'


const FooterView = () => {
    return (
        <div className={classes.FooterView}>
            <span className={classes.text}>MedCREDS</span>
            <span className={classes.text}>Copyright © MedCREDS 2020</span>
        </div>
    )
}

export default FooterView