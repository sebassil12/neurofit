
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import NeuroNavbar from "./components/index/NeuroNavbar";
import Purchase from "./pages/Neuro/Purchase";
import Login from "./pages/Login";
import NavbarNeuro from "./components/neuroApp/NavbarNeuro";
import NeuroExercises from "./pages/Neuro/NeuroExercises";





export default function App(){
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<NeuroNavbar />}>
        <Route path="/buy" element={<Purchase />}/>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/neuro" element={<NavbarNeuro/>}>
        <Route path="/neuro/buy" element={<Purchase />}/>
        <Route path="/neuro/exercise" element={<NeuroExercises />}/>

      </Route>
      </Routes>

    
    </BrowserRouter>
  )
}
