import React,{Component} from "react"
import data from "./data.json"
import "./App.css"
import Fullpage from"./components/fullpage"
import Aboutme from "./components/aboutme"
import Learning from "./components/learning"
import Skills from "./components/skills"

import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



class App extends Component{
    render(){
        return(
            
            <div>    
               
            <Aboutme  />
            <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
            <img  src={data.icons.down} alt=""/>
        </Link>
            <Skills />
            <Learning />
        
            <Element name="test1" className="element">
          test 1 
        </Element>

            </div>
        )
    }
    
}
export default App