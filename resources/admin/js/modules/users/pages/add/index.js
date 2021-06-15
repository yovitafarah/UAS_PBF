import { connect } from 'react-redux'
import Users from "../../Users";

// import components
import Page from './Page'

const mapStateToProps = () => {
  const user = new Users({})
  return {
    user
  }
}

export default connect(mapStateToProps)(Page)
