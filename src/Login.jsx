import axios from "axios"
import { useState, useContext } from "react"
import userInfo from "./UserStorage"

export default function Login(){

    const[userState,setUserState]=useState({userName:'',password:''})
    const userContext=useContext(userInfo)

    const setVals=(event)=>{
        setUserState(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const login=()=>{
        console.log(userState);
        axios.post("http://localhost:22075/api/Account/Authenticate",userState)
        .then((res)=>{
            console.log(res);
            userContext.setToken(res.data);
        })
    }

    return <div>

<input type='text' value={userState.userName} name='userName' onChange={setVals} />
<input type='text' value={userState.password} name='password' onChange={setVals} />
<input type='button' value='login' onClick={login} />
    </div>
}