
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
    formState: { errors},
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
    <body>
      <div className={classes.loginArea}>
        <div className={classes.background}>
          <div className={classes.shapeOne}></div>
          <div className={classes.shapeTwo}></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
          <div>
            <h1 className={classes.loginHeader}>Login</h1>
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
            {errors.username && <span>Username is required</span>}
            <label htmlFor="password" className={classes.loginLabel}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              className={classes.loginInput}
              {...register("password", { required: true })}
              />
            {errors.password && <span>Password is required</span>}
            <button
              type="submit"
              className={classes.loginButton}
            >
              Submit
            </button>
            
          </div>
          <hr className={classes.hr} />
          <div>
            <span>Don't have an account?</span>
            <Link to="/registration" className={classes.link}>
              {" "}
              <span className={classes.backLink}> Register</span>{" "}
            </Link>
          </div>
        </form>
      </div>
    </body>
  );
};
