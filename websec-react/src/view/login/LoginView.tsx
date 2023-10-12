import { useState } from "react";
import { Link, /* useNavigate */ } from 'react-router-dom'

import classes from "./styles/LoginView.module.css";

export const LoginView = () => {

  /* const navigate = useNavigate() */

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Username: " + username);
    console.log("Password: " + username);
  }

  //================================================  
  return (

    <body>

      <div className={classes.loginArea}>

      <div className={classes.background}>
          <div className={classes.shapeOne}></div>
          <div className={classes.shapeTwo}></div>
        </div>

        <form className={classes.loginForm}>

        <div>
          <h1 className={classes.loginHeader}>Login</h1>
        </div>

          <div>
            <label htmlFor="username" className={classes.loginLabel}>Username:</label>
            <input
              id="username"
              type="text"
              className={classes.loginInput}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className={classes.loginLabel}>Password:</label>
            <input
              id="password"
              type="password"
              className={classes.loginInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button type="button" className={classes.loginButton} onClick={handleSubmit}>Submit</button>
          </div>

          <hr className={classes.hr}/>

          <div>
            <span>Don't have an account?</span>
            <Link to="/registration" className={classes.link}> <span className={classes.backLink}>  Register</span> </Link>
          </div>

        </form>

      </div>

    </body>

  );
};
