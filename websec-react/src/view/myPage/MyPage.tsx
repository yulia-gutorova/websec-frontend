import {useEffect} from'react'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const MyPage = () => {
  const navigate = useNavigate()
  const {name} = useParams()
  const checkIfAuthed  = async () => {
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
        const data = await resp.json();
        navigate('/login')
      }
    } catch(error){
      navigate('/login')
      console.error(error)
    } 
  } 
  
  useEffect(() =>{
    checkIfAuthed()
  },[])
  


  return (
    <div>{name}</div>
  )
}
