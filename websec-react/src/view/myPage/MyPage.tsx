import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import classes from "./styles/MyPage.module.css";



export const MyPage = () => {
  const navigate = useNavigate()
  const { name } = useParams()

<<<<<<< HEAD
=======
  const audio = new Audio(sound)

  function play() {
    audio.play()
  }
  function pause() {
    audio.pause()
  }

>>>>>>> 3e784849ffe8e7a1562eba6499a51eb445549172
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
<<<<<<< HEAD
=======
  useEffect(() => {
    play()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
>>>>>>> 3e784849ffe8e7a1562eba6499a51eb445549172

  return (
    <div className={classes.container}>

      <div className={classes.myPageBanner}>
        <h1 className={classes.myPageHeader}>Hello</h1>
        <p className={classes.myPageInfo}>This is your page, {name}</p>
      </div>

      <div className={classes.boll}></div>
      <div className={classes.myPageButtonCintainer}>
        <button className={classes.myPageButton} onClick={pause}>Pause</button>
        <button className={classes.myPageButton} >Log out</button>
      </div>
    </div>
<<<<<<< HEAD
    <div className={classes.boll}></div>
  
</div>
=======
>>>>>>> 3e784849ffe8e7a1562eba6499a51eb445549172
  )
}
