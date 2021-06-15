import React from 'react';
import PropTypes from "prop-types";

import Content from './components/Content'

export default function Page (){

        return <div>
            <Content/>
        </div>

}

Page.displayName = 'Dashboard'
Page.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
}

