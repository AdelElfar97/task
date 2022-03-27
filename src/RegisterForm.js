import { useState } from "react";
function RegisterForm() {
  const [userForm, setUserForm] = useState({
    name:"",
    email:"",
    username: "Marina",
    password: "",
    confirmPass: "",
  });

  const [userFormErrs, setUserFormErrs] = useState({
      nameErr:null,
      emailErr:null,

    usernameErr: null,
    passwordErr: null,
    confirmPasswordErr: null,

  });

  const handleFormChange = (event) => {
    console.log(event.target.id, event.target.value);

    if (event.target.id === "name") {
        setUserForm({
          ...userForm,
          name: event.target.value,
        });
        setUserFormErrs({
          ...userFormErrs,
          nameErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value.length < 3
              ? "Min. length is 3 characters"
              : null,
        });
      }

      else if (event.target.id === "email") {
        setUserForm({
          ...userForm,
          email: event.target.value,
        });
        setUserFormErrs({
          ...userFormErrs,
          emailErr:
            !event.target.value.match (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
              ? "email format wrong"
              : null,
        });
      }
    else if (event.target.id === "username") {
      setUserForm({
        ...userForm,
        username: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        usernameErr:
          event.target.value.length === 0
            ? "This field is required"
            : !event.target.value.match(/^\S+$/)
            ? "no spaces allowed"
            : null,
      });
    } else if (event.target.id === "password") {
      setUserForm({
        ...userForm,
        password: event.target.value,
      });
      setUserFormErrs({
        ...userFormErrs,
        passwordErr:
          event.target.value.length === 0
            ? "This field is required"
            : !event.target.value.match( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/)
            ? "pass must contain uppercase lowercase and speial char and a num"
            : null,
      });
      
    }
    
    else if (event.target.id === "confirmPassword") {
        setUserForm({
          ...userForm,
          confirmPassword: event.target.value,
        });
        setUserFormErrs({
          ...userFormErrs,
          confirmPasswordErr:
            event.target.value.length === 0
              ? "This field is required"
              : event.target.value !=userForm.password
              ? "no match"
              : null,
        });
      }else {
      setUserForm({
        ...userForm,
        password: event.target.value,
      });
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (
      !userFormErrs.nameErr &&
      !userFormErrs.emailErr &&

      !userFormErrs.usernameErr &&
      !userFormErrs.passwordErr &&
      !userFormErrs.confirmPasswordErr
    ) {
      console.log(userForm);
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>

    <div className="mb-3">
    <label htmlFor="name" className="form-label">
      name
    </label>
    <input
      type="text"
      className={`form-control ${
        userFormErrs.nameErr ? "border-danger" : ""
      }`}
      id="name"
      aria-describedby="nameHelp"
      value={userForm.name}
      onChange={handleFormChange}
    />
    <div id="nameHelp" className="form-text text-danger">
      {userFormErrs.nameErr}
    </div>
  </div>


      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className={`form-control ${
            userFormErrs.usernameErr ? "border-danger" : ""
          }`}
          id="username"
          aria-describedby="usernameHelp"
          value={userForm.username}
          onChange={handleFormChange}
        />
        <div id="usernameHelp" className="form-text text-danger">
          {userFormErrs.usernameErr}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          value={userForm.email}
          onChange={handleFormChange}
        />
        <div id="emailHelp" className="form-text text-danger">
          {userFormErrs.emailErr}
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
        password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          aria-describedby="passwordHelp"
          value={userForm.password}
          onChange={handleFormChange}
        />
        <div id="passwordHelp" className="form-text text-danger">
          {userFormErrs.passwordErr}
        </div>
      </div>


      <div className="mb-3">
      <label htmlFor="confirmPassword" className="form-label">
      confirmPassword
      </label>
      <input
        type="password"
        className="form-control"
        id="confirmPassword"
        aria-describedby="confirmPasswordHelp"
        value={userForm.confirmPassword}
        onChange={handleFormChange}
      />
      <div id="confirmPasswordHelp" className="form-text text-danger">
        {userFormErrs.confirmPasswordErr}
      </div>
    </div>


      
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
