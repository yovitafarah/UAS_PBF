import moment from 'moment'
import Model from '../../utils/Model'
import User from '../users/Users'

class Categories extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.name = props.name || ''
    this.createdAt = props.createdAt ? moment(props.createdAt) : null
    this.updatedAt = props.updatedAt ? moment(props.updatedAt) : null

    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Categories
