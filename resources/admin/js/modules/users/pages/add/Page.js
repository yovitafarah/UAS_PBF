// import libs
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {store} from '../../service'
import {Validator} from 'ree-validate'

// import components
import Form from './components/Form'
import Breadcrumb from "../../../../common/breadcrumb";

class Page extends Component {
    static displayName = 'AddUser'
    static propTypes = {
        user: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)

        this.validator = new Validator({
            name: 'required|min:3',
            email: 'required|min:3',
            password: 'required|min:3',
        })

        const user = this.props.user.toJson()

        this.state = {
            user,
            errors: this.validator.errors
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const user = nextProps.user.toJson()

        if (!_.isEqual(this.state.user, user)) {
            this.setState({user})
        }

    }

    handleChange(name, value) {
        const {errors} = this.validator

        this.setState({user: {...this.state.user, [name]: value}})

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
        this.props.dispatch(store(user))
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
            <Breadcrumb title="User" parent="Users"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
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
