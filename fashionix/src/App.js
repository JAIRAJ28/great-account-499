import Footer from "./Components/footer/footer";
import "./App.css";
import Navbar from "./Components/Navbar";
import { Login } from "./Components/loginsig/login";
import { Register } from "./Components/register/register";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
