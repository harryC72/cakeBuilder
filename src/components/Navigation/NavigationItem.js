import React from 'react'
import PropTypes from 'prop-types'
import classes from './NavigationItem.module.css';

const NavigationItem = props => {
    return (
        <li className={classes.NavigationItem} >
            <a className={ props.active ? classes.active : null} href={props.link}>{props.children}</a>
        </li>
    )
}

NavigationItem.propTypes = {

}

export default NavigationItem
