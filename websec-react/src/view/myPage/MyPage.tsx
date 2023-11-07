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

//------------------------------------------------
const handleLogout  = async () => {
  try {
    
    const resp = await fetch(import.meta.env.VITE_BASE_URL + "/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (resp.status === 200) {
       await resp.text()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      navigate('/login')
    }
  
  } catch (error) {
    console.error(error)
  }
}
//------------------------------------------------
const checkIfAuthed = async () => {
  try {
    const resp = await fetch(import.meta.env.VITE_BASE_URL + "/check-session", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    
    if(resp.status === 200) {
      const data = await resp.json()
      const username = data.user.username;
      navigate(`/mypage/${username}`)
    }


    if (resp.status === 401) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars

      navigate('/login')
    }
  } catch (error) {
    navigate('/login')
    console.error(error)
  }
}

  //------------------------------------------------
  useEffect(() => {
    checkIfAuthed()
    requestNewJWTCookie()
    twoMinuteTokenRefresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //------------------------------------------------
  const requestNewJWTCookie = async () => {
   try {
     const resp = await fetch(import.meta.env.VITE_BASE_URL + "/token", {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
       credentials: "include",
     });
     const data = await resp.json();
     console.log(data)
   } catch (error) {
    console.error(error)
   }
}

//------------------------------------------------
const TOKEN_REFRESH_INTERVAL = 2 * 50 * 1000;

const twoMinuteTokenRefresh =  () => {
  setInterval(refreshJWTCookie, TOKEN_REFRESH_INTERVAL)
}

//------------------------------------------------
const refreshJWTCookie = async () => {
  try {
    const resp = await fetch(import.meta.env.VITE_BASE_URL + "/refresh-token", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const data = await resp.json();
    console.log(data)
  } catch (error) {
   console.error(error)
  }
}

//------------------------------------------------
const handleFetchData = async () => {
  try {
    const resp = await fetch(import.meta.env.VITE_BACKEND_URL + '/decode-token', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    });

    if (resp.status === 200) {
      const data = await resp.json();
      console.log(data);
    } else {
      console.error('Request failed:', resp.status);
      const errorData = await resp.json(); 
      console.error('Error Message:', errorData.message);
    }
  } catch (error) {

    console.log(error)
  }
};

  //================================================
  return (
    <div className={classes.container}>
      <Helmet>
      <title>My page</title>
      <meta name='My Page' content='Secured'></meta>
      </Helmet>

      <div id="myPageBunner" className={classes.myPageBanner}>
        <h1 className={classes.myPageHeader}>Hello</h1>
        <p className={classes.myPageInfo}>This is your page, {name}</p>
      </div>

      <div className={classes.boll}></div>
      <div className={classes.myPageButtonCintainer}>
        <button id="myPageLogoutButton" onClick={handleLogout} className={classes.myPageButton} >Log out</button>
        <button id="myPageLogoutButton" onClick={handleFetchData} className={classes.myPageButton} >Fetch data</button>
      </div>
    </div>
  )
}
