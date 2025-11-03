import { useState } from "react"

const Button = () => {
    const [count, setCount] = useState(0)
    return(
        <>
            <h1>Vite + React</h1>
        
              <div className='logo'>  
                <button onClick={
                  () => {
                    setCount(
                      count + 1
                    )
                  }
                }>
                  count is {count}
                </button>
              </div>
            </>
    )
}
export default Button