import React,{Component} from "react"
import Fullpage from "./fullpage"
import data from "../data.json"
import "./fullpage.css"
import { findByLabelText } from "@testing-library/react"
import "./rainy.css"
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


export default class Skills extends Component{

   

    render(){
        return(
            <div style={{backgroundColor:"brown",maxWidth:"100vw",borderRadius:"50%"}}>
                 <h1>{data.sections[1].title}</h1>
                 <center>
                 <Element name="test2" className="element">
          
        </Element>

                <div className="skill" style={{maxWidth:"59vw"}} >
                    {data.sections[1].items.map(sk =>{
                        return(
                            <section style={{width:"20vw",margin:"1%"}}>
                            <img style={{width:"100% "}} src={sk.content.image}/>
                            <h1>{sk.content.title}</h1>
                            </section>
                       
                        )
                    })}
                </div></center>
                <Element name="test1" className="element">
         
        </Element>

                </div>
           
          
        )
    }

}