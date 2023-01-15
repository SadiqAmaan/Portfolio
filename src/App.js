import Header from "./components/Header";
import Home from "./components/Home";
import Timeline from "./components/Experience";
import Work from "./components/Work";
import Services from "./components/Services";
import Contact from "./components/Contact";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Work/>
    <Timeline/>
    <Services/>
    <Contact/>
    <Toaster/>
    
    </>
  );
}

export default App;
