import React, { useLayoutEffect } from "react"
import PropTypes from "prop-types"

// import components
import Header from "./components/Header"
import Articles from "../../../../common/categories/listing"
import Products from "../../../products/Products";

// import services
import { categoryListRequest } from '../../../category/service'

export default function Page({ dispatch }) {
  useLayoutEffect(() => {
    dispatch(categoryListRequest({ url: 'api/v1/categories/published' }))
  }, [])

  return <div>
    <Header/>
    <Articles/>
  </div>
}

Page.displayName = 'HomePage'
Page.propTypes = {
  dispatch: PropTypes.func.isRequired,
}
