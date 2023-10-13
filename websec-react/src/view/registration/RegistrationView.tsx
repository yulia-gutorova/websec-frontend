
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import classes from "./styles/RegistrationView.module.css";
import { useState } from "react";

interface IFormInput {
  username: string;
  password: string;
  checkbox: boolean;
}

export const RegistrationView = () => {
  const [errorMessage, setErrorMessage] = useState("")
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {


   if (data.checkbox) {
   
    const user = {
      username: data.username,
      password: data.password,
    };
    
    try {
      const resp = await fetch(import.meta.env.VITE_BASE_URL + "/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log(resp)
      setErrorMessage("")
      reset()
      console.clear();
      if (resp.status === 409) {
        // Handle the 409 status code
        const data = await resp.json();
        setErrorMessage(data.message)
      }
      if (resp.status === 201) {
        // Handle the 201 status code
        const data = await resp.json();
        setErrorMessage(data.message)
      }

      if(resp.status === 404) {
        // Handle other errors when server is offline
        setErrorMessage("Unexpected error has occured")
      }


    } catch (error) {
      setErrorMessage("Unexpected error has occured")    }
  }
  }
  //================================================
  return (
    <body>
      <div className={classes.registerArea}>
        <div className={classes.background}>
          <div className={classes.shapeOne}></div>
          <div className={classes.shapeTwo}></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={classes.registerForm}
        >
          <div>
            <h1 className={classes.registerHeader}>Register</h1>
          </div>

          <div>
            <label htmlFor="username" className={classes.registerLabel}>
              Username:
            </label>
            <input
              id="username"
              type="text"
              className={classes.registerInput}
              {...register("username", { required: true })}
            />
            {errors.username && <div>Username is required</div>}
          </div>

          <div>
            <label htmlFor="password" className={classes.registerLabel}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              className={classes.registerInput}
              {...register("password", { required: true })}
            />
            {errors.password && <div>Password is required</div>}
          </div>

          <div>
            <label htmlFor="checkbox" className={classes.registerLabel}>
              I agree to the Privacy Policy
            </label>
            <input
              id="checkbox"
              type="checkbox"
              className={classes.registerInput}
              {...register("checkbox", { required: true })}
            />
            {errors.checkbox && <div>You must to agree to terms and conditions</div>}
          </div>

          <div>
            <button type="submit" className={classes.registerButton}>
              Submit
            </button>
            {errorMessage ? (
              <div>{errorMessage}</div>
            ) : isSubmitSuccessful ? (<div>
              Registration successful!
            </div>): null}
          </div>

          <hr className={classes.hr} />

          <div>
            <span>Already have an account?</span>
            <Link to="/" className={classes.link}>
              {" "}
              <span className={classes.backLink}> {"< "}Go back </span>{" "}
            </Link>
          </div>
        </form>
      </div>
    </body>
  );
};
