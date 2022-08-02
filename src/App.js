
import './App.css';
import Firstsegment from './components/Firstsegment';
import Nav from './components/Nav';
import Secondsegment from './components/Secondsegment';
import Thirdsegment from './components/Thirdsegment';
import Fourthsegment from './components/Fourthsegment';
import Footer from './components/Footer';
import ShowMore from './components/ShowMore';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Firstsegment/>
      <Secondsegment/>
      <Thirdsegment/>
      <Fourthsegment/>
      <ShowMore/>
      <Footer/>
    </div>
  );
}

export default App;
