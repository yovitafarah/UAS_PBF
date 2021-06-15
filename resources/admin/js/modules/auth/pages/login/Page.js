// import libs
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import {Redirect} from 'react-router-dom'
import {login} from '../../service'
import {Validator} from 'ree-validate'
import Stats from '../../../../../../admin/assets/images/dashboard/stats.png';

// import components
import Form from './components/Form'

// initialize component
class Page extends Component {
    // set name of the component
    static displayName = 'LoginPage'

    // validate props
    static propTypes = {
        isAuthenticated: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.validator = new Validator({
            email: 'required|email',
            password: 'required|min:6'
        })

        // set the state of the app
        this.state = {
            credentials: {
                email: '',
                password: '',
            },
            errors: this.validator.errors
        }
    }

    // event to handle input change
    handleChange = (name, value) => {
        const {errors} = this.validator

        this.setState({credentials: {...this.state.credentials, [name]: value}})

        errors.remove(name)

        this.validator.validate(name, value)
            .then(() => {
                this.setState({errors})
            })
    }

    // event to handle form submit
    handleSubmit = e => {
        e.preventDefault()
        const {credentials} = this.state
        const {errors} = this.validator

        this.validator.validateAll(credentials)
            .then((success) => {
                if (success) {
                    this.submit(credentials)
                } else {
                    this.setState({errors})
                }
            })
    }

    submit(credentials) {
        this.props.dispatch(login(credentials))
            .catch(({error, statusCode}) => {
                const {errors} = this.validator

                if (statusCode === 422) {
                    _.forOwn(error, (message, field) => {
                        errors.add(field, message);
                    });
                } else if (statusCode === 401) {
                    errors.add('password', error);
                }

                this.setState({errors})
            })
    }

    // render component
    render() {

        // check if user is authenticated then redirect him to home page
        if (this.props.isAuthenticated) {
            return <Redirect to="/admin/dashboard"/>
        }
        const props = {
            email: this.state.credentials.email,
            password: this.state.credentials.password,
            errors: this.state.errors,
            handleChange: this.handleChange,
            handleSubmit: this.handleSubmit,
        }

        return (
            <div className="page-wrapper">
                <div className="authentication-box">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 p-0 card-left">
                                <div className="card bg-primary">
                                    <div className="svg-icon">
                                        <img src={Stats} className="Img-fluid"/>
                                    </div>
                                    <div>
                                        <div>
                                            <h3>Welcome to React.js</h3>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                                industry. Lorem Ipsum has been the industrys standard dummy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 p-0 card-right">
                                <div className="card tab2-card">
                                    <div className="card-body">
                                        <Form {...props} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Page
