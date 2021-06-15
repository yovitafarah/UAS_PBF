// import libs
import { connect } from 'react-redux'
import Categories from '../../Categories'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.categories
  
  return {
    categories: data?.map((category) => new Categories(category)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
