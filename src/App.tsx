
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from "./components/Navbar";





export default function App(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar />}></Route>


      </Routes>
    
    
    </BrowserRouter>
  )
}
