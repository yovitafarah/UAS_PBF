// import libs
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {update, edit} from '../../service'
import {Validator} from 'ree-validate'

// import components
import Form from './components/Form'
import Breadcrumb from "../../../../common/breadcrumb";

class Page extends Component {
    static displayName = 'EditProduct'
    static propTypes = {
        match: PropTypes.object.isRequired,
        product: PropTypes.object,
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

    UNSAFE_componentWillMount() {
        this.loadProduct()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const product = nextProps.product.toJson()

        if (!_.isEqual(this.state.product, product)) {
            this.setState({product})
        }

    }

    loadProduct() {
        const {match, product, dispatch} = this.props

        if (!product.id) {
            dispatch(edit(match.params.id))
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
        this.props.dispatch(update(product))
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

    renderForm() {
        const {product} = this.props

        if (product.id) {
            return <Form {...this.state}
                         onChange={this.handleChange}
                         onSubmit={this.handleSubmit}/>
        }
    }

    render() {
        return <Fragment>
            <Breadcrumb title="Edit User" parent="Users"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="clearfix"/>
                                {this.renderForm()}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default Page
