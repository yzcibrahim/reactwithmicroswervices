import axios from "axios";
import { useState } from "react"
import { AddLng } from "./AddLng"
export default function Languages(props){

const[lngToUpdate,setLngToUpdate]=useState({id:0,name:'',code:''});
 
const UpdateLng=(lng)=>{
    setLngToUpdate(lng);
}
const DeleteLang=(id)=>{
    axios.delete('http://localhost:44238/api/langs/'+id)
    .then(()=>{props.refreshData()})
}
    
    return <div className='row'>
          <div className='col-md-6'>
            {
              props.languages.map((lng) => {
                return <div key={lng.id}> <button onClick={()=>{DeleteLang(lng.id)}}>Sil</button>|<input type="button" onClick={()=>{UpdateLng(lng)}} value="updateLng"/>{lng.id} | {lng.code} | {lng.name}</div>
              })
            }
          </div>
          <div className="col-md-3">
          <AddLng refreshData={props.refreshData} lngToUpdate={lngToUpdate} />
          </div>
        </div>

}