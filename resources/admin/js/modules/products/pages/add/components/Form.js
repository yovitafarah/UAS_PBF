import React from 'react'
import PropTypes from 'prop-types'

const displayName = 'ProductForm'
const propTypes = {
    product: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

const Form = ({product, errors, onChange, onSubmit}) => {

    function handleChange(name, value) {
        if (value !== product[name]) {
            onChange(name, value)
        }
    }
    function handleChangePrice(name, value) {
        if (value !== product[name]) {
            onChange(name, value)
        }
    }

    return <form onSubmit={e => onSubmit(e)} >
        <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
                <input type="text"
                       id="name"
                       name="name"
                       className={`form-control ${errors.has('name') && 'is-invalid'}`}
                       placeholder="name"
                       value={product.name || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}/>
                {errors.has('name') && <div className="invalid-feedback">{errors.first('name')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
            <div className="col-sm-10">
                <input type="number"
                       id="price"
                       name="price"
                       className={`form-control ${errors.has('price') && 'is-invalid'}`}
                       placeholder="price"
                       value={product.price || ''}
                       onChange={e => handleChangePrice(e.target.name, e.target.value)}/>
                {errors.has('price') && <div className="invalid-feedback">{errors.first('price')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="discount" className="col-sm-2 col-form-label">Discount</label>
            <div className="col-sm-10">
                <input type="number"
                       id="discount"
                       name="discount"
                       className={`form-control ${errors.has('discount') && 'is-invalid'}`}
                       placeholder="discount"
                       value={product.discount || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}/>
                {errors.has('discount') && <div className="invalid-feedback">{errors.first('discount')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="short_details" className="col-sm-2 col-form-label">Short Detail</label>
            <div className="col-sm-10">
                <input type="text"
                       id="short_details"
                       name="short_details"
                       className={`form-control ${errors.has('short_details') && 'is-invalid'}`}
                       placeholder="short_details"
                       value={product.short_details || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}/>
                {errors.has('short_details') && <div className="invalid-feedback">{errors.first('short_details')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
                <textarea type="text"
                       id="description"
                       name="description"
                       className={`form-control ${errors.has('description') && 'is-invalid'}`}
                       placeholder="description"
                       value={product.description || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}/>
                {errors.has('description') && <div className="invalid-feedback">{errors.first('description')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="stock" className="col-sm-2 col-form-label">Stock</label>
            <div className="col-sm-10">
                <input type="number"
                       id="stock"
                       name="stock"
                       className={`form-control ${errors.has('stock') && 'is-invalid'}`}
                       placeholder="stock"
                       value={product.stock || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}/>
                {errors.has('stock') && <div className="invalid-feedback">{errors.first('stock')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="new" className="col-sm-2 col-form-label">New</label>
            <div className="col-sm-10">
                <select
                       id="new"
                       name="new"
                       className={`form-control ${errors.has('new') && 'is-invalid'}`}
                       onChange={e => handleChange(e.target.name, e.target.value)}>
                    <option disabled>Select option new</option>
                    <option hidden></option>
                    <option value='true'>True</option>
                    <option value='false'>False</option>
                </select>
                    {errors.has('new') && <div className="invalid-feedback">{errors.first('new')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="sale" className="col-sm-2 col-form-label">Sale</label>
            <div className="col-sm-10">
                <select
                    id="sale"
                    name="sale"
                    className={`form-control ${errors.has('sale') && 'is-invalid'}`}
                    onChange={e => handleChange(e.target.name, e.target.value)}>
                    <option disabled>Select option sale</option>
                    <option hidden></option>
                    <option value='true'>True</option>
                    <option value='false'>False</option>
                </select>
                {errors.has('sale') && <div className="invalid-feedback">{errors.first('sale')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="rating" className="col-sm-2 col-form-label">Rating</label>
            <div className="col-sm-10">
                <input type="number"
                       id="rating"
                       name="rating"
                       className={`form-control ${errors.has('rating') && 'is-invalid'}`}
                       placeholder="rating"
                       value={product.rating || ''}
                       onChange={e => handleChange(e.target.name, e.target.value)}/>
                {errors.has('rating') && <div className="invalid-feedback">{errors.first('rating')}</div>}
            </div>
        </div>
        <div className="form-group row">
            <label htmlFor="pictures" className="col-sm-2 col-form-label">Pictures</label>
            <div className="col-sm-10">
                <input type="file"
                       id="pictures"
                       name="pictures[]"
                       className={`form-control ${errors.has('pictures') && 'is-invalid'}`}
                       placeholder="pictures"
                       onChange={e => handleChange(e.target.name,e.target.files[0])}/>
                {errors.has('pictures') && <div className="invalid-feedback">{errors.first('pictures')}</div>}
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
