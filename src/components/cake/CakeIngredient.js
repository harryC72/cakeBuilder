import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BottomCake from '../cake/cakeIngredients/BottomCake';
import TopCake from '../cake/cakeIngredients/TopCake';
import Strawberry from '../cake/cakeIngredients/Strawberry';
import Topping from '../cake/cakeIngredients/Topping';
import VanillaFilling from '../cake/cakeIngredients/VanillaFilling';

const cakeIngredient = props => {
 let ingredient = null;   

switch (props.type) {
    case 'bottom-cake':
        ingredient = <BottomCake />
        break;
    case 'top-cake':
        ingredient = <TopCake /> 
        break;
    case 'strawberry':
        ingredient = <Strawberry />
        break;
    case 'topping':
        ingredient = <Topping />
        break;
    case 'vanilla-filling':
        ingredient = <VanillaFilling />
        break;
    default: ingredient = null;
        break;
}

return ingredient;

}

cakeIngredient.propTypes = {
    type : PropTypes.string.isRequired

}

export default cakeIngredient;
