import React, {Component}  from "react"
import data from "../data.json"
import { SocialIcon } from 'react-social-icons';
import Fullpage from "./fullpage"
class Aboutme extends Component{
             render(){
                    return (
                            <Fullpage>
                                            <h1 className="data">{data.title}</h1>
                                            <h2>{data.subtitle} </h2>
                                    
                                    <div className="divpage" style={{display:"inline"}}>    { Object.keys(data.links).map(key => {
                    return ( <span> <SocialIcon url={data.links[key]} /> </span> );})}
                        </div>
                                    
                            </Fullpage>
                )
            }}
                                         

export default Aboutme