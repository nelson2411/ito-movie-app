import React from "react"
import { useForm } from "react-hook-form"

const LoginPage = () => {
  const { register, handleSubmit } = useForm()

  const submitForm = (data: any) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          {...register("email", { required: true })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          {...register("password", { required: true })}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  )
}

export default LoginPage
