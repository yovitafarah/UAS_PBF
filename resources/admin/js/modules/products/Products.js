import moment from 'moment'
import Model from '../../utils/Model'
import User from '../users/Users'

class Products extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.name = props.name || ''
    this.price = props.price || ''
    this.discount = props.discount || ''
    this.short_details = props.short_details || ''
    this.descriptions = props.descriptions || ''
    this.stock = props.stock || ''
    this.new = props.new || ''
    this.sale = props.sale || ''
    this.pictures = props.pictures || ''
    this.rating = props.rating || ''
    this.createdAt = props.createdAt ? moment(props.createdAt) : null
    this.updatedAt = props.updatedAt ? moment(props.updatedAt) : null

    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Products
