import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'ArticleRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  category: PropTypes.object.isRequired,
  handleRemove: PropTypes.func.isRequired,
}

const Row = ({ index, category, handleRemove }) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{category.name}</td>
    <td>{category.createdAt && category.createdAt.format('MMMM, DD YYYY')}</td>
    <td>{category.updatedAt && category.updatedAt.format('MMMM, DD YYYY')}</td>
    <td>
      <div className="btn-group pull-right" role="group" aria-label="Actions">
        <Link className="btn btn-primary" to={`/admin/categories/${category.id}/edit`}>
          <i className="fa fa-pencil" style={{width: 35, fontSize: 20, padding: 11}}/>
        </Link>
        <button className="btn btn-danger" onClick={() => handleRemove(category.id)}>
          <i className="fa fa-trash-o" style={{width: 35, fontSize: 20, padding: 11}}/>
        </button>
      </div>
    </td>
  </tr>)
}

Row.displayName = displayName
Row.propTypes = propTypes

export default Row