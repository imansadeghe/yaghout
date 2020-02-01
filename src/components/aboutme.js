import React, {Component}  from "react"
import data from "../data.json"
import { SocialIcon } from 'react-social-icons';
import Fullpage from "./fullpage"
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import "./rainy.css"


class Aboutme extends Component{
   
             render(){
                    return (
                            <Fullpage>
                                 <Element name="test4" className="element">
          
          </Element>
                                <nav  className="nav2 rainy"><h2 style={{paddingTop:"5vh"}}></h2></nav>
                       
                                <nav className="nav">
                                <Link activeClass="active" to="test2" spy={true} smooth={true} offset={315} duration={500} >
                                About </Link> 
                                <Link activeClass="active" to="test3" spy={true} smooth={true} offset={-100} duration={500}>
                                Skills</Link>
                                <Link activeClass="active" to="test4" spy={true} smooth={true} offset={-100} duration={500}>
                                Home</Link>
   </nav>
                                            <h1 className="divpage">{data.title}</h1>
                                           
                                            <h2 style={{paddingTop:"10vh"}}>{data.subtitle} </h2>
                                    
                                    <div className="" style={{display:"inline"}}>    { Object.keys(data.links).map(key => {
                    return ( <span> <SocialIcon url={data.links[key]} /> </span> );})}
                        </div>
                        <Link  activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            <img style={{maxWidth:"2vw",paddingTop:"30vh"}}  src={data.icons.down} alt=""/></Link>
            <Element name="test3" className="element">
          
        </Element>

                            </Fullpage>
                )
            }}
                                         

export default Aboutme  