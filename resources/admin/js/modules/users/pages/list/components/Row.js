import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'UsersRow'
const propTypes = {
  index: PropTypes.number.isRequired,
  user: PropTypes.object,
  handleRemove: PropTypes.func.isRequired,
}

const Row = ({ index, user, handleRemove }) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.createdAt && user.createdAt.format('MMMM, DD YYYY')}</td>
    <td>{user.updatedAt && user.updatedAt.format('MMMM, DD YYYY')}</td>
    <td>
      <div className="btn-group pull-right" role="group" aria-label="Actions">
        <Link className="btn btn-primary" to={`/admin/users/${user.id}/edit`}>
          <i className="fa fa-pencil" style={{width: 35, fontSize: 20, padding: 11}}/>
        </Link>
        <button className="btn btn-danger" onClick={() => handleRemove(user.id)}>
          <i className="fa fa-trash-o" style={{width: 35, fontSize: 20, padding: 11}}/>
        </button>
      </div>
    </td>
  </tr>)
}

Row.displayName = displayName
Row.propTypes = propTypes

export default Row