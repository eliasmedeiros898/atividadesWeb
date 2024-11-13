import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(true);
  const [previousCount, setPreviousCount] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente ou ao parar
    }
  }, [isRunning]); // Reexecuta o efeito quando isRunning muda

  const handleStop = () => {
    setIsRunning(false);
    setPreviousCount(count);
    setCount(0);
  };

  return (
    <>
      
      <div className="card">
        <h1 >
          count is {count}
        </h1>
      
      </div>
      <button onClick={handleStop}>
        Stop
      </button>

      <div>
      {!isRunning ? (
        <div>
          <h2>Contagem anterior: {previousCount}</h2>
        </div>
      ) : (
        <></>
      )}
      </div>
     
    </>
  )
}

export default App
