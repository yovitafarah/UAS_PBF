import React, { Component } from "react"
import PropTypes from "prop-types"

// import components
import Articles from "../../../../../common/categories/listing"

// import services
import { categoryListRequest } from "../../../../category/service"

class Page extends Component {
  static displayName = "HomePage"
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.dispatch(categoryListRequest({ url: 'api/v1/categories/published' }))
  }

  render() {
    return <div>
      <Articles/>
    </div>
  }
}

export default Page
