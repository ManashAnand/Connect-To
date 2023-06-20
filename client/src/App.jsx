import './App.css'
import { Routes,Route} from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import ErrorPage from './components/404/ErrorPage'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Homepage from './OtherComponent/Homepage'
import MainProfile from './OtherComponent/MainProfile'
import PostForm from './OtherComponent/Post/PostForm'

import Chat from './ChatComponent/Chat'


function App() {



  return (
    <>
      <Navbar/> 
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/profile/:id' element={<MainProfile/>}/>
      <Route path='/create-post' element={<PostForm/>}/>
      <Route path="/chat/:id" element={<Chat/>}/>


      {/* Login signin route */}
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>


      {/* Error page route */}
      <Route path='*' element={<ErrorPage/>}/>
     </Routes>
      <Footer/>      
    </>
  )
}

export default App
