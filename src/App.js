//import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="Thanuj" link="About"/>
    <div className="container my-3">{/*Creates a container*/}
    {<TextForm heading="Enter the text to analyze below"/>}
    <About/>
    </div>
    </>
  );
}

export default App;
