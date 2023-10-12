import { useState } from "react";
import {Link} from 'react-router-dom'
export const RegistrationView = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  console.log("Username: " + username);
  console.log("Password: " + username);  
}


//================================================  
  return (
    <>
      <h1>Register</h1>
      <form >
        
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
        <div>
          <span>Already have an account?</span>
          <Link to="/"> Go back </Link>
        </div>
        
      </form>
    </>
    
  );
};
