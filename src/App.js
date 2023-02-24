import React from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default function App() {
    return(
        <>
            <div>
                <NavBar title ="News"></NavBar>
                <News></News>
            </div>

        </>

    )
}