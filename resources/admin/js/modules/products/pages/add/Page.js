// import libs
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {store} from '../../service'
import {Validator} from 'ree-validate'

// import components
import Form from './components/Form'
import Breadcrumb from "../../../../common/breadcrumb";
import {Link} from "react-router-dom";

class Page extends Component {
    static displayName = 'AddProduct'
    static propTypes = {
        product: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.validator = new Validator({
            name: 'required|min:3',
            price: 'required',
            discount: 'required',
            short_details: 'required',
            description: 'required',
            stock: 'required',
            new: 'required',
            'pictures[]': 'required',
            sale: 'required',
            rating: 'required'
        })

        const product = this.props.product.toJson()

        this.state = {
            product,
            errors: this.validator.errors
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const product = nextProps.product.toJson()

        if (!_.isEqual(this.state.product, product)) {
            this.setState({product})
        }

    }

    handleChange(name, value) {
        const {errors} = this.validator

        this.setState({product: {...this.state.product, [name]: value}})

        errors.remove(name)

        this.validator.validate(name, value)
            .then(() => {
                this.setState({errors})
            })
    }

    handleSubmit(e) {
        e.preventDefault()
        const product = this.state.product
        const {errors} = this.validator
        console.log(product)

        this.validator.validateAll(product)
            .then((success) => {
                if (success) {
                    this.submit(product)
                } else {
                    this.setState({errors})
                }
            })
    }

    submit(product) {
        this.props.dispatch(store(product))
            .catch(({error, statusCode}) => {
                const {errors} = this.validator

                if (statusCode === 422) {
                    _.forOwn(error, (message, field) => {
                        errors.add(field, message);
                    });
                }

                this.setState({errors})
            })
    }

    render() {
        return <Fragment>
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
                                <Form {...this.state}
                                      onChange={this.handleChange}
                                      onSubmit={this.handleSubmit}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default Page
