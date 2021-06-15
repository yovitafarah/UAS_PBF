import { connect } from 'react-redux'
import Products from "../../Products";

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  const product = state.products.data.find(product => product.id === Number(params.id))
  return {
    product: product ? new Products(product) : new Products({})
  }
}

export default connect(mapStateToProps)(Page)
