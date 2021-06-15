import { connect } from 'react-redux'
import Article from '../../../../category/Article'

// import components
import Page from './Page'

const mapStateToProps = (state, router) => {
  const { params } = router.match
  const category = state.categories.data.find(category => category.slug === params.slug)
  return {
    category: category ? new Article(category) : new Article({})
  }
}

export default connect(mapStateToProps)(Page)
