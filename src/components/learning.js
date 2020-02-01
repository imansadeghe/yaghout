import React , {Component} from "react"
import Fullpage from "./fullpage"
import data from "../data.json"
import "./fullpage.css"

class Learning extends Component{
    state={
        color:"white"
    }
    changeColor(){
        this.setState({
            color:this.state.color === 'white' ? 'red' : 'white'
        })
    }
    render(){
        return(
           <div >
               <Fullpage >
        <h3 className="divpage">{data.sections[0].items.map(num=>{
        return <p>{num.content}</p>
        })}</h3>
               </Fullpage>
               
             </div>
            
          
           
        )
    }
}
export default Learning