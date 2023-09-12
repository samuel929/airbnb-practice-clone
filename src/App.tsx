import './App.css';
import React,{useState} from "react"
import Header from './components/Header/Header';
import ShowMapButton from './components/ShowMapButton/ShowMapButton';
import ReactMapboxGl,{Layer,Feature} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
function App() {
 const [showMap,setShowMap]=useState<boolean>(false)
const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1Ijoic2FtdWVsOTI5IiwiYSI6ImNsbWdmaGRxMzE5cTIzZG56bDdqeHkwNXYifQ.LzBtJ_LRp2WRt8bBnk_z9w'
});

const ShowHideMap=()=>{
  setShowMap(!showMap)
}
  return (
    <div className="App">
       <Header/>
       {
         showMap && (
          <Map
          style="mapbox://styles/mapbox/streets-v9"
          center={[28.044379492577264,-26.208418213507905]}
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}
        >
          <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
            <Feature coordinates={[770307.8000000007, 786904.5999999996]} />
          </Layer>
        </Map>
         )
       }
      
       <div className='center-map-button'>
       <ShowMapButton showMap={showMap} ShowHideMap={ShowHideMap}/>
       </div>
    </div>
  );
}

export default App;
