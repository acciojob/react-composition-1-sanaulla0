
import React , {useState} from "react";
import './../styles/App.css';

const App = () => {
     const [data , setData] = useState('');
   const handleclicked = (value)=>{
            setData(value);
   }
  return (
    <div>
      <p>OUTPUT</p> <hr/>
        <ul>
             <li value='Tab 1' onClick={()=>handleclicked("Tab 1")}>Tab 1</li>
             <li value='Tab 2' onClick={()=>handleclicked("Tab 2")}>Tab 2</li>
             
             <li value='Tab 3' onClick={()=>handleclicked('Tab 3')}>Tab 3</li>
             <div>This is the content for {data}.</div>
        </ul>
       
    </div>
  )
}

export default App
