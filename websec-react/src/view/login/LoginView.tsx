
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./styles/LoginView.module.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useConsent } from "react-hook-consent";
interface IFormLoginInput {
  username: string;
  password: string;
}

export const LoginView = () => {

  window.history.pushState(null, window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, window.location.href);
  };


const {toggleBanner} = useConsent()

  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const [cookieConsent, setCookieConsent] = useState(false)

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginInput>();


  const exportCookiesFromLocalStorage = () => {

    const accessTokenObj = JSON.parse(localStorage.getItem("react-hook-consent") || '{}');
    const cookieBoolean = accessTokenObj["consent"][0] === "essentials"
    console.log(cookieBoolean)
    setCookieConsent(cookieBoolean);
  }  
   
  useEffect(() => {
    exportCookiesFromLocalStorage();
  }, [exportCookiesFromLocalStorage]);
  



  const onSubmit: SubmitHandler<IFormLoginInput> = async (data) => {

    const user = {
      username: data.username,
      password: data.password,
    };

    try {
      setIsLoading(true);
      const resp = await fetch(import.meta.env.VITE_BASE_URL + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        credentials: 'include',
      });
      if (resp.status === 200) {
        navigate(`/mypage/${user.username}`)
      } else if (resp.status === 401) {
        setErrorMessage("Username or password do not match")
      }


    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //================================================
  return (
    <div className={classes.container}>
        <Helmet>
      <title>Login</title>
      <meta name='Login' content='Secured'></meta>
      </Helmet>

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

          {/* ------------- Username -----------------*/}     
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

            <div className={classes.loginUsernameErrorMessageWrapper} id="loginUsernameErrorMessageWrapper" >
              {errors.username && <span data-testid="usernameError" className={classes.loginErrorText} id="usernameError" >Username is required</span>}
            </div>

            {/* ------------- Password -----------------*/}
            <label htmlFor="password" className={classes.loginLabel}>
              Password:
            </label>
            <input
              id="password"
              type="password"
              className={classes.loginInput}
              {...register("password", { required: true })}
            />

            <div className={classes.loginPasswordErrorMessageWrapper} id="loginPasswordErrorMessageWrapper" >
              {errors.password && <span className={classes.loginErrorText} id="passworError" >Password is required</span>}
              {errorMessage && <span className={classes.loginErrorText} id="loginInvalidCredentyials" >{errorMessage}</span>}
            </div>

{/*             <div  className={classes.loginErrorWrapper} id="loginErrorWrapper">
              {errorMessage && <span className={classes.loginErrorText} id="loginErrorText" >{errorMessage}</span>}
            </div> */}

            <button disabled={isLoading || !cookieConsent} type="submit" className={`${classes.loginButton} ${isLoading || !cookieConsent ? classes.noHoverEffect : ""} `}>{isLoading ? 'Submitting...' : 'Submit'}</button>
          </div>

          <hr className={classes.hr} />

          <div>
            <span>Don't have an account?</span>
            <Link to="/registration" className={classes.link}>
              <span className={classes.backLink}> &ensp; &ensp;{"< "}Register</span>
            </Link>
          </div>

        </form>
      </div>
<button onClick={() => toggleBanner()} className={classes.loginButton}>I want to consent to cookies</button>
{!cookieConsent && <div>"Consent for essential cookies is required to register"</div>}
    </div>
  );
};
