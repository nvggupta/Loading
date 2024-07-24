import React, { useEffect, useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  const [result , setResult] = useState("loading")
  useEffect(()=>{
    const timer = setInterval(()=>{
      setProgress((prev)=>{
          if(prev>=100)
          {
            clearInterval(timer);
            setResult("completed")
            return 100;
          }
          else return prev+1;
      })
    },100)
    return ()=>clearInterval(timer)
  },[])
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="border rounded-2xl w-1/2 flex bg-gray-200 ">
          <div className="border rounded-2xl max-w-full" style={{width: `${progress}%`,height: "35px" , backgroundColor: "blue",transition:"width 0.1s linear"}} ></div>
        </div>
          <div className=" text-black"> {progress}%</div>
          <div>{result}</div>
      </div>
    </>
  );
}

export default App;
