import React,{useState,useEffect, Fragment} from 'react'
import { Link } from 'react-router-dom'
import Axios from '../libraies/Axios'
import Spinner from './Spinner'
const Employees = () => {
  let [emp,setEmp]=useState([])
  let [loading,setLoading]=useState(false);


  let removeEmp=async id=>{
    await Axios.delete(`/employees/${id}`);
    window.location.assign("/")
  }
  useEffect(()=>{
    const fetchData=async ()=>{
      try{
        let payload =await Axios.get("/employees")
        
        let {data}=payload
        console.log(data)
        setEmp(data)
        setLoading(true)
      }catch(error){
        console.log(error)
      }
      setLoading(false)
    }
    fetchData()
  },[])
  return (
    <section id="empTable">
      <article>
      <table>
        <thead>
          <tr>
            <th>emp id</th>
            <th>emp name</th>
            <th>Designation</th>
            <th>edit</th>
            <th>delete</th>
    </tr>
        </thead>
        <tbody>
        {loading === true ? (<Spinner/>):(emp.map(user=>{return (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.designation}</td>
            <td><Link to={`/edit-emp/${user.id}`}>edit</Link></td>
            <td onClick={()=>removeEmp(user.id)}><Link to="./Delete">delete</Link> </td>
          </tr>
        )}
       ))}
        </tbody>
      </table>
      </article>
      </section>
  )
}

export default Employees