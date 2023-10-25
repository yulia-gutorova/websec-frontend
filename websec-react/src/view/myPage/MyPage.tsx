import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classes from "./styles/MyPage.module.css";

export const MyPage = () => {
  const navigate = useNavigate()
  const { name } = useParams()
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
    <div>
        <h1 className={classes.myPageHeader}>Hello</h1>
        <p className={classes.mypageInfo}>This is your page, {name}</p>
    </div>
    <div className={classes.boll}></div>
</div>
  )
}
