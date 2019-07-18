import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classes from './Layout.module.css';

const layout = props => {
    return (
        <Fragment>
        <div>
            Toolbar, SideDrawer, BackDrop
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
        </Fragment>
    )
}

layout.propTypes = {

}

export default layout
