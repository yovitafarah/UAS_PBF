import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'ProductRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  product: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const Row = ({ index, product, handleRemove }) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{product.name}</td>
    <td>{product.price}</td>
    <td>{product.discount}</td>
    <td>{product.short_details}</td>
    <td>{product.description}</td>
    <td>{product.stock}</td>
    <td>{product.new}</td>
    <td>{product.sale}</td>
    <td>{product.rating}</td>
    <td>{product.createdAt && product.createdAt.format('MMMM, DD YYYY')}</td>
    <td>{product.updatedAt && product.updatedAt.format('MMMM, DD YYYY')}</td>
    <td>
      <div className="btn-group pull-right" role="group" aria-label="Actions">
        <Link className="btn btn-primary" to={`/admin/products/${product.id}/edit`}>
          <i className="fa fa-pencil" style={{width: 35, fontSize: 20, padding: 11}}/>
        </Link>
        <button className="btn btn-danger" onClick={() => handleRemove(product.id)}>
          <i className="fa fa-trash-o" style={{width: 35, fontSize: 20, padding: 11}}/>
        </button>
      </div>
    </td>
  </tr>)
}

Row.displayName = displayName
Row.propTypes = propTypes

export default Row