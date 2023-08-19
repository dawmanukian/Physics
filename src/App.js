import Answer from "./components/answer/Answer";
import PhysicsForm from "./components/physics-form/PhysicsForm";
import PhysicsValues from "./components/physics-values/PhysicsValues";
import { useReducer, useState } from "react";
import { v4 as uuidv4} from "uuid";

console.log('====================================');
console.log('Created by Davit Manukyan');
console.log('====================================');

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD-DATA':
      return [
        ...state,
        {
          id: uuidv4(),
          element: action.payload.element
          // value: action.payload.value
        }
      ]
    case 'ADD-UNKNOWN':
      return [
        ...state,
        {
          id: uuidv4(),
          element: action.payload.element
        }
      ]
    case 'REMOVE-DATA':
      return state.filter(el => el.id !== action.payload.id)
    case 'CLEAR':
      return []
  } 
}

function App() {

  const [data, dispatch] = useReducer(reducer,[])
  const [unknowns, setUnknowns] = useState([])
  const [answer, setAnswer] = useState(null)

  return (
    <div className="App">
      <PhysicsValues imported={data} unknown={unknowns} onRemove={(id) => {
        dispatch({
          type: 'REMOVE-DATA',
          payload: {
            id
          }
        })
      }}/>
      <PhysicsForm onAdd={(element, value) => {
        dispatch({
          type: 'ADD-DATA',
          payload: {
            element
            // value
          }
        })
      }}
      onAddUnknown={(element) => {
        setUnknowns([
          ...unknowns,
          {
            id: uuidv4(),
            element
          }
        ])
      }}
      onClear={() => {
        dispatch({
          type: 'CLEAR'
        })
        setAnswer([])
        setUnknowns([])
      }}
      />
      <Answer imported={data} unknown={unknowns}/>
    </div>
  );
}

export default App;
