import React from 'react';
import PropTypes from 'prop-types';
import topCakeImg from '../../../assets/topCake.png';
import classes from '../CakeIngredient.module.css'


const topCake = props => {
    return (
        <div>
            <img className={classes.General} src={topCakeImg} alt="top of the cake"/>
        </div>
    )
}
 topCake.propTypes = {

}

export default topCake
