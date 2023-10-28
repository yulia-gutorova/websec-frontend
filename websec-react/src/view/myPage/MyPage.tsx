import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classes from "./styles/MyPage.module.css";
import { Helmet } from "react-helmet-async";


export const MyPage = () => {
  const navigate = useNavigate()
  const { name } = useParams()
  window.history.pushState(null, window.location.href);
  window.onpopstate = function () {
    window.history.pushState( null, window.location.href);
  };
 
const handleLogout  = async () => {
  const resp = await fetch(import.meta.env.VITE_BASE_URL + "/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (resp.status === 200) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    navigate('/login')
  }
console.log(resp)
}

  const checkIfAuthed = async () => {
    try {
      const resp = await fetch(import.meta.env.VITE_BASE_URL + "/check-session", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      
      if (resp.status === 401) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars

        navigate('/login')
      }
    } catch (error) {
      navigate('/login')
      console.error(error)
    }
  }

  useEffect(() => {
    checkIfAuthed()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className={classes.container}>
      <Helmet>
      <title>My page</title>
      <meta name='My Page' content='Secured'></meta>
      </Helmet>

      <div className={classes.myPageBanner}>
        <h1 className={classes.myPageHeader}>Hello</h1>
        <p className={classes.myPageInfo}>This is your page, {name}</p>
      </div>

      <div className={classes.boll}></div>
      <div className={classes.myPageButtonCintainer}>
        <button onClick={handleLogout} className={classes.myPageButton} >Log out</button>
      </div>
    </div>
  )
}
