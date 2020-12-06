import React from 'react'
import {Header} from "./components/Header"
import {State} from "./context/state"
import {ChoiceVolume} from "./components/ChoiceVolume"
import {Info} from "./components/Info"
import {Table} from "./components/Table"


function App() {
    return (
        <State>
            <Header/>
            <div className="container-lg pt-3">
                <ChoiceVolume/>
                <Table />
                <Info />
            </div>
        </State>
    );
}

export default App
