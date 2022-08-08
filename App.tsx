import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

const tasks1 = [
    {id:1, title:"html&CSS", isDone:true},
    {id:2, title:"JS", isDone:true},
    {id:3, title:"React", isDone:false},
]
const tasks2 = [
    {id:1, title:"HelloWorld", isDone:true},
    {id:2, title:"I am Happy", isDone:false},
    {id:3, title:"Yo", isDone:false},
]
const tasks3 = [
    {id:1, title:"Nikita", isDone:true},
    {id:2, title:"Vadim", isDone:true},
    {id:3, title:"Vlad", isDone:false},
]

function App() {
    return (
        <div className="App">
            <Todolist title = "What to learn" tasks={tasks1}/>
            <Todolist title = "Songs" tasks={tasks2}/>
            <Todolist title = "Books" tasks={tasks3}/>
        </div>
    )
}

export default App;
