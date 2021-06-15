import { connect } from 'react-redux'
import Products from "../../Products";

// import components
import Page from './Page'

const mapStateToProps = () => {
  const product = new Products({})
  return {
    product
  }
}

export default connect(mapStateToProps)(Page)
