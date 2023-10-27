import { Link } from "react-router-dom"
import classes from "./styles/HomeView.module.css"
import { Helmet } from "react-helmet";


export const HomeView = () => {

  function focusInput() {
    const textField = document.getElementById("goToLoginPageButton");

    textField!.focus();

    // The input will lose focus after 3 seconds
    setTimeout(() => {
      textField!.blur();
    }, 3000);
  }



  return (
    <div className={classes.body}>
         <Helmet>
      <title>Landing page</title>
      <meta name='Landingpage' content='Secured'></meta>
      </Helmet>
      <div className={classes.outsideGradient}>
        <div className={classes.insideGradient}>
        <Link to="/login" className={classes.link}>
          <button onClick={() => focusInput()} id="goToLoginPageButton" className={classes.goToLoginPageButton}><span className={classes.loginButtonText}>Log In</span></button>{" "}
        </Link>
        </div>
      </div>
    </div>
  )
}

