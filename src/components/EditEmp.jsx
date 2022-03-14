import React ,{useState,useEffect}from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import Axios from '../libraies/Axios'

const EditEmp = () => {
  let navigate=useNavigate();
  let {id}=useParams()
  let [name,setName]=useState()
  let [designation,setDesignetion]=useState();
  let [loading,setLoading]=useState(false);
  useEffect(() => {
    let FetchData= async () => {
     let payload=await Axios.get(`/employees/${id}`)
     let {data}=payload
     let{name,designation}=data;
     setName(name)
     setDesignetion(designation)

    };
    FetchData();
  }, [id]);
  let handelSubmit=async e =>{
    e.preventDefault();
    try {
      setLoading(true)
      let payload={name,designation};
      await Axios.put(`/employees/${id}`,payload);
      navigate("/");
    } catch (error) {
      console.log(error)
      
    }
    setName("")
    setDesignetion("")
    setLoading(false)
  }
  return (
    <section id="authBlock">
      <article>
        <h2>
          Update Employee
        </h2>
        <form onSubmit={handelSubmit}>
          <div className='form-group'>
            <label htmlFor="emp_name">emp name</label>
            <input type="text" name="name" id="emp_name" required value={name} onChange={e=>setName(e.target.value)} />

          </div>
          <div className='form-group'>
            <label htmlFor="emp_dest">Designation</label>
            <input type="text" name="designation" id="emp_dest" required  value={designation} onChange={e=>setDesignetion(e.target.value) }/>
          </div>
          <div>
            <button>{  loading===true?"updateing...": "UpdateEmployee"}</button>
          </div>
        </form>
      </article>
    </section>
  )
}

export default EditEmp