import React from 'react';
import PropTypes from 'prop-types';
import classes from './Cake.module.css';
import CakeIngredient from './CakeIngredient';

const cake = props => {
    return (
        <div className={classes.Cake}>
            <CakeIngredient type="top-cake" />
            <CakeIngredient type="vanilla-filling" />
            <CakeIngredient type="bottom-cake" />
        </div>
    )
}

cake.propTypes = {

}

export default cake
