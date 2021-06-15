// import libs
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {update, edit} from '../../service'
import {Validator} from 'ree-validate'

// import components
import Form from './components/Form'
import Breadcrumb from "../../../../common/breadcrumb";
import {Link} from "react-router-dom";

class Page extends Component {
    static displayName = 'EditArticle'
    static propTypes = {
        match: PropTypes.object.isRequired,
        category: PropTypes.object,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.validator = new Validator({
            name: 'required|min:3',
        })

        const category = this.props.category.toJson()

        this.state = {
            category,
            errors: this.validator.errors
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    UNSAFE_componentWillMount() {
        this.loadArticle()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const category = nextProps.category.toJson()

        if (!_.isEqual(this.state.category, category)) {
            this.setState({category})
        }

    }

    loadArticle() {
        const {match, category, dispatch} = this.props

        if (!category.id) {
            dispatch(edit(match.params.id))
        }
    }

    handleChange(name, value) {
        const {errors} = this.validator

        this.setState({category: {...this.state.category, [name]: value}})

        errors.remove(name)

        this.validator.validate(name, value)
            .then(() => {
                this.setState({errors})
            })
    }

    handleSubmit(e) {
        e.preventDefault()
        const category = this.state.category
        const {errors} = this.validator

        this.validator.validateAll(category)
            .then((success) => {
                if (success) {
                    this.submit(category)
                } else {
                    this.setState({errors})
                }
            })
    }

    submit(category) {
        this.props.dispatch(update(category))
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
        const {category} = this.props

        if (category.id) {
            return <Form {...this.state}
                         onChange={this.handleChange}
                         onSubmit={this.handleSubmit}/>
        }
    }

    render() {
        return <Fragment>
            <Breadcrumb title="Products" parent="Physical"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="clearfix"/>
                                {this.renderForm()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default Page
