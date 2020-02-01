import React,{Component} from "react"
import Welcome from './welcome'
import "./rain.css"
import "./rainy.css"
class Fullpage extends Component{
    state ={
        nameclass:"snow"
    }
    change(){
        this.setState({
            nameclass:this.state.nameclass === "snow" ? "rain" : "snow"
        })
    }
    render(){
        const {children} = this.props
        return(
            <div className={this.state.nameclass} >
           <h1 onClick={()=>this.change()}
           style={{position:"fixed",zIndex:"",color:"yellow"}}
           className="attention">کلیک کنید<br></br>{this.state.nameclass}</h1>
                <div className={'fullpage ${this.props.className || ""}'}
                > {children}</div>
               
            </div>
        )
    }
}
export default Fullpage