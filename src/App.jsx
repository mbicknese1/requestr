import {hot} from "react-hot-loader"
import React, {useState, useEffect} from "react"
import {chrome} from "./chrome"



const App = () => {
    const [state, setState] = useState({message: "Nice!"})
    useEffect(() => {
        const listener = message => setState(message)
        chrome.runtime.onMessage.addListener(listener)
        return () => chrome.runtime.onMessage.removeListener(listener)
    }, [])
return <h1>Hello React {state.message}</h1>
}

export default hot(module)(App)