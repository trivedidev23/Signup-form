import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./form.css";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import { registerFan } from "../../actions/auth";

const Fan = ({ registerFan }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    Firstname: "",
    Lastname: "",
    Username: "",
    Email: "",
    Password: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    registerFan({ Firstname, Lastname, Username, Email, Password });
    alert("Successfully, Signed Up for your Fan account.");
  };

  const { Firstname, Lastname, Username, Email, Password } = formData;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8">
          <div className="login_form">
            <ul className="nav nav-pills">
              <li className="nav-item d-flex justify-content-center">
                <NavLink className="nav-link active" to="/">
                  FAN SIGNUP
                </NavLink>
                <NavLink className="nav-link" to="/talent">
                  TALENT SIGNUP
                </NavLink>
              </li>
            </ul>
            <div className="account">
              <h2>Create Your Fan Account</h2>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
              <div className="form-group">
                <label className="label-hed">First Name*</label>
                <input
                  type="text"
                  className="form_input form-control"
                  placeholder="First Name"
                  {...register("Firstname", {
                    onChange: (e) => onChange(e),
                    required: "Required",
                    maxLength: 12,
                  })}
                  value={Firstname}
                />
              </div>
              <p className="err">{errors.Firstname?.message}</p>
              <div className="form-group">
                <label className="label-hed">Last Name*</label>
                <input
                  type="text"
                  className="form-control form_input"
                  placeholder="Last Name"
                  value={Lastname}
                  {...register("Lastname", {
                    onChange: (e) => onChange(e),
                    required: "Required",
                    maxLength: 12,
                  })}
                />
              </div>
              <p className="err">{errors.Lastname?.message}</p>
              <div className="form-group">
                <label className="label-hed">Username*</label>
                <input
                  type="text"
                  className="form-control form_input"
                  placeholder="Username"
                  value={Username}
                  {...register("Username", {
                    onChange: (e) => onChange(e),
                    required: "Required",
                    maxLength: 12,
                  })}
                />
              </div>
              <p className="err">{errors.Username?.message}</p>
              <div className="form-group">
                <label className="label-hed">Email address*</label>
                <input
                  type="email"
                  className="form-control form_input"
                  placeholder="Email address"
                  value={Email}
                  onChange={(e) => onChange(e)}
                  {...register("Email", {
                    onChange: (e) => onChange(e),
                    required: "Invalid Email",
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </div>
              <p className="err">{errors.Email?.message}</p>
              <div className="form-group">
                <label className="label-hed">Password*</label>
                <input
                  type="password"
                  className="form-control form_input"
                  placeholder="Password"
                  value={Password}
                  {...register("Password", {
                    onChange: (e) => onChange(e),
                    required: "Required",
                    maxLength: 12,
                    minLength: 6,
                  })}
                />
              </div>
              <p className="err">{errors.Password?.message}</p>
              <div className="form-group form-check d-flex justify-content-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  {...register("Checkbox", { required: "tick the checkbox" })}
                />
                <label className="form-check-label">
                  I agree to the
                  <span className="tandc"> Terms and Conditions</span>
                </label>
              </div>
              <p className="err-checkbox">{errors.Checkbox?.message}</p>
              <div className="text-center">
                <button type="submit" className="btn btn-primary submit_btn">
                  SIGN UP
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
};

export default connect(null, { registerFan })(Fan);
