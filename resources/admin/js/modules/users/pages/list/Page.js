// import libs
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Breadcrumb from "../../../../common/breadcrumb";
import {main, destroy} from '../../service'

// import components
import Row from './components/Row'
import Pagination from './components/Pagination'
import {Link} from 'react-router-dom'

class Page extends Component {
    static displayName = 'UserPage'
    static propTypes = {
        meta: PropTypes.object.isRequired,
        users: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props

        dispatch(main({}))
    }

    pageChange = (pageNumber) => {
        this.props.dispatch(main({pageNumber}))
    }


    handleRemove = (id) => {
        this.props.dispatch(destroy(id))
    }

    renderUsers() {
        if (this.props.users) {
        return this.props.users.map((user, index) => {
                return <Row key={index}
                            user={user}
                            index={index}
                            handleRemove={this.handleRemove}/>
            })
        }
    }

    render() {
        return (<Fragment>
            <Breadcrumb title="User" parent="Users"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="btn-popup pull-right">
                                    <Link to='/admin/users/create' className="btn btn-primary">Add User</Link>
                                </div>
                                <div className="clearfix"/>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="thead-inverse" >
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Created At</th>
                                            <th>Updated At</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderUsers()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>)
    }
}

export default Page
