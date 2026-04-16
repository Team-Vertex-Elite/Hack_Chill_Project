import { Route, Routes } from "react-router-dom";
import IntroPage from "./Pages/Intro";

function App() {

    return (
        <Routes>
            <Route path="/" element={<IntroPage/>}/>
        </Routes>
    )
}

export default App;