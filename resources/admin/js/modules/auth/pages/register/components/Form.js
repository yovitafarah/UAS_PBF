import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const displayName = 'RegisterFrom'

const propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirmation: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

const Form = ({name, email, password, passwordConfirmation, errors, handleChange, handleSubmit}) => {
    return (
        <div className="react-tabs">
            <ul className="nav nav-tabs tab-coupon">
                <li className="nav-item">
                    <Link to='/login' className="nav-link">
                        <span className="icon-user me-2"/>Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="#">
                        <span className="icon-unlock me-2"/>Register</Link>
                </li>
            </ul>
            <div className="tab-content" id="top-tabContent">
                <div className="tab-pane fade show active" id="top-profile" role="tabpanel"
                     aria-labelledby="top-profile-tab">
                    <form className="form-horizontal auth-form" onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <input type="text"
                                   className={`form-control ${errors.has('name') && 'is-invalid'}`}
                                   name="name"
                                   id="name"
                                   placeholder="Full Name"
                                   value={name || ''}
                                   onChange={e => handleChange(e.target.name, e.target.value)}
                                   required
                                   autoFocus/>
                            {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
                        </div>
                        <div className="form-group">
                            <input type="email"
                                   className={`form-control  ${errors.has('email') && 'is-invalid'}`}
                                   name="email"
                                   id="email"
                                   placeholder="Email address"
                                   value={email || ''}
                                   onChange={e => handleChange(e.target.name, e.target.value)}
                                   required
                                   autoFocus/>
                            {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
                        </div>
                        <div className="form-group">
                            <input type="password"
                                   className={`form-control  ${errors.has('password') && 'is-invalid'}`}
                                   id="password"
                                   name="password"
                                   placeholder="Password"
                                   value={password || ''}
                                   onChange={e => handleChange(e.target.name, e.target.value)}
                                   required/>
                            {errors.has('password') && <div className="invalid-feedback">{errors.first('password')}</div>}
                        </div>
                        <div className="form-group">
                            <input type="password"
                                   className={`form-control  ${errors.has('passwordConfirmation') && 'is-invalid'}`}
                                   id="passwordConfirmation"
                                   name="passwordConfirmation"
                                   placeholder="Confirm Password"
                                   value={passwordConfirmation || ''}
                                   onChange={e => handleChange(e.target.name, e.target.value)}
                                   required/>
                            {errors.has('passwordConfirmation') &&
                            <div className="invalid-feedback">{errors.first('passwordConfirmation')}</div>}
                        </div>
                        <div className="form-terms">
                            <div className="custom-control custom-checkbox mr-sm-2">
                                <input type="checkbox" className="custom-control-input"
                                       id="customControlAutosizing"/>
                                <label className="d-block">
                                    <input className="checkbox_animated" id="chk-ani2" type="checkbox"/>
                                    I agree all statements in <span><a href="">Terms &amp; Conditions</a></span>
                                </label>
                            </div>
                        </div>
                        <div className="form-button">
                            <button className="btn btn-primary" type="submit"
                                    disabled={errors.any()}>Register
                            </button>
                        </div>
                        <div className="form-footer">
                            <span>Or Sign up with social platforms</span>
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
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
