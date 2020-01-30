import React,{Component} from "react"
import Fullpage from "./fullpage"
import data from "../data.json"
import "./fullpage.css"
import { findByLabelText } from "@testing-library/react"
export default class Skills extends Component{
    render(){
        return(
            <div style={{backgroundColor:"brown",maxWidth:"100vw"}}>
                 <h1>{data.sections[1].title}</h1>
                 <center>
                <div className="skill" style={{maxWidth:"59vw"}} >
                    {data.sections[1].items.map(sk =>{
                        return(
                            <section style={{width:"20vw"}}>
                            <img style={{width:"100% "}} src={sk.content.image}/>
                            <h1>{sk.content.title}</h1>
                            </section>
                       
                        )
                    })}
                </div></center></div>
           
          
        )
    }

}