import React, { useState, useEffect } from "react";

function App() {
    const [randomDog, setRandomDog] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(resp => resp.json())
            .then(resp => {
                console.log(resp)
                setRandomDog(resp.message)
            })

    }, [])
    return (

        randomDog ? <img src={randomDog} alt="A Random Dog" /> : <p>Loading...</p>

    )
}

export default App; 