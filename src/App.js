import { useContext } from "react";
// import BinaryOperator from "./components/BinaryOperator";
// import InLineTernary from "./components/InLineTernary";
// import ReturnTemprano from "./components/ReturnTemprano";
import "./App.css"
// import Encuesta from "./components/Encuesta";
// import TernaryOperator from "./components/TernaryOperator";
import  { Theme } from "./contexts/Theme";
import Router from "./routes";
// import InLineStyle from "./components/InLineStyle";
// import { ClasesCondicionales } from "./components/ClasesCondicionales";
// import StylingDinamico from "./components/StylingDinámico";
// import { buildQueries } from "@testing-library/react";


 function App() {
    const {themeColor}= useContext(Theme)
    console.log(themeColor);
  return(
    <div 
    className={themeColor === 'light' ? "container-light" : null}>
  {/* <TernaryOperator condition={""}/>    */}
       <Router/>
       {/* <ReturnTemprano condition2={false}/> */}
       {/* <BinaryOperator condition={0 && 20}/> */}
       {/* <InLineTernary lang={"en"}/> */}
       {/* <Encuesta condition = {true}/> */}
       {/* <InLineStyle color={true} /> */}
       {/* <ClasesCondicionales condition={false} additionalClass="blue-class" /> */}
       {/* <StylingDinamico 
       additionalStyles={{
        color: 'black',
       }}/> */}
    </div>


 ) 
}

export default App
