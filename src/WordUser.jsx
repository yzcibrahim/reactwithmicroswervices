import axios from "axios";
import { useEffect, useState } from "react";

export default function WordUser(){
const[user,setUser]=useState({id:0,userName:'',password:''})
const[userList,setUserList]=useState([{id:0,userName:'',password:''}])
const[refreshUsers,setRefreshUsers]=useState(false);
const url="http://localhost:22075/api/Account";

useEffect(
    ()=>{

        axios.get(url)
        .then((res)=>setUserList(res.data))
    }
    ,[refreshUsers]
)
const Kaydet=()=>{
   axios.post(url,user)
   .then(()=>{setRefreshUsers(!refreshUsers)})
}

const setVals=(event)=>{
    setUser(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
    }))
}

return <div>
    <div>
        name:<input name="userName" value={user.userName} onChange={setVals}  type="text" />
        password:<input name="password" value={user.password} onChange={setVals} type="text" />
        <button onClick={Kaydet}>Kaydet</button>
    </div>

    <div>
    {userList.map((usr)=>{
        return <div>{usr.id} || {usr.userName} || {usr.password}</div>
    })}
    </div>
</div>

}