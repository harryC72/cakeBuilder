import React from 'react';
import PropTypes from 'prop-types';
import strawBerryImg from '../../../assets/strawberry.png';
import classes from '../CakeIngredient.module.css'


const strawBerry = props => {
    return (
        <div>
            <img className={classes.General} src={strawBerryImg} alt="strawberry" />
        </div>
    )
}
 strawBerry.propTypes = {

}

export default strawBerry
