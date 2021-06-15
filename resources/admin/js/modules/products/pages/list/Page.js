// import libs
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Breadcrumb from "../../../../common/breadcrumb";
import {main, update, destroy} from '../../service'

// import components
import Row from './components/Row'
import Pagination from './components/Pagination'
import {Link} from 'react-router-dom'

class Page extends Component {
    static displayName = 'ProductPage'
    static propTypes = {
        meta: PropTypes.object.isRequired,
        products: PropTypes.array,
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

    renderProducts() {
        return this.props.products.map((product, index) => {
            console.log(product)
            return <Row key={index}
                        product={product}
                        index={index}
                        handleRemove={this.handleRemove}/>
        })
    }

    render() {
        return (<Fragment>
            <Breadcrumb title="Products" parent="Physical"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="btn-popup pull-right">
                                    <Link to='/admin/products/create' className="btn btn-primary">Add Product</Link>
                                </div>
                                <div className="clearfix"/>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="thead-inverse" >
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Short Details</th>
                                            <th>Descriptions</th>
                                            <th>Stock</th>
                                            <th>New</th>
                                            <th>Sale</th>
                                            <th>Rating</th>
                                            <th>Created At</th>
                                            <th>Updated At</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderProducts()}
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
