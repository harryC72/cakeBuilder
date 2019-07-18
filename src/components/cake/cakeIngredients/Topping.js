import React from 'react';
import PropTypes from 'prop-types';
import toppingImg from '../../../assets/topping.png';

const topping = props => {
    return (
        <div>
            <img src={toppingImg} alt="topping"/>
        </div>
    )
}
 topping.propTypes = {

}

export default topping
