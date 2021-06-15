import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const displayName = 'LoginForm'
const propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    errors: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
}

const Form = ({email, password, errors, handleChange, handleSubmit}) => (

    <div className="react-tabs">
        <ul className="nav nav-tabs tab-coupon">
            <li className="nav-item">
                <Link className="nav-link active" to="#">
                    <span className="icon-user me-2"/>Login</Link>
            </li>
            <li className="nav-item">
                <Link to='/register' className="nav-link">
                    <span className="icon-unlock me-2"/>Register</Link>
            </li>
        </ul>
        <div className="tab-content" id="top-tabContent">
            <div className="tab-pane fade show active" id="top-profile" role="tabpanel"
                 aria-labelledby="top-profile-tab">
                <form className="form-horizontal auth-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <input type="text"
                               className={`form-control ${errors.has('email') && 'is-invalid'}`}
                               name="email"
                               id="email"
                               placeholder="Email address"
                               value={email || ''}
                               onChange={e => handleChange(e.target.name, e.target.value)}
                               required
                               autoFocus/>
                        {errors.has('email') &&
                        <div className="invalid-feedback">{errors.first('email')}</div>}
                    </div>
                    <div className="form-group">
                        <input type="password"
                               className={`form-control ${errors.has('password') && 'is-invalid'}`}
                               id="password"
                               name="password"
                               placeholder="Password"
                               value={password || ''}
                               onChange={e => handleChange(e.target.name, e.target.value)}
                               required/>
                        {errors.has('password') &&
                        <div className="invalid-feedback">{errors.first('password')}</div>}
                    </div>
                    <div className="form-terms">
                        <div className="custom-control custom-checkbox mr-sm-2">
                            <input type="checkbox" className="custom-control-input"
                                   id="customControlAutosizing"/>
                            <label className="d-block">
                                <input className="checkbox_animated" name="remember" type="checkbox"
                                /> Reminder Me
                                <span className="pull-right">
                                    <Link to='/register' className="btn btn-default forgot-pass p-0">Signup here</Link>
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="form-button">
                        <button className="btn btn-primary" type="submit"
                                disabled={errors.any()}>Login
                        </button>
                    </div>
                    <div className="form-footer">
                        <span>Or Login up with social platforms</span>
                        <ul className="social">
                            <li><a className="fa fa-facebook" href=""/></li>
                            <li><a className="fa fa-twitter" href=""/></li>
                            <li><a className="fa fa-instagram" href=""/></li>
                            <li><a className="fa fa-pinterest" href=""/></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
