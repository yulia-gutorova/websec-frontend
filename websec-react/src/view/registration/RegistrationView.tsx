
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import classes from "./styles/RegistrationView.module.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useConsent } from "react-hook-consent";
interface IFormInput {
  username: string;
  password: string;
  checkbox: boolean;
}

export const RegistrationView = () => {

  const {toggleBanner} = useConsent();


  const [errorMessage, setErrorMessage] = useState("")
  const [isCheckbox, setIsCheckbox] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cookieConsent, setCookieConsent] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormInput>();



  // eslint-disable-next-line react-hooks/exhaustive-deps
  const exportCookiesFromLocalStorage = () => {
     
    try {
      const accessTokenObj = JSON.parse(localStorage.getItem("react-hook-consent") || '{}');
      const cookieBoolean = accessTokenObj["consent"][0] === "essentials"
      console.log(cookieBoolean)
      setCookieConsent(cookieBoolean);
    } catch (error) {
      setCookieConsent(false)
    }
   }  
 
useEffect(() => {
  exportCookiesFromLocalStorage();
}, [exportCookiesFromLocalStorage]);


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {

    if (data.checkbox) {
      setIsLoading(true); 
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
          credentials: 'include',
        });

        setErrorMessage("")
        reset();
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

        if (resp.status === 404) {
          // Handle other errors when server is offline
          setErrorMessage("Unexpected error has occured")
        }


      } catch (error) {
        setErrorMessage("Unexpected error has occured")
      } finally {
    setIsLoading(false);
      }
    }

  }
  //================================================
  return (
    <div className={classes.container}>
        <Helmet>
      <title>Register</title>
      <meta name='Register' content='Secured'></meta>
      </Helmet>
      <div className={classes.registerArea}>
        <div className={classes.background}>
          <div className={classes.shapeOne}></div>
          <div className={classes.shapeTwo}></div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          id="registerForm"
          className={classes.registerForm}>

          <div>
            <h1
              id="registerFormHeader" className={classes.registerHeader}>Register</h1>
          </div>

          {/* ------------- Username -----------------*/}
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

            <div className={classes.registerErrorWrapper}>
              {errors.username && <span className={classes.registerErrorText} id="usernameError" >Username is required</span>}
            </div>
          </div>

          {/* ------------- Password -----------------*/}
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

            <div className={classes.registerErrorWrapper}>
              {errors.password && <span className={classes.registerErrorText} id="passwordError">Password is required</span>}
            </div>

          </div>

          {/* ------------- Checkbox -----------------*/}
          <div className={classes.registerCheckboxWrapper}>
            <input
              id="checkbox"
              type="checkbox"
              onClick={() => setIsCheckbox(!isCheckbox)}
              className={classes.registerInputCheckbox}
              {...register("checkbox", { required: true })}
            />
            <label htmlFor="checkbox" className={classes.registerCheckboxLabel}>
             <Link to="/policy">I agree to the Privacy Policy</Link>
            </label>

            <div className={classes.registerErrorWrapper}>
              {errors.checkbox && <span className={classes.registerErrorText} id="checkboxError" >You must to agree to terms and conditions </span>}
            </div>
          </div>

          <div>
            <button disabled={isLoading || !cookieConsent} type="submit" className={`${classes.registerButton} ${isLoading || !cookieConsent ? classes.noHoverEffect : ""}`}>{isLoading ? 'Submitting...' : 'Submit'}</button>
          </div>

          <div className={classes.registerErrorWrapper}>

           {errorMessage || !isCheckbox ?
                (<span className={!isSubmitSuccessful ? classes.registerSuccessText : classes.registerErrorText} id="unexpectedError" >{errorMessage}</span>) 
                : (isSubmitSuccessful ? (<span className={classes.registerSuccessText}>Register successfull</span>) : null)}  
          </div>


          <hr className={classes.hr} />

          <div>
            <span>Already have an account?</span>
            <Link to="/login" className={classes.link}><span className={classes.backLink}> &ensp; &ensp;{"< "}Go back</span></Link>
          </div>

        </form>
      </div>
      <button onClick={() => toggleBanner()} className={classes.registerButton}>I want to consent to cookies</button>
            {!cookieConsent && <div>"Consent for essential cookies is required to register"</div>}
    </div>
  );
};
