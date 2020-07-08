import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

if (process.env.NODE_ENV === "development") {
    import("./background").then(() => console.log("Background script imported"))
}

ReactDOM.render(<App />, document.getElementById("root"))