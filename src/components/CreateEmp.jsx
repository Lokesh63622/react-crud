import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import Axios from "../libraies/Axios"

const CreateEmp = () => {
  let navigate=useNavigate();
  let [state,setState]=useState({
    name:"",
    designation:"",
    loading:false
  })
  let {name,designation,loading}=state;
  let handleChange=e=>{
    let{name,value}=e.target;
    setState({...state,[name]:value})

  };
  let handelSubmit= async e=>{
    e.preventDefault();
    try {
      setState({loading:true})
      //post request have a req payload
      let payload={name,designation};
      await Axios.post("/employees",payload)
      navigate("/")

      console.log({name,designation})
    } catch (error) {
      console.log({error})
       
    }
    setState({loading:false,name:"",designation:" "})
  }
  return (
    <section id="authBlock">
      <article>
        <h2>
          Create Employee
        </h2>
        <form onSubmit={handelSubmit}>
          <div className='form-group'>
            <label htmlFor="emp_name">emp name</label>
            <input type="text" name="name" id="emp_name" required value={name}
             onChange={handleChange}/>

          </div>
          <div className='form-group'>
            <label htmlFor="emp_dest">Designation</label>
            <input type="text" name="designation" id="emp_dest" 
            required  value={designation} onChange={handleChange}/>
          </div>
          <div>
            <button>{loading===true?"loading...":"createEmployee"}</button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default CreateEmp