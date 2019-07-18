import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Cake from '../components/cake/Cake';

export class CakeBuilder extends Component {
    static propTypes = {

    }

    render() {
        return (
            <Fragment>
                <Cake />
                <div>Build controls</div>
            </Fragment>
        )
    }
}

export default CakeBuilder
