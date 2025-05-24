import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayListstu3 from './FnStd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <table>
            <tr>
              <th>Student Name :</th>
              <td>Manisha Sharma</td>
            </tr>
           
            <tr>
              <th>Student ID :</th>
              <td>N01718641</td>
            </tr>
             <tr>
              <th>Course :</th>
              <td>WDDM-131</td>
            </tr>
        </table>
       </div>
   
      
      <DisplayListstu3 />
    </>
  )
}

export default App
