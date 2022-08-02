
import './App.css';
import Firstsegment from './components/Firstsegment';
import Nav from './components/Nav';
import Secondsegment from './components/Secondsegment';
import Thirdsegment from './components/Thirdsegment';
import Fourthsegment from './components/Fourthsegment';
import Fifthsegment from './components/Fifthsegment';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Firstsegment/>
      <Secondsegment/>
      <Thirdsegment/>
      <Fourthsegment/>
      <Fifthsegment/>
      <Footer/>
    </div>
  );
}

export default App;
