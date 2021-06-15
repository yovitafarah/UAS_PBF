import { connect } from 'react-redux'
import Categories from '../../Categories'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  const category = state.categories.data.find(category => category.id === Number(params.id))
  return {
    category: category ? new Categories(category) : new Categories({})
  }
}

export default connect(mapStateToProps)(Page)
