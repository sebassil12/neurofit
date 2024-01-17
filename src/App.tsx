
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import NeuroNavbar from "./components/index/NeuroNavbar";
import Purchase from "./pages/Neuro/Purchase";
import Login from "./pages/Index/Login";
import NavbarNeuro from "./components/neuroApp/NavbarNeuro";
import NeuroExercises from "./pages/Neuro/NeuroExercises";
import NeuroModal from "./components/index/NeuroModal";
import DebitContext from "./components/neuroApp/DebitContext";
import { useState } from "react";
import SpinCharge from "./components/index/SpinCharge";
import NeuroPlan1 from "./pages/Neuro/NeuroPlan1";
import FormContext from "./components/neuroApp/FormContext";
import Home from "./pages/Index/Home";
import About from "./pages/Index/About";
import NeuroHome from "./pages/Neuro/NeuroHome";







export default function App(){
  const [isPurchase, setIsPurchase] = useState<boolean>(false);
  const [isFirst, setIsFirst] = useState<boolean>(true);
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<NeuroNavbar />}>
        <Route index element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />} />
      </Route>
      
      <Route path="/neuro/*" element={<DebitContext.Provider value={{isPurchase, setIsPurchase}}>
        <Routes>
          <Route path="/" element={<NavbarNeuro/>} >
          <Route index element={<NeuroHome />}/>
          <Route path="/exercise/*" element={
          <FormContext.Provider value={{isFirst, setIsFirst}}>
          <Routes>
            <Route path="/" element={<NeuroExercises/>}/>
            <Route path="/plan_1" element={<NeuroPlan1 />}/>
          </Routes>
          </FormContext.Provider>
          }/>

          <Route path="/purchase" element={<NeuroModal />} />
          <Route path="/buy" element={<Purchase />}/>
          <Route path="/verification" element={<SpinCharge />}/>
        </Route>
        </Routes>
        
        
        </DebitContext.Provider>}>
        
        
        
        
      </Route>
    
      
      </Routes>

    
    </BrowserRouter>
  )
}
