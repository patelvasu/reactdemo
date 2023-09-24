
import {BrowserRouter,Route,Routes} from "react-router-dom";
import NavbarMenu from "./components/NavbarMenu";
import AlertComponents from "./components/AlertComponents";
import Search from "./components/Search";
import About from "./components/About";
import Home from "./components/Home";
import ExpenseHome from "./components/Expenses/ExpenseHome";
function App() {
  
  return (    
    <BrowserRouter>
      <NavbarMenu/>
      <AlertComponents/>      
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/analyze" element={<Search/>}/>
          <Route exact path="/expense" element={<ExpenseHome/>}/>
        </Routes>          
    </BrowserRouter> 
  );
}

export default App;