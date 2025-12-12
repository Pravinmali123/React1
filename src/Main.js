import React, { useState } from 'react';


function Main(){
    const [data, setData] = useState(0)
    const [change, setChange] = useState("hello")

   

    return(
        <>
        <h1>{data}</h1>
      <button onClick={() => setData(data + 1)}> +1 </button>  
      <button onClick={() => setData(data - 1)}> -1 </button>
      <button onClick={() => setData(data + 5)}> +5 </button>
      <button onClick={() => setData(data - 5)}> -5 </button>


      <h1>{change}</h1>
      <button onClick={() => setChange("welcome")}>click me</button>
      <button onClick={() => setChange("Creative")}>click me</button>
      <button onClick={() => setChange("good evening")}>click me</button>
      <button onClick={() => setChange("good bye")}>click me</button>
        </>
    );
}
export default Main;