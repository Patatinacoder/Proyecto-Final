import  "./App.module.css";
import ThemeProvider from "./contexts/Theme";
import Router from "./routes";


 function App() {
  return (
    <div><ThemeProvider>

    </ThemeProvider>
    
       < Router/>
    </div>
    )
}
export default App
