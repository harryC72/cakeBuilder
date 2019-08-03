import React from 'react';
import PropTypes from 'prop-types';
import toppingImg from '../../../assets/topping.png';
import classes from '../CakeIngredient.module.css'


const topping = props => {
    return (
        <div>
            <img className={classes.General} src={toppingImg} alt="topping"/>
        </div>
    )
}
 topping.propTypes = {

}

export default topping
