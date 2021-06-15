//import libs
import React from 'react'
import PropTypes from 'prop-types'

// import components
import Sidebar from '../common/sidebar/sidebar';
import Footer from '../common/footer';
import Header from '../common/header/header';

const displayName = 'Private Layout'
const propTypes = {
    children: PropTypes.node.isRequired,
}

function PrivateLayout({children}) {
    return <div>
        <div className="page-wrapper">
            <Header/>
            <div className="page-body-wrapper">
                <Sidebar/>
                <div className="page-body">
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    </div>
}

PrivateLayout.dispatch = displayName
PrivateLayout.propTypes = propTypes

export default PrivateLayout
