import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar';
import EmpRoute from './Routes/EmployeeRoutes';


const App = () => {
  return (
    <section id="crudApp">
        <BrowserRouter>
        <header>
            <Navbar />
            <main>
                <EmpRoute />
            </main>
        </header>
        </BrowserRouter>
    </section>
  )
}

export default App