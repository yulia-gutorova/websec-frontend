import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import classes from "./styles/LoginView.module.css";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useConsent } from "react-hook-consent";
import ReCAPTCHA from "react-google-recaptcha";

interface IFormLoginInput {
  username: string;
  password: string;
}

export const LoginView = () => {
  window.history.pushState(null, window.location.href);
  window.onpopstate = function () {
    window.history.pushState(null, window.location.href);
  };

  const { toggleBanner } = useConsent();

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [cookieConsent, setCookieConsent] = useState(false);
  const [recaptchaSuccessful, setRecaptchaSuccessful] = useState(false)
  const [captchaLoading, setCaptchaLoading] = useState(false)

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginInput>();

  const recaptchaReference = useRef<ReCAPTCHA>(null);


  //------------------------------------------------
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const exportCookiesFromLocalStorage = () => {
    try {
      const accessTokenObj = JSON.parse(
        localStorage.getItem("react-hook-consent") || "{}"
      );
      const cookieBoolean = accessTokenObj["consent"][0] === "essentials";
      setCookieConsent(cookieBoolean);
    } catch (error) {
      setCookieConsent(false);
    }
  };

  //------------------------------------------------
  useEffect(() => {
    exportCookiesFromLocalStorage();
  }, [exportCookiesFromLocalStorage]);

  //------------------------------------------------
  const onChange = async () => {
    try {
      setCaptchaLoading(true)
      if (recaptchaReference.current !== null) {
        const recaptchaValue = await recaptchaReference.current.getValue();
        /*     console.log("Rec value ", recaptchaValue);  */
  
        const res = await fetch(import.meta.env.VITE_BASE_URL + '/verify', {
          method: "POST",
          body: JSON.stringify({ recaptchaValue }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        if (res.status === 200) {
          setRecaptchaSuccessful(true)
        }
      }
} catch (error) {
  console.error(error)
} finally {
  setCaptchaLoading(false)
}
  };

  //------------------------------------------------
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
        credentials: "include",
      });
      if (resp.status === 200) {
        navigate(`/mypage/${user.username}`);
      } else if (resp.status === 401) {
        setErrorMessage("Username or password do not match");
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
        <meta name="Login" content="Secured"></meta>
      </Helmet>

      <div className={classes.loginArea}>
        <div className={classes.background}>
          <div className={classes.shapeOne}></div>
          <div className={classes.shapeTwo}></div>
        </div>

        <div className={classes.loginFormWrapper}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="loginForm"
            className={classes.loginForm}
          >
            <div>
              <h1 id="loginFormHeader" className={classes.loginHeader}>
                Login
              </h1>
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

              <div
                className={classes.loginUsernameErrorMessageWrapper}
                id="loginUsernameErrorMessageWrapper"
              >
                {errors.username && (
                  <span
                    data-testid="usernameError"
                    className={classes.loginErrorText}
                    id="usernameError"
                  >
                    Username is required
                  </span>
                )}
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

              <div className={classes.loginPasswordErrorMessageWrapper} id="loginPasswordErrorMessageWrapper">
                {errors.password && (
                  <span className={classes.loginErrorText} id="passwordError">Password is required</span>)}
                {errorMessage && (
                  <span
                    className={classes.loginErrorText}
                    id="loginInvalidCredentyials"
                  >
                    {errorMessage}
                  </span>
                )}
              </div>

              {/*             <div  className={classes.loginErrorWrapper} id="loginErrorWrapper">
              {errorMessage && <span className={classes.loginErrorText} id="loginErrorText" >{errorMessage}</span>}
            </div> */}

              <button
                disabled={isLoading || !cookieConsent || !recaptchaSuccessful}
                type="submit"
                className={`${classes.loginButton} ${isLoading || !cookieConsent || !recaptchaSuccessful ? classes.noHoverEffect : ""
                  } `}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>

              <div className={classes.loginReCaptchaWrapper}>
                <ReCAPTCHA
                  theme="dark"
                  onChange={onChange}
                  ref={recaptchaReference}
                  sitekey={import.meta.env.VITE_APP_SITE_KEY}
                  onExpired={() => setRecaptchaSuccessful(false)}
                />
              </div>
                {captchaLoading && <p>Awaiting server response...</p>}

            </div>

            <hr className={classes.loginHr} />

            <div>
              <span>Don't have an account?</span>
              <Link to="/registration" className={classes.link}>
                <span className={classes.backLink}>
                  {" "}
                  &ensp; &ensp;{"< "}Register
                </span>
              </Link>
            </div>
          </form>

          <div className={classes.loginCookieConsentWrapper} id="loginCookieConsentWrapper">
            <button onClick={() => toggleBanner()} className={classes.loginCookieConsentLink}>I want to consent to cookies</button>
            <div className={classes.loginCookieConsentErrorWrapper} id="loginCookieConsentErrorWrapper">
              {!cookieConsent && (<p className={classes.loginCookieConsentError}>"Consent for essential cookies is required"</p>)}
            </div>

          </div>

        </div>{/* formWrapper */}

      </div>

    </div>
  );
};
