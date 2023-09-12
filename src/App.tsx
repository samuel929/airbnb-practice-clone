import './App.css';

import Header from './components/Header/Header';
import ShowMapButton from './components/ShowMapButton/ShowMapButton';
function App() {
  return (
    <div className="App">
       <Header/>
       <div style={{display:"flex",justifyContent:"center"}}>
       <ShowMapButton/>

       </div>
    </div>
  );
}

export default App;
