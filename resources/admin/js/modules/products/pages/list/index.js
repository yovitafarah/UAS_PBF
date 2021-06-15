// import libs
import { connect } from 'react-redux'
import Products from '../../Products'

// import components
import Page from './Page'

const mapStateToProps = state => {
  const {data, ...meta} = state.products
  
  return {
    products: data?.map((product) => new Products(product)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
