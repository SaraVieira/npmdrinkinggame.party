import React from 'react'

export default ({ submitForm, onChange, show }) =>
  show ? (
    <form onSubmit={submitForm} className="animated fadeInUp input-form">
      <label htmlFor="package-name" className="visually-hidden">
        Package name
      </label>
      <input
        type="text"
        className="input"
        required
        id="package-name"
        minLength="3"
        pattern="[a-zA-Z0-9-]+"
        onChange={onChange}
      />
      <button type="submit" className="btn is-primary">
        Try your luck
      </button>
    </form>
  ) : null
