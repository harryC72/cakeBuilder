import React from 'react';
import PropTypes from 'prop-types';
import bottomCakeImg from '../../../assets/bottomCake.png';
import classes from '../CakeIngredient.module.css'

const bottomCake = props => {
    return (
        <div>
            <img className={classes.General} src={bottomCakeImg} alt="bottom of the cake" />
        </div>
    )
}

bottomCake.propTypes = {

}

export default bottomCake;
