//import libs
import React from 'react'
import PropTypes from 'prop-types'

import ScrollTop from '../common/scroll-top/index'


const displayName = 'Public Layout'
const propTypes = {
  children: PropTypes.node.isRequired,
}

function PublicLayout({ children }) {
  return <div>
    <main style={{ minHeight: '100vh'}}>
      { children }
      <ScrollTop />
    </main>
  </div>
}

PublicLayout.dispatch = displayName
PublicLayout.propTypes = propTypes

export default PublicLayout
