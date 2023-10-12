import { useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios"

import classes from "./styles/RegistrationView.module.css";

export const RegistrationView = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password
    }

    try {

      const resp = await axios.post(import.meta.env.VITE_REG_URL, user);
      console.log("Responce: " + resp.data);

    } catch (error) {
      console.log(error)
    }


    /* navigate("/mypage") */
    console.log("Username: " + username);
    console.log("Password: " + password);
  }
  //================================================  
  return (

    <body>

      <div className={classes.registerArea}>

        <div className={classes.background}>
          <div className={classes.shapeOne}></div>
          <div className={classes.shapeTwo}></div>
        </div>


        <form className={classes.registerForm}>

          <div >
            <h1 className={classes.registerHeader}>Register</h1>
          </div>

          <div>
            <label htmlFor="username" className={classes.registerLabel}>Username:</label>
            <input
              id="username"
              type="text"
              className={classes.registerInput}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className={classes.registerLabel}>Password:</label>
            <input
              id="password"
              type="password"
              className={classes.registerInput}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <button type="button" onClick={handleSubmit} className={classes.registerButton}>Submit</button>
          </div>

          <hr className={classes.hr} />

          <div>
            <span>Already have an account?</span>
            <Link to="/" className={classes.link}> <span className={classes.backLink}> {"< "}Go back </span> </Link>
          </div>

        </form>
      </div>
    </body>

  );
};
