import React,{useState, useEffect} from "react";

export function AddLng(props){

    

    console.log("addlng");
    const [eklenecekLng,setEklenecekLng]=useState({id:0,code:'',name:''});
    
    useEffect(()=>{
        setEklenecekLng(props.lngToUpdate);
    },[props.lngToUpdate])

    

    const postData=()=>{
       // console.log(props);
       // console.log(eklenecekLng);
        props.postData(eklenecekLng);
    }

    const setEkelencekVal=(event)=>{
        
        // var existing={id:0,name:'',code:''};
        // existing.id=eklenecekLng.id;
        // existing.name=eklenecekLng.name;
        // existing.code=eklenecekLng.code;

        // existing[event.target.name]= event.target.value
        // setEklenecekLng(existing);

        setEklenecekLng(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
       
    }

    return(<div className='row'>
    <div className='col-md-6'>
      <div className='form-group'>
        id:<input className='form-control' name='id' onChange={setEkelencekVal} type='text' value={eklenecekLng.id} />
      </div>
      <div className='form-group'>
        code:<input className='form-control' name='code' onChange={setEkelencekVal} type='text' value={eklenecekLng.code} />
      </div>
      <div className='form-group'>
        name:<input className='form-control' name='name' onChange={setEkelencekVal} type='text' value={eklenecekLng.name} />
      </div>
      <button onClick={postData}>KAydet</button>
    </div>
  </div>)
}