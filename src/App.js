import React,{Component} from "react"
import data from "./data.json"
import "./App.css"
import Fullpage from"./components/fullpage"
import Aboutme from "./components/aboutme"
import Learning from "./components/learning"
import Skills from "./components/skills"



class App extends Component{
    render(){
        return(
            
            <div>          
            <Aboutme  /> 
            <Skills />
            <Learning />
            </div>
        )
    }
    
}
export default App