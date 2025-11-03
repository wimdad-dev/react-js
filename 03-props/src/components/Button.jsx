import React, { useState } from 'react'

const Button = (props) => {
    console.log(props);
    
    const [count, setCount] = useState(0)
    return (
        <>
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
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}

export default Button
