
// state
// belly => full, empty, normal
// brain => drunk, 

import { useState } from "react"

// hooks: useState, useRef, useEffect, useContext
// state => is a mutable object for managing an updating a particular data in a component

const StateManagement = () => {
    // useState
    // variable/data, function (updating the state)
    // const [data, function] = useState(defaultValue) // previous value
    const [name, setName] = useState("Olamide")
    const [count, setCount] = useState(1)
    const [isLOggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({
        name: "Leken",
        age: 15,
        role: "patient"
    })
    const [products, setProducts] = useState([{ name: "Nikeshoe" }])

    const handleChange = () => {
        setName("John")
    }

    const handleCount = () => {
        // setCount(count + 1)
        setCount((prev) => prev + 1)
    }

    const handleToggle = () => {
        setIsLoggedIn((prev) => !prev)
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            alignItems: "start"
        }}>
            <h1>State Management</h1>
            <button onClick={handleChange}>Name</button>
            <button onClick={handleCount}>Count: {count}</button>
            <p>{name}</p>

            <p style={{
                background: isLOggedIn ? "green" : "red",
                color: "white",
                padding: "8px",
                borderRadius: "5px",
                margin: "0 1rem"
            }}>{isLOggedIn ? `Welcome ${name}` : "Please login"}</p>

            <button onClick={handleToggle}>Toggle User</button>

            <div>
                {
                    products.length === 0 ? (
                        <div>
                            <p>No products found</p>
                        </div>
                    ) : (
                        <div>
                            <p>There's prodyct</p>
                        </div>
                    )

                }
            </div>

            <div>
                {
                    user.role === "patient" ? (
                        <div>
                            <ul>
                                <li>Book doctor</li>
                                <li>Track appointments</li>
                                <li>Ask question</li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <ul>
                                <li>See recnt appointment</li>
                                <li>See recnt appointment</li>
                                <li>See recnt appointment</li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default StateManagement