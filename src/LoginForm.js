import React from "react";
import { withFormik, Form, Field } from "formik";
import { useState, useEffect } from "react";
const checkEmail =function(email)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(regexEmail)) {
    return true;
  } else {
    return false;
  }
}
const checkPass =function(pass)
{
 return(pass.length>=8)
}
const LoginForm = (props) => {
  const loginPageStyle = {
    margin: "32px auto 37px",
    maxWidth: "530px",
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
  };
  const [isChecked, setIsChecked] = useState(false);
  const [textOrPass, setIsPass] = useState("password");

  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });

  const [userFormErrs, setUserFormErrs] = useState({
    usernameErr: null,
    ageErr: null,
    positionErr: null,
  });

  
  const handleFormChange = (event) => {
    console.log(event.target.id, event.target.value);
    if (event.target.id === "username") {
      setUserForm({
        ...userForm,
        username: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        usernameErr:
          event.target.value.length === 0
            ? "This field is required"
            : event.target.value.length < 3
            ? "Min. length is 3 characters"
            : null,
      });
    } else if (event.target.id === "age") {
      setUserForm({
        ...userForm,
        age: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        ageErr:
          event.target.value.length === 0
            ? "This field is required"
            : event.target.value < 18
            ? "Min. Age is 18"
            : null,
      });
    } else {
      setUserForm({
        ...userForm,
        position: event.target.value,
      });
    }
  };

  const handleSubmitForm = (e) => {
    console.log("A");
    e.preventDefault();
    if (
      !userFormErrs.usernameErr &&
      !userFormErrs.ageErr &&
      !userFormErrs.positionErr
    ) {
      console.log(userForm);
    }
  };


  
  const handleOnChange = () => {
    setIsChecked(!isChecked);

    if (textOrPass === "password") setIsPass("text");
    else setIsPass("password");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="login-wrapper" style={loginPageStyle}>
          <h2>Login Page</h2>
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                name="email"
                className={"form-control"}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">visible Password</label>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleOnChange}
              ></input>
              <Field
                type={textOrPass}
                name="password"
                className={"form-control"}
                placeholder="Password"
              />
            </div>
            <button onSubmit={handleSubmitForm} className="btn btn-primary">
              Login
            </button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

const LoginFormik = withFormik({
  mapPropsToValues: (props) => {
    return {
      email: props.email || "",
      password: props.password || "",
    };
  },
  handleSubmit: (values) => {
    var errEmail = checkEmail(values.email);
    var errPass = checkPass(values.password);

    if(errEmail&&errPass)
    console.log(values)

  },
})(LoginForm);

export default LoginFormik;
