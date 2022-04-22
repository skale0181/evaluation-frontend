
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Navbar } from './Components/Navbar'
import { Signup } from './Components/Register'
import {useSelector} from 'react-redux'
import { ShowTeacher } from './Components/ShowTeacher'
// import {Register} from './Components/Register'


function App() {
  
  // if isAuthenticated is true, then show the TodosCreact component
  const PrivateRoute = ({isAuthenticated,children})=>{
    return isAuthenticated ? children : <Navigate to="/login"/>
  }
  //take isAthenticated from the redux store
  // const {isAuthenticated} = useSelector(store => store.login)

  const isAuthenticated = true

  return (
    <div className="App">
       <Navbar/>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} /> */}

          <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}><Home/></PrivateRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/teachers/:id" element={<ShowTeacher/>} />
      

        </Routes>
    </div>
  )
}

export default App
