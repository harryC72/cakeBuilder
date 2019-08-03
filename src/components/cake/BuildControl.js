import React from 'react'
import classes from './BuildControls.module.css';

const BuildControl = ({label}) => {
    return (
        <div className={classes.buildControl}>
            <div className={classes.label}>{label}</div>
            <button className={classes.less}>Less</button>
            <button className={classes.more}>More</button>
        </div>
    )
}

export default BuildControl;
