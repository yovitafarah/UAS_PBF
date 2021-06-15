import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'UserForm'
const propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

const Form = ({user, errors, onChange, onSubmit}) => {

    function handleChange(name, value) {
        if (value !== user[name]) {
            onChange(name, value)
        }
    }

    return <form onSubmit={e => onSubmit(e)}>
        <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">name</label>
            <div className="col-sm-10">
                <input type="text"
                       id="name"
                       name="name"
                       className={`form-control ${errors.has('name') && 'is-invalid'}`}
                       placeholder="name"
                       value={user.name || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}/>
                {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">email</label>
            <div className="col-sm-10">
                <input type="email"
                       id="email"
                       name="email"
                       className={`form-control ${errors.has('email') && 'is-invalid'}`}
                       placeholder="email"
                       value={user.email || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}/>
                {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
            </div>
        </div>

        <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">password</label>
            <div className="col-sm-10">
                <input type="password"
                       id="password"
                       name="password"
                       className={`form-control ${errors.has('password') && 'is-invalid'}`}
                       placeholder="password"
                       value={user.password || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}/>
                {errors.has('password') && <div className="invalid-feedback">{errors.first('password')}</div>}
            </div>
        </div>

        <div className="form-group row">
            <div className="col-sm-10 ml-auto">
                <button disabled={errors.any()} type="submit" className="btn btn-primary">Create</button>
            </div>
        </div>
    </form>
}

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
