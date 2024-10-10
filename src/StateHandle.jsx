import React, {useState} from 'react'
import './Body.css'
import Img from './bird.jpg'
const StateHandle = () => {
  
  const [like,setLike] = useState(1000)

  function increment(){
    setLike(like + 1) // 1001

    
  }

  return(
    <div>
      <img src={Img} alt=""/>
      <p>
        {like}
      </p>
      <button onClick={increment}>Like</button>
       
    </div>
  )
}
export default App;
  
