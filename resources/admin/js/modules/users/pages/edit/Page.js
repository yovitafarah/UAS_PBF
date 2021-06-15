// import libs
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {main, update} from '../../service'
import {Validator} from 'ree-validate'

// import components
import Form from './components/Form'
import Breadcrumb from "../../../../common/breadcrumb";
import {edit} from "../../service";

class Page extends Component {
    static displayName = 'UserPage'
    static propTypes = {
        match: PropTypes.object.isRequired,
        user: PropTypes.object,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.validator = new Validator({
            'name': 'required|min:3',
            'email': 'required|email',
        })

        const user = this.props.user.toJson()

        this.state = {
            user,
            errors: this.validator.errors
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const { match, user, dispatch } = this.props

        if (!user.id) {
            dispatch(edit(match.params.id))
        }
    }


    handleChange(name, value) {
        const {errors} = this.validator

        this.setState({user: {...this.props.user, [name]: value}})

        errors.remove(name)

        this.validator.validate(name, value)
            .then(() => {
                this.setState({errors})
            })
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = this.state.user
        const {errors} = this.validator

        this.validator.validateAll(user)
            .then((success) => {
                if (success) {
                    this.submit(user)
                } else {
                    this.setState({errors})
                }
            })
    }

    submit(user) {
        this.props.dispatch(update(user))
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
        const { user } = this.props

        if (user.id) {
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
                                { this.renderForm() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default Page
