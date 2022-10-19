import Header from "./Header";
import './bootstrap-icons.css';
import LeftSide from "./LeftSide";
import Midside from "./Midside";
import Rightside from "./Rightside";


function App() {
  return (
    <div className="App">
      <Header/>


      <div className="app__body">
         <LeftSide/>
        <Midside/>
        <Rightside/>

      </div>
      
        

    </div>
  );
}

export default App;
