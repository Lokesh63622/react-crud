import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./Component.module.css"

const Navbar = () => {
  return (
   <section id={Style.navBlock}>
     <article className={Style.navArticle}>
       <div className="logoBlock">
         <Link to="#">Test Yantra</Link>
       </div>
       <div className="menuBlock">
         <ul>
           <li>
             <Link to="/">Employees</Link>
           </li>
           <li>
             <Link to="/create-emp">Create Employee</Link>
           </li>
         </ul>
       </div>
     </article>
   </section>
  )
}

export default Navbar