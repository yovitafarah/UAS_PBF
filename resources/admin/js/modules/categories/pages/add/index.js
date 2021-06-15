import { connect } from 'react-redux'
import Categories from '../../Categories'

// import components
import Page from './Page'

const mapStateToProps = () => {
  const category = new Categories({})
  return {
    category
  }
}

export default connect(mapStateToProps)(Page)
