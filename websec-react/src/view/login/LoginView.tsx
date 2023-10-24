
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./styles/LoginView.module.css";

interface IFormLoginInput {
  username: string;
  password: string;
}

export const LoginView = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginInput>();

  const onSubmit: SubmitHandler<IFormLoginInput> = async (data) => {
    const user = {
      username: data.username,
      password: data.password,
    };

    try {
      const resp = await fetch(import.meta.env.VITE_BASE_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: 'include',
      });
      const data = await resp.json();
      const token = data.token;
      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  //================================================
  return (
    <div className={classes.container}>

      <div className={classes.loginArea}>
        <div className={classes.background}>
          <div className={classes.shapeOne}></div>
          <div className={classes.shapeTwo}></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}
              id="loginForm"
              className={classes.loginForm}>

          <div>
            <h1 id="loginFormHeader" className={classes.loginHeader}>Login</h1>
          </div>

          <div>
            <label htmlFor="username" className={classes.loginLabel}>
              Username:
            </label>
            <input
              id="username"
              type="text"
              className={classes.loginInput}
              {...register("username", { required: true })}
            />

            <div className={classes.loginErrorWrapper}>
              {errors.username && <span id="usernameError" className={classes.registerErrorText}>Username is required</span>}
            </div>

            <label htmlFor="password" className={classes.loginLabel}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              className={classes.loginInput}
              {...register("password", { required: true })}
            />

            <div className={classes.loginErrorWrapper}>
              {errors.password && <span id="passworError" className={classes.registerErrorText}>Password is required</span>}
            </div>

            <button type="submit" className={classes.loginButton}>Submit</button>

          </div>

          <hr className={classes.hr} />

          <div>
            <span>Don't have an account?</span>
            <Link to="/registration" className={classes.link}>
              {" "}
              <span className={classes.backLink}> &ensp; &ensp;{"< "}Register</span>{" "}
            </Link>
          </div>

        </form>
      </div>
      
    </div>
  );
};
