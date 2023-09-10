import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './Slices/slice';
import { RootState } from './store/store';
import Header from './components/Header/Header';
function App() {

 const dispatch = useDispatch();
 const counter = useSelector((state: RootState) => state.counter);
  return (
    <div className="App">
       <Header/>
       <p>count {counter}</p>
       <button onClick={()=>dispatch(increment())}>Add</button>
       <button onClick={()=>dispatch(decrement())}>Minus</button>
    </div>
  );
}

export default App;
